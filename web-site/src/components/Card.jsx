export default function Card({ title, description, image, link, className = '' }) {
  const CardContent = (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden h-full flex flex-col ${className}`}>
      {image && (
        <div className="w-full h-48 bg-gray-200 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        {link && (
          <a href={link} className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
            Saiba mais →
          </a>
        )}
      </div>
    </div>
  );

  return CardContent;
}
