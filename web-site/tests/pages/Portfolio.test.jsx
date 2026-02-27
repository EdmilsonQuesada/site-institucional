import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Portfolio from '../../src/pages/Portfolio';

// Mocar o IntersectionObserver
beforeAll(() => {
    global.IntersectionObserver = class IntersectionObserver {
        constructor() { }
        observe() { return null; }
        unobserve() { return null; }
        disconnect() { return null; }
    };
});

describe('Portfolio Page', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <Portfolio />
            </BrowserRouter>
        );
        expect(container).toBeInTheDocument();
    });

    it('renders portfolio title and search input', () => {
        render(
            <BrowserRouter>
                <Portfolio />
            </BrowserRouter>
        );
        expect(screen.getByText(/Nosso Portfólio/)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Buscar projetos.../)).toBeInTheDocument();
    });
});
