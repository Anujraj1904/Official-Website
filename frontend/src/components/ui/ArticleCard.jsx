const ArticleCard = ({ experience, date, title, image }) => {
  return (
    <div className="p-5 hover:shadow-lg transition min-w-[250px]">
      <div className="w-full h-[2px] bg-white mb-4" />

      <div className="flex justify-between items-center text-gray-300 text-sm mb-2">
        <span>{experience}</span>
        <span>{date}</span>
      </div>

      <h3 className="text-xl font-semibold text-white mb-4">
        {title}
      </h3>

      <img
        src={image}
        alt={title}
        className="w-full h-50 object-cover"
      />
    </div>
  );
};

export default ArticleCard;
