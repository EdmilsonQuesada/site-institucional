import { useState, useEffect } from 'react';
import { validateContactForm } from '../utils/formValidation';

export default function ContactForm({ buttonText = 'Enviar Mensagem' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' }); // type: 'success' | 'error'
  const [csrfToken, setCsrfToken] = useState('');

  // Busca o token CSRF assim que o componente for montado
  useEffect(() => {
    const fetchCsrf = async () => {
      try {
        const url = import.meta.env.VITE_API_URL
          ? `${import.meta.env.VITE_API_URL}/api/csrf-token`
          : 'http://localhost:3000/api/csrf-token';

        const response = await fetch(url, { credentials: 'include' });
        const data = await response.json();
        setCsrfToken(data.csrfToken);
      } catch (err) {
        console.error('Falha ao obter CSRF token. Backend pode estar offline.', err);
      }
    };
    fetchCsrf();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpa erro ao digitar
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    // Validação Client-side
    const newErrors = validateContactForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const url = import.meta.env.VITE_API_URL
        ? `${import.meta.env.VITE_API_URL}/api/contact`
        : 'http://localhost:3000/api/contact';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'CSRF-Token': csrfToken
        },
        credentials: 'include', // Envia os cookies
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar a mensagem');
      }

      setStatus({ type: 'success', message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: 'error',
        message: error.message || 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      {status.message && (
        <div className={`mb-6 p-4 rounded-lg font-medium text-sm flex items-start ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
          {status.message}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition ${errors.name ? 'border-red-500' : 'border-gray-200 bg-gray-50 focus:bg-white'
            }`}
          placeholder="Seu nome completo"
          disabled={loading}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-200 bg-gray-50 focus:bg-white'
            }`}
          placeholder="seu@email.com.br"
          disabled={loading}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition ${errors.phone ? 'border-red-500' : 'border-gray-200 bg-gray-50 focus:bg-white'
            }`}
          placeholder="(11) 99999-9999"
          disabled={loading}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Sua Mensagem *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none ${errors.message ? 'border-red-500' : 'border-gray-200 bg-gray-50 focus:bg-white'
            }`}
          placeholder="Como podemos te ajudar?"
          disabled={loading}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary py-3 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
      >
        {loading ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </span>
        ) : buttonText}
      </button>
      <p className="text-xs text-gray-500 mt-4 text-center">
        * Campos obrigatórios. Prometemos não enviar spam.
      </p>
    </form>
  );
}
