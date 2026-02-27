import { useState, useMemo } from 'react';
import { projects, getCategories } from '../data/projects';

/**
 * Hook para gerenciar filtros e busca de projetos
 * Retorna lista filtrada de projetos baseada em categoria e busca
 */
export function useProjects() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => getCategories(), []);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchCategory = activeCategory === 'Todos' || project.category === activeCategory;
      const matchSearch = !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return {
    projects: filteredProjects,
    categories,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    totalProjects: projects.length,
    totalFiltered: filteredProjects.length
  };
}
