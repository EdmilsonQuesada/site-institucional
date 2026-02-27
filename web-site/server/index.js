import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de segurança e parsing
app.use(helmet());
app.use(cors({
    origin: process.env.VITE_API_URL ? new URL(process.env.VITE_API_URL).origin : 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// CSRF Protection
const csrfProtection = csurf({ cookie: true });

// Rota para obter o token CSRF (Geralmente chamamos isso no carregamento da aplicação web)
app.get('/api/csrf-token', csrfProtection, (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});

// Rotas da API
// Aplicamos a proteção CSRF em rotas que modificam estado (ex: POST)
app.use('/api/contact', csrfProtection, contactRoutes);

// Error handling para erros CSRF ou outros middlewares
app.use((err, req, res, next) => {
    if (err.code === 'EBADCSRFTOKEN') {
        return res.status(403).json({ error: 'Sessão expirada ou template inválido (CSRF).' });
    }
    next(err);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
