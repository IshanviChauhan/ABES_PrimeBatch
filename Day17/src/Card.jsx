const Card = ({ name, email, githubLink }) => (
  <div className="card">
    <h3>{name}</h3>
    <p>Email: {email}</p>
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      GitHub Profile
    </a>
  </div>
);

export default Card;