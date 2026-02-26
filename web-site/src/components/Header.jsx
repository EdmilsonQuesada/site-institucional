import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-max">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Logo</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              Portfólio
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#" className="block text-gray-600 hover:text-blue-600 py-2">
              Home
            </a>
            <a href="#" className="block text-gray-600 hover:text-blue-600 py-2">
              Portfólio
            </a>
            <a href="#" className="block text-gray-600 hover:text-blue-600 py-2">
              Blog
            </a>
            <a href="#" className="block text-gray-600 hover:text-blue-600 py-2">
              Contato
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
