export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
    return (
        <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${activeCategory === category
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-600 hover:text-blue-600'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
