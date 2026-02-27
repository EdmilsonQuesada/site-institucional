import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import Portfolio from './Portfolio';

describe('Portfolio Page', () => {
  const renderPortfolio = () => {
    return render(
      <HelmetProvider>
        <Portfolio />
      </HelmetProvider>
    );
  };

  it('renders portfolio page without crashing', () => {
    const { container } = renderPortfolio();
    expect(container).toBeInTheDocument();
  });

  it('renders portfolio title', () => {
    renderPortfolio();
    expect(screen.getByText('Nosso Portfólio')).toBeInTheDocument();
  });

  it('renders category filter buttons', () => {
    renderPortfolio();
    expect(screen.getByText('Todos')).toBeInTheDocument();
  });

  it('renders project cards', () => {
    renderPortfolio();
    const projectElements = screen.getAllByRole('button').filter(btn => 
      btn.textContent === 'Ver Projeto' || btn.textContent === 'Solicitar Proposta'
    );
    expect(projectElements.length).toBeGreaterThan(0);
  });

  it('renders search input', () => {
    renderPortfolio();
    const searchInput = screen.getByPlaceholderText('Buscar projetos...');
    expect(searchInput).toBeInTheDocument();
  });
});
