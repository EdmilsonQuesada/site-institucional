import express from 'express';
import { contactRateLimiter } from '../middleware/rateLimit.js';
import { saveLead } from '../services/leadStorage.js';
import { sendConfirmationEmail, sendNotificationEmail } from '../services/emailService.js';
import { validateContactForm } from '../utils/formValidation.js';
import { sanitizeInput } from '../utils/sanitizer.js';

const router = express.Router();

router.post('/', contactRateLimiter, async (req, res) => {
    try {
        // 1. Sanitização
        const rawData = req.body;
        const sanitizedData = {
            name: sanitizeInput(rawData.name),
            email: sanitizeInput(rawData.email),
            phone: sanitizeInput(rawData.phone || ''),
            message: sanitizeInput(rawData.message)
        };

        // 2. Validação Server-Side
        const errors = validateContactForm(sanitizedData);
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ error: 'Dados inválidos', details: errors });
        }

        // Capture IP
        const ip = req.ip || req.connection.remoteAddress;

        // 3. Persistência de Dados (JSON / DB)
        const lead = await saveLead({ ...sanitizedData, ip });

        // 4. Envio de Emails (Assíncrono, não trava a resposta para o usuário)
        // Em um cenário real, poderiamos usar uma fila, mas aqui enviamos diretamente
        Promise.allSettled([
            sendConfirmationEmail(sanitizedData),
            sendNotificationEmail(sanitizedData)
        ]).then(results => {
            console.log('Emails de notificação processados', results);
        });

        // 5. Resposta de Sucesso
        res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
        console.error('Erro no endpoint de contato:', error);
        res.status(500).json({ error: 'Erro interno no servidor ao processar o contato.' });
    }
});

export default router;
