export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">Logo</h3>
            <p className="text-gray-400">Desenvolvendo soluções inovadoras para a web.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Portfólio</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contato</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <p className="text-gray-400">
              <a href="mailto:contato@empresa.com" className="hover:text-white transition">
                contato@empresa.com
              </a>
            </p>
            <p className="text-gray-400">
              <a href="tel:+5511999999999" className="hover:text-white transition">
                (11) 9999-9999
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Empresa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
