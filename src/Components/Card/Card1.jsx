import "./card1.css";

const Card1 = ({ icon, title, description, link }) => {
  return (
    <div className="Card-container">
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>

      <div className="description">
        <h2>{title} </h2>
        <p>{description}</p>
        <a
          href={link}
          className="py-4 pt-3 mt-3 text-lg font-semibold text-white underline"
        >
          Read more »
        </a>
      </div>
    </div>
  );
};

export default Card1;
