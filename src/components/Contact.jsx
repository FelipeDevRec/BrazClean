import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,     // Service ID
      import.meta.env.VITE_TEMPLATE_ID,    // Template ID
      form.current,
      import.meta.env.VITE_PUBLIC_KEY      // Public Key
    ).then((result) => {
        alert('Orçamento enviado com sucesso! Obrigado pelo contato.');
        form.current.reset();
    }, (error) => {
        alert('Erro ao enviar orçamento. Tente novamente.');
    });
  };

  return (
    <section id='contact' className="p-8 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Peça um orçamento</h3>
      <p className="mb-6">Preencha as informações abaixo e responderemos em breve.</p>
      <form ref={form} onSubmit={sendEmail} className="max-w-md w-full mx-auto p-4 bg-white rounded shadow grid gap-4">
        <input 
          type="text"
          name="nome"
          placeholder="Seu nome"
          required
          className="border rounded px-4 py-2"
        />
        <input 
          type="tel"
          name="telefone"
          placeholder="Telefone/WhatsApp"
          required
          className="border rounded px-4 py-2"
        />
        <select name="servico" required className="border rounded px-4 py-2">
          <option value="">Selecione o Serviço</option>
          <option value="Limpeza de Estofados">Limpeza de Estofados</option>
          <option value="Impermeabilização">Impermeabilização</option>
          <option value="Higienização">Higienização</option>
        </select>
        <textarea 
          name="descricao"
          placeholder="Descreva sua necessidade"
          required
          className="border rounded px-4 py-2"
        />
        <button type="submit" className="bg-green-600 text-white rounded px-6 py-2 hover:bg-green-700 transition">
          Enviar Orçamento
        </button>
      </form>
      <p className="mt-4 text-sm">Atendimento por agendamento</p>
    </section>
  );
}
