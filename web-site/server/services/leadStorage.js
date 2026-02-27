import fs from 'fs/promises';
import path from 'path';

// Define o diretório e o caminho do arquivo de banco de dados JSON para as leads
const DB_DIR = path.resolve('data');
const DB_FILE = path.join(DB_DIR, 'leads.json');

// Função para garantir que o diretório e o arquivo existem
async function initDB() {
    try {
        await fs.mkdir(DB_DIR, { recursive: true });
        try {
            await fs.access(DB_FILE);
        } catch {
            // Cria o arquivo se não existir
            await fs.writeFile(DB_FILE, JSON.stringify([], null, 2), 'utf8');
        }
    } catch (error) {
        console.error('Erro ao inicializar o armazenamento de leads:', error);
    }
}

// Inicializa a base
initDB();

export async function saveLead(leadData) {
    try {
        // 1. Lê os leads existentes
        const fileContent = await fs.readFile(DB_FILE, 'utf8');
        const leads = JSON.parse(fileContent);

        // 2. Prepara o novo lead
        const newLead = {
            id: Date.now().toString(),
            ...leadData,
            createdAt: new Date().toISOString()
        };

        // 3. Adiciona
        leads.push(newLead);

        // 4. Salva no arquivo
        await fs.writeFile(DB_FILE, JSON.stringify(leads, null, 2), 'utf8');

        return newLead;
    } catch (error) {
        console.error('Falha ao salvar lead:', error);
        throw new Error('Não foi possível salvar os dados do lead.');
    }
}

export async function getAllLeads() {
    try {
        const fileContent = await fs.readFile(DB_FILE, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        return [];
    }
}
