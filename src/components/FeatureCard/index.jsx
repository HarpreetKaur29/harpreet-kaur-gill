const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="relative text-center px-12 pb-12 py-16 bg-white rounded-xl shadow-xl">
      <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-28 h-28">
        <img src={icon} alt={title} />
      </div>
      <div className="text-primary font-medium text-xl mb-6">{title}</div>
      <div className="leading-9 text-typography">{description}</div>
    </div>
  );
};

export default FeatureCard;
