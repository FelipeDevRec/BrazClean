import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-4">Peça um orçamento</h3>
        <p className="mb-6 text-gray-600">Preencha as informações abaixo e responderemos em breve.</p>
        <form className="grid gap-4 md:grid-cols-2">
          <input placeholder="Nome" className="p-3 rounded border" />
          <input placeholder="Telefone ou WhatsApp" className="p-3 rounded border" />
          <input placeholder="E-mail" className="p-3 rounded border" />
          <select className="p-3 rounded border">
            <option>Selecione o serviço</option>
            <option>Limpeza de Estofados</option>
            <option>Impermeabilização</option>
            <option>Higienização</option>
          </select>
          <textarea placeholder="Mensagem" className="p-3 rounded border md:col-span-2" rows="4"></textarea>
          <button type="button" className="md:col-span-2 px-5 py-3 rounded bg-primary text-white">Enviar</button>
        </form>
        <p className="mt-6 text-sm text-gray-500">Atendimento por agendamento</p>
      </div>
    </section>
  )
}