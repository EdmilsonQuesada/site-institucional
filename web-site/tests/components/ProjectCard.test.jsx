import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectCard from '../../src/components/ProjectCard';

describe('ProjectCard Component', () => {
    const projectMock = {
        id: 'test-project',
        title: 'Projeto Teste',
        slug: 'projeto-teste',
        category: 'Web',
        description: 'Descrição do projeto teste',
        image: 'https://via.placeholder.com/300x200',
    };

    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <ProjectCard project={projectMock} />
            </BrowserRouter>
        );

        expect(screen.getByText('Projeto Teste')).toBeInTheDocument();
        expect(screen.getByText('Web')).toBeInTheDocument();
        expect(screen.getByText('Descrição do projeto teste')).toBeInTheDocument();
    });

    it('contains the correct link', () => {
        render(
            <BrowserRouter>
                <ProjectCard project={projectMock} />
            </BrowserRouter>
        );

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/portfolio/projeto-teste');
    });
});
