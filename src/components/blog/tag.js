const Tag = () => {
  const tags = [
    "Software Engineering",
    "Project Management",
    "Software Architecture",
    "Systems Design",
    "DevOps",
    "Web Development",
    "Web Trends",
    "Career",
  ];
  return (
    <ul className="aside-tag">
      {tags.length > 0 && tags.map((tag, index) => (
        <li key={index}><i className="fa fa-circle" style={{marginRight:'10px',fontSize:'.8rem'}}></i>{tag}</li>
      ))}
    </ul>
  )
}

export default Tag;
