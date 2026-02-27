import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-blue-600 transition">
              Portfólio
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition">
              Blog
            </Link>
            <Link to="/contato" className="text-gray-600 hover:text-blue-600 transition">
              Contato
            </Link>
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
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-blue-600 py-2">
              Home
            </Link>
            <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-blue-600 py-2">
              Portfólio
            </Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-blue-600 py-2">
              Blog
            </Link>
            <Link to="/contato" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-blue-600 py-2">
              Contato
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
