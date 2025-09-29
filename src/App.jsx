import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
