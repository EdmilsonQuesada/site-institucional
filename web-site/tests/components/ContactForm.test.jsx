import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../../src/components/Form';

describe('Contact Form', () => {
    it('renders all form fields', () => {
        render(<Form />);
        expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Telefone/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
    });

    it('shows validation errors for empty submissions', async () => {
        render(<Form />);
        const submitBtn = screen.getByRole('button', { name: /enviar/i });

        fireEvent.click(submitBtn);

        expect(await screen.findByText(/nome deve ter/i)).toBeInTheDocument();
        expect(screen.getByText(/email válido/i)).toBeInTheDocument();
        expect(screen.getByText(/mensagem deve ter/i)).toBeInTheDocument();
    });
});
