import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout Component', () => {
  it('renders children correctly', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders header and footer', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
