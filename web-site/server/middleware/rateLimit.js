import rateLimit from 'express-rate-limit';

export const contactRateLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 5, // Limita cada IP a 5 requisições por `window` (por hora)
    message: {
        error: 'Muitas requisições originárias deste IP. Por favor, tente novamente após uma hora.'
    },
    standardHeaders: true, // Retorna rate limit info nos cabeçalhos `RateLimit-*`
    legacyHeaders: false, // Desabilita cabeçalhos `X-RateLimit-*`
});
