import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogCard from '../../src/components/BlogCard';

describe('BlogCard Component', () => {
    const mockPost = {
        id: 'test-1',
        slug: 'post-teste',
        title: 'Hello World',
        excerpt: 'Isso é um teste do blog.',
        coverImage: 'https://via.placeholder.com/800x600',
        date: '2026-02-26',
        author: {
            name: 'Tester QA',
            avatar: 'https://via.placeholder.com/150'
        },
        category: 'Testes',
        readTime: '2 min'
    };

    it('renders correctly with given props', () => {
        render(
            <BrowserRouter>
                <BlogCard post={mockPost} />
            </BrowserRouter>
        );

        expect(screen.getByText('Hello World')).toBeInTheDocument();
        expect(screen.getByText('Isso é um teste do blog.')).toBeInTheDocument();
        expect(screen.getByText('Testes')).toBeInTheDocument();
        expect(screen.getByText('Tester QA')).toBeInTheDocument();
        expect(screen.getByText('2 min')).toBeInTheDocument();
    });

    it('links to the correct slug', () => {
        render(
            <BrowserRouter>
                <BlogCard post={mockPost} />
            </BrowserRouter>
        );

        const titleLink = screen.getByRole('link', { name: /hello world/i });
        expect(titleLink).toHaveAttribute('href', '/blog/post-teste');
    });
});
