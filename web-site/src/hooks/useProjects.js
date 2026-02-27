import { useState, useMemo } from 'react';
import { projects, getCategories } from '../data/projects';

export function useProjects() {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = useMemo(() => getCategories(), []);

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            // Filtrar por categoria
            const matchCategory = activeCategory === 'Todos' || project.category === activeCategory;

            // Filtrar por busca textual (nome ou categoria ou techs)
            const query = searchQuery.toLowerCase();
            const matchSearch =
                project.title.toLowerCase().includes(query) ||
                project.category.toLowerCase().includes(query) ||
                project.technologies.some(tech => tech.toLowerCase().includes(query));

            return matchCategory && matchSearch;
        });
    }, [activeCategory, searchQuery]);

    const getProjectBySlug = (slug) => {
        return projects.find(p => p.slug === slug);
    };

    return {
        projects: filteredProjects,
        allProjects: projects,
        categories,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        getProjectBySlug
    };
}
