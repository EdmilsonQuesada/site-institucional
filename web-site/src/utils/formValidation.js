/**
 * Validação de formulário de contato contendo inputs comuns.
 * Funciona tanto no Browser (React) quanto no Server (Node.js).
 */
export function validateContactForm(data) {
    const errors = {};

    if (!data.name || data.name.trim().length < 2) {
        errors.name = 'O nome deve ter pelo menos 2 caracteres.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.email = 'Forneça um endereço de email válido.';
    }

    if (data.phone) {
        // Validação simples para celular no BR (com ou sem DDD, espaços ou traços)
        // Remove caracteres especiais pra testar tamanho
        const phoneClean = data.phone.replace(/[\s()-]/g, '');

        // Testa tamanho mínimo apenas pra aceitar variações frouxas se tiver preenchido
        if (phoneClean.length < 10) {
            errors.phone = 'Se fornecido, o telefone deve ter o formato válido com DDD.';
        }
    }

    if (!data.message || data.message.trim().length < 10) {
        errors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
    }

    return errors;
}
