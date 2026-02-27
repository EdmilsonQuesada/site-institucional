import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Home';

describe('Home Page', () => {
  const renderHome = () => {
    return render(
      <HelmetProvider>
        <Home />
      </HelmetProvider>
    );
  };

  it('renders home page without crashing', () => {
    const { container } = renderHome();
    expect(container).toBeInTheDocument();
  });

  it('renders hero section', () => {
    renderHome();
    expect(screen.getByText(/Transformando Ideias/)).toBeInTheDocument();
  });

  it('renders about section', () => {
    renderHome();
    expect(screen.getByText('Sobre Nós')).toBeInTheDocument();
  });

  it('renders benefits section', () => {
    renderHome();
    expect(screen.getByText('Por Que Nos Escolher')).toBeInTheDocument();
  });

  it('renders projects preview section', () => {
    renderHome();
    expect(screen.getByText('Últimos Projetos')).toBeInTheDocument();
  });

  it('renders project cards', () => {
    renderHome();
    const projects = screen.getAllByText(/E-commerce|Dashboard|Mobile|Portal/);
    expect(projects.length).toBeGreaterThan(0);
  });

  it('renders CTA section', () => {
    renderHome();
    expect(screen.getByText(/Pronto para Transformar/)).toBeInTheDocument();
  });

  it('has proper meta tags', () => {
    renderHome();
    // Meta tags são renderizadas no head
    const title = document.title;
    expect(title).toContain('Site Institucional');
  });
});
