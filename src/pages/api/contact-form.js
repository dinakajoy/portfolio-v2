import contactForm  from '@/components/ContactForm'

export default (req, res) => {
  if (req.method === 'POST') {
    contactForm .contactMail(req.body, (error, response) => {
      if (error !== null) {
        res.status(500).json({ error: error });
      } else {
        res.status(200).json({ message: response });
      }
    });
  }
}
