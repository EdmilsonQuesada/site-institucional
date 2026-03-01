import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

export default function BlogCard({ post }) {
    // Converte a data string para um formato legível Brasileiro
    const formattedDate = new Date(post.date + 'T00:00:00').toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
            {/* Imagem de Capa */}
            <Link to={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden block">
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {post.category}
                    </span>
                </div>
            </Link>

            {/* Corpo do Card */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Metadados: Autor e Data e Tempo */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                        <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full"
                        />
                        <span className="font-medium">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                    </div>
                </div>

                {/* Título e Resumo */}
                <Link to={`/blog/${post.slug}`} className="block group-hover:text-blue-600 transition-colors">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                        {post.title}
                    </h3>
                </Link>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                </p>

                {/* Rodapé Interno */}
                <div className="flex items-center justify-between mt-auto border-t border-gray-50 pt-4">
                    <span className="text-xs text-gray-400 font-medium">
                        {formattedDate}
                    </span>
                    <Link
                        to={`/blog/${post.slug}`}
                        className="text-blue-600 font-bold text-sm flex items-center group-hover:text-blue-700 transition-colors"
                    >
                        Ler artigo <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
