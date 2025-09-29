import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Braz Clean" className="h-10" />
          <div>
            <p className="text-sm">Braz Clean © {new Date().getFullYear()}</p>
            <p className="text-xs text-gray-500">Limpeza de estofados • Impermeabilização</p>
          </div>
        </div>
        <div className="text-sm text-gray-600">Contato: (81) 99720-8700 • brazcleanrec@gmail.com </div>
      </div>
    </footer>
  )
}