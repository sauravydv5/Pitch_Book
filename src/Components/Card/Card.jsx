const Card = ({ icon, title, description, link }) => {
  return (
    <div className="p-4 px-12 bg-white rounded-lg text-start ">
      <img
        src={icon}
        alt="icon"
        className="flex items-start w-12 h-12 mx-auto mb-3 "
      />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <a href={link} className="font-semibold text-blue-600">
        Read more »
      </a>
    </div>
  );
};

export default Card;
