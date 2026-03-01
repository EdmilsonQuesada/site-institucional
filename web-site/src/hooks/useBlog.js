import { useState, useMemo } from 'react';
import { posts, getBlogCategories } from '../data/posts';

export function useBlog() {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = useMemo(() => getBlogCategories(), []);

    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            // Filtrar por categoria
            const matchCategory = activeCategory === 'Todos' || post.category === activeCategory;

            // Filtrar por busca (título, trecho ou categoria)
            const query = searchQuery.toLowerCase();
            const matchSearch =
                post.title.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query) ||
                post.category.toLowerCase().includes(query);

            return matchCategory && matchSearch;
        });
    }, [activeCategory, searchQuery]);

    // Pagination mock (vamos exibir no máximo 6 por view, neste caso todos pois só temos 4)
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;
    const paginatedPosts = filteredPosts.slice(0, page * itemsPerPage);
    const hasMore = filteredPosts.length > paginatedPosts.length;

    const loadMore = () => setPage(p => p + 1);

    const getPostBySlug = (slug) => {
        return posts.find(p => p.slug === slug);
    };

    const getRelatedPosts = (currentPost, limit = 2) => {
        if (!currentPost) return [];
        return posts
            .filter(p => p.id !== currentPost.id && p.category === currentPost.category)
            .slice(0, limit);
    };

    return {
        posts: paginatedPosts,
        allPosts: posts,
        totalResults: filteredPosts.length,
        categories,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        hasMore,
        loadMore,
        getPostBySlug,
        getRelatedPosts
    };
}
