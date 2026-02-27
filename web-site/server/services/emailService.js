import nodemailer from 'nodemailer';

// Configura o transport (exemplo usando SMTP e fallback pra teste)
// No caso real, SMTP_HOST, USER e PASS devem estar no .env
const createTransporter = () => {
    if (process.env.VITE_SMTP_HOST) {
        return nodemailer.createTransport({
            host: process.env.VITE_SMTP_HOST,
            port: process.env.VITE_SMTP_PORT || 587,
            secure: process.env.VITE_SMTP_PORT == 465,
            auth: {
                user: process.env.VITE_SMTP_USER,
                pass: process.env.VITE_SMTP_PASSWORD,
            }
        });
    }

    // Fake transporter (Ethereal Email) para desenvolvimento
    return nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'fake@ethereal.email',
            pass: 'fake_password'
        }
    });
};

const transporter = createTransporter();

export async function sendConfirmationEmail(lead) {
    const mailOptions = {
        from: `"Equipe " <${process.env.VITE_SMTP_USER || 'no-reply@empresa.com'}>`,
        to: lead.email,
        subject: `Recebemos sua mensagem, ${lead.name}!`,
        html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2>Olá, ${lead.name} 👋</h2>
        <p>Gostaríamos de confirmar que recebemos sua mensagem através do nosso site.</p>
        <p>Nossa equipe revisará seu contato e retornará em breve.</p>
        <br/>
        <p><strong>Resumo da sua mensagem:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #3b82f6;">
          ${lead.message}
        </blockquote>
        <br/>
        <p>Atenciosamente,<br>Equipe</p>
      </div>
    `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent:', info.messageId);
        return true;
    } catch (err) {
        console.error('Falha ao enviar confirmation email:', err);
        return false;
    }
}

export async function sendNotificationEmail(lead) {
    const mailOptions = {
        from: `"Site Lead " <${process.env.VITE_SMTP_USER || 'no-reply@empresa.com'}>`,
        to: process.env.VITE_EMAIL_SERVICE || 'vendas@empresa.com', // E-mail da empresa via .env
        subject: `[NOVO LEAD] Contato de ${lead.name}`,
        html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2> Novo Lead Recebido 🎉</h2>
        <p>Um novo contato foi submetido no site institucional.</p>
        <br/>
        <ul>
          <li><strong>Nome:</strong> ${lead.name}</li>
          <li><strong>Email:</strong> ${lead.email}</li>
          <li><strong>Telefone:</strong> ${lead.phone || 'Não informado'}</li>
        </ul>
        <br/>
        <p><strong>Mensagem Original:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #3b82f6;">
          ${lead.message}
        </blockquote>
      </div>
    `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Notification email sent:', info.messageId);
        return true;
    } catch (err) {
        console.error('Falha ao enviar notification email:', err);
        return false;
    }
}
