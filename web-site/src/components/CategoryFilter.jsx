export default function CategoryFilter({ categories = [], activeCategory = 'Todos', onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
            activeCategory === category
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-600 hover:text-blue-600'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
