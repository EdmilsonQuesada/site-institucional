import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('renders main layout', () => {
    const { container } = render(<App />);
    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
  });

  it('renders featured projects section', () => {
    render(<App />);
    expect(screen.getByText('Projetos em Destaque')).toBeInTheDocument();
  });

  it('renders at least 3 project cards', () => {
    render(<App />);
    const cards = screen.getAllByText(/Projeto/);
    expect(cards.length).toBeGreaterThanOrEqual(3);
  });
});
