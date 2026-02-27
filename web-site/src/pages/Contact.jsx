import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Form } from '../components';

export default function Contact() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            <div className="container-max">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="heading-lg mb-6 text-gray-900">Entre em Contato</h1>
                    <p className="text-xl text-gray-600">
                        Estamos prontos para ouvir sua ideia. Preencha o formulário abaixo
                        e nossa equipe de especialistas retornará em até 24 horas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

                    {/* Informações de Contato */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Informações</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Endereço</h4>
                                        <p className="text-gray-600">
                                            Av. Paulista, 1000 - Bela Vista<br />
                                            São Paulo - SP, 01310-100
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Telefone</h4>
                                        <p className="text-gray-600">
                                            <a href="tel:+5511999999999" className="hover:text-blue-600 transition">(11) 9999-9999</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                                        <p className="text-gray-600">
                                            <a href="mailto:contato@empresa.com" className="hover:text-blue-600 transition">contato@empresa.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Horário de Atendimento</h4>
                                        <p className="text-gray-600">
                                            Segunda a Sexta: 09h às 18h<br />
                                            Final de Semana: Fechado
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulário */}
                    <div className="lg:col-span-3">
                        <Form />
                    </div>

                </div>
            </div>
        </div>
    );
}
