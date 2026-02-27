import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/Home';

// Mocar o IntersectionObserver que não existe no jsdom
beforeAll(() => {
    global.IntersectionObserver = class IntersectionObserver {
        constructor() { }
        observe() { return null; }
        unobserve() { return null; }
        disconnect() { return null; }
    };
});

describe('Home Page', () => {
    it('renders correctly', () => {
        const { container } = render(<Home />);
        expect(container).toBeInTheDocument();
    });

    it('renders all main sections', () => {
        render(<Home />);
        expect(screen.getByText(/Transformando Ideias/)).toBeInTheDocument();
        expect(screen.getByText(/Sobre Nós/)).toBeInTheDocument();
        expect(screen.getByText(/Por que nos escolher\?/)).toBeInTheDocument();
        expect(screen.getByText(/Últimos Projetos/)).toBeInTheDocument();
        expect(screen.getByText(/Pronto para/)).toBeInTheDocument();
    });
});
