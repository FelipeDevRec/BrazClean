import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


// Custom arrows estilizadas
function NextArrow(props) {
const { onClick } = props
return (
<div
className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full shadow hover:bg-primary/80"
onClick={onClick}
>
⭢
</div>
)
}


function PrevArrow(props) {
const { onClick } = props
return (
<div
className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full shadow hover:bg-primary/80"
onClick={onClick}
>
⭠
</div>
)
}


export default function Hero(){
const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 4000,
arrows: true,
nextArrow: <NextArrow />,
prevArrow: <PrevArrow />,
customPaging: () => (
<button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-primary block"></button>
)
}


return (
<section className="bg-gradient-to-r from-white to-gray-50 py-16">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-4xl font-extrabold mb-4">Seu sofá como novo — sem esforço</h2>
<p className="text-lg text-gray-600 mb-6">Limpeza profissional de estofados, impermeabilização e recuperação de tecidos. Atendimento rápido e com garantia.</p>
<div className="flex gap-4">
<a href="#contact" className="px-5 py-3 rounded bg-primary text-white font-medium">Solicitar Orçamento</a>
<a href="#services" className="px-5 py-3 rounded border border-gray-200">Nossos Serviços</a>
</div>
</div>
<div className="flex justify-center">
<div className="w-80 h-56 rounded-lg shadow overflow-hidden relative">
<Slider {...settings}>
<div>
<img src="/foto1.png" alt="Antes e Depois" className="w-full h-56 object-cover" />
</div>
<div>
<img src="/foto2.png" alt="Limpeza profissional" className="w-full h-56 object-cover" />
</div>
<div>
<img src="/foto3.png" alt="Serviço em andamento" className="w-full h-56 object-cover" />
</div>
</Slider>
</div>
</div>
</div>
</section>
)
}