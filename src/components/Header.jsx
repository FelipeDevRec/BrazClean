import React from 'react'

export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Braz Clean" className="h-12 w-auto" />
          <div>
            <h1 className="text-xl font-bold">Braz Clean</h1>
            <p className="text-sm text-gray-500">Limpeza de estofados & Impermeabilização</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#services" className="hover:text-primary">Serviços</a>
          <a href="#about" className="hover:text-primary">Sobre</a>
          <a href="#contact" className="px-4 py-2 rounded bg-primary text-white">Contato</a>
        </nav>
      </div>
    </header>
  )
}