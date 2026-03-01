import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useBlog } from '../hooks';
import BlogCard from '../components/BlogCard';
import { CTA } from '../components';

export default function BlogPost() {
    const { slug } = useParams();
    const { getPostBySlug, getRelatedPosts } = useBlog();

    const post = getPostBySlug(slug);

    if (!post) {
        return (
            <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col justify-center items-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Artigo não encontrado</h1>
                <p className="text-xl text-gray-600 mb-8 max-w-md">Parece que o link está quebrado ou a postagem foi removida.</p>
                <Link to="/blog" className="btn-primary inline-flex items-center px-6 py-3">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Blog
                </Link>
            </div>
        );
    }

    const relatedPosts = getRelatedPosts(post, 3);
    const formattedDate = new Date(post.date + 'T00:00:00').toLocaleDateString('pt-BR', {
        day: 'numeric', month: 'long', year: 'numeric'
    });

    return (
        <div className="pt-20 bg-white flex flex-col min-h-screen">

            {/* Article Header */}
            <div className="bg-gray-50 border-b border-gray-100 py-12 md:py-20">
                <div className="container-max">
                    <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-10 transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Todos os artigos
                    </Link>

                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600 font-medium">
                            <div className="flex items-center gap-3">
                                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full shadow-sm" />
                                <div className="text-left">
                                    <p className="text-gray-900 font-bold leading-none mb-1">{post.author.name}</p>
                                    <p className="text-sm text-gray-500 leading-none">{post.author.role}</p>
                                </div>
                            </div>
                            <div className="hidden sm:block text-gray-300">•</div>
                            <div>{formattedDate}</div>
                            <div className="hidden sm:block text-gray-300">•</div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" /> {post.readTime}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="container-max -mt-8 md:-mt-12 relative z-10 mb-12 md:mb-20 px-4 md:px-0">
                <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gray-200 aspect-[21/9] w-full max-w-5xl mx-auto">
                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Article Body */}
            <div className="container-max pb-20">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Social Share Sidebar (Desktop only) */}
                    <div className="hidden lg:block w-16 flex-shrink-0">
                        <div className="sticky top-32 flex flex-col gap-4 text-gray-400">
                            <span className="text-xs font-bold uppercase tracking-wider text-center mb-2">Share</span>
                            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </button>
                            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:text-blue-400 hover:border-blue-400 hover:bg-blue-50 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </button>
                            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:text-blue-800 hover:border-blue-800 hover:bg-blue-50 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <article className="prose prose-lg md:prose-xl prose-blue max-w-3xl flex-grow mx-auto w-full">
                        <p className="lead text-2xl text-gray-600 mb-10 font-medium italic">
                            {post.excerpt}
                        </p>

                        <div dangerouslySetInnerHTML={{ __html: post.content }} />

                        <hr className="my-12" />

                        {/* Tags / Categories footer */}
                        <div className="flex flex-wrap items-center justify-between gap-6 pb-8">
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-gray-900">Assuntos em destaque:</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors">
                                    {post.category}
                                </span>
                            </div>

                            {/* Mobile Share */}
                            <div className="flex lg:hidden items-center gap-4 text-gray-500 font-bold">
                                <Share2 className="w-5 h-5" /> Compartilhar:
                                <div className="flex gap-2">
                                    <span className="p-2 border border-gray-200 rounded-full"><Linkedin className="w-4 h-4" /></span>
                                    <span className="p-2 border border-gray-200 rounded-full"><Twitter className="w-4 h-4" /></span>
                                    <span className="p-2 border border-gray-200 rounded-full"><Facebook className="w-4 h-4" /></span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            {/* CTA Section Integrada */}
            <CTA
                title="Escalabilidade Inteligente para o seu Software"
                description="Gostou do conteúdo? Nossa equipe pode ajudar a aplicar estas práticas na sua realidade hoje mesmo."
                buttonText="Falar com Especialistas"
            />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <div className="bg-gray-50 py-20 border-t border-gray-100">
                    <div className="container-max">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-bold text-gray-900">Artigos Relacionados</h2>
                            <Link to="/blog" className="text-blue-600 font-bold hover:text-blue-700 hidden sm:inline-flex items-center transition-colors">
                                Ver todo o Blog <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedPosts.map(relPost => (
                                <BlogCard key={relPost.id} post={relPost} />
                            ))}
                        </div>
                        <div className="mt-8 text-center sm:hidden">
                            <Link to="/blog" className="btn-secondary w-full">Ver todos</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
