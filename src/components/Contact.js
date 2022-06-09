import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from '@/styles/contact.module.css';

const Contact = () => {
  const [res, setRes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // form validation rules
  const validationSchema = yup.object().shape({
    uname: yup.string().required("Name is required please"),
    email: yup.string().email("Email is invalid").required("Email is required please"),
    subject: yup.string().required("Subject is required please"),
    message: yup.string().required("You definitely want to drop me a message"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const resetForm = () => { 
    document.getElementById("contact-form").reset();
  }

  const submitForm = (data) => {
    setIsLoading(true);
    fetch('/api/contact-form', {method: 'POST', headers: {'Content-Type': 'application/json'},  credentials: 'same-origin', body: JSON.stringify(data)})
    .then(response => response.json())
    .then(data => {
        if(data.message) {
          setIsLoading(false);
          setRes('Submitted');
          resetForm();
        } else {
          setIsLoading(false);
          setRes('Error, please reload');
        }
    })
    .catch(error => {
      setIsLoading(false);
      setRes('Error, please reload');
    })
  };

  return (
    <section className={styles.contact}>
      <div className="container">
        <h2>Get In Touch</h2>
        <br />
        <div className={styles.output}></div>
        <div className={styles.cont}>
          <form onSubmit={handleSubmit(submitForm)} id="contact-form">
            <p className={styles.p}>Do you have an interesting project that matches my skill set <span>or</span> want to get extra information on any of my work <span>or</span> just to say hello? </p>
            <p className={styles.p}><i>I’m always open to discussing new and exciting opportunities.</i></p><br />
            <input type="text" name="uname" id="uname" placeholder="Your Name Please..." {...register('uname')} />
            <p className={styles.err}> {errors.uname?.message} </p>
            <input type="text" name="email" id="email" placeholder="Your Email Please..." {...register('email')} />
            <p className={styles.err}> {errors.email?.message} </p>
            <input type="text" name="subject" id="subject" placeholder="Your Reason Please..." {...register('subject')} />
            <p className={styles.err}> {errors.subject?.message} </p>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message Please..." {...register('message')}></textarea>
            <p className={styles.err}> {errors.message?.message} </p>
            <div id="response"></div>
            {!res && <button type="submit" disabled={isLoading} className="btn-sbmt">
              {isLoading ? 'Submitting...' : 'Send'}
            </button>}
            {res && <button type="submit" disabled="true" className="btn-sbmt"> Submitted </button>}
          </form>

          <div className={styles.map}>
            <Image src="/images/dinaka-joy.jpg" alt="Odinaka Joy" width={350} height={400} />
            <br />
            <p className={styles.pc}><span>LOCATION:</span> Nigeria</p>
            <p className={styles.pc}><span>EMAIL:</span> dinakajoy@gmail.com</p>
            <p className={styles.pc}><span>PHONE:</span> +234 (816) 452-2710</p>
          </div>
        </div>
        <div className="clr"></div>
      </div>
    </section>
  )
}

export default Contact;
