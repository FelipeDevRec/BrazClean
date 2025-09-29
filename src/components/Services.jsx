import React from 'react'

const cards = [
  { title: 'Limpeza de Estofados', desc: 'Remoção de manchas, odores e ácaros. Técnicas a seco e úmidas.' },
  { title: 'Impermeabilização', desc: 'Protege contra líquidos e facilita a manutenção.' },
  { title: 'Higienização Profunda', desc: 'Sanitização com produtos seguros para crianças e pets.' }
]

export default function Services(){
  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6">Serviços</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c)=> (
            <div key={c.title} className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold mb-2">{c.title}</h4>
              <p className="text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
