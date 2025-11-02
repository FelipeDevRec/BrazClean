# BrazClean 🧹✨

Website moderno e responsivo para empresa de limpeza residencial e comercial, desenvolvido com React + Vite.

## 📋 Sobre o Projeto

BrazClean é uma aplicação web completa que oferece uma experiência profissional para clientes que buscam serviços de limpeza. O site apresenta os serviços oferecidos, permite contato direto via WhatsApp e formulário de e-mail integrado.

## ✨ Funcionalidades

### 🎨 Interface Moderna
- Design responsivo desenvolvido com **Tailwind CSS**
- Animações suaves e transições elegantes
- Layout otimizado para dispositivos móveis e desktop

### 🎠 Carrossel de Imagens
- Carrossel interativo implementado com **React Slick**
- Navegação automática e manual entre slides
- Exibição de serviços e depoimentos

### 📧 Formulário de Contato
- Integração com **EmailJS** para envio de e-mails
- Validação de campos em tempo real
- Feedback visual de envio (sucesso/erro)
- Não requer backend próprio

### 💬 Botão WhatsApp Flutuante
- Componente **WhatsAppButton** fixo e acessível
- Redirecionamento direto para conversa no WhatsApp
- Design responsivo com ícone personalizado

### 📱 Componentes Principais
- **Header**: Navegação principal com menu responsivo
- **Hero**: Seção de destaque com carrossel de imagens
- **Services**: Apresentação dos serviços oferecidos
- **Contact**: Formulário de contato integrado com EmailJS
- **Footer**: Informações de contato e redes sociais
- **WhatsAppButton**: Botão flutuante para contato direto

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **React Slick** - Biblioteca para carrosséis/sliders
- **Slick Carousel** - Estilos para o carrossel
- **EmailJS** - Serviço de envio de e-mails sem backend
- **React Icons** - Biblioteca de ícones

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

## 🚀 Como Iniciar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/FelipeDevRec/BrazClean.git
cd BrazClean
```

### 2. Instale as dependências

```bash
npm install
```

ou

```bash
yarn install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e adicione suas credenciais do EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

#### Como obter as credenciais do EmailJS:

1. Crie uma conta gratuita em [EmailJS](https://www.emailjs.com/)
2. Crie um novo serviço de e-mail
3. Crie um template de e-mail
4. Copie as credenciais (Service ID, Template ID e Public Key)

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

ou

```bash
yarn dev
```

O projeto estará disponível em `http://localhost:5173`

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção localmente
- `npm run lint` - Executa o linter para verificar o código

## 📂 Estrutura do Projeto

```
BrazClean/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Cabeçalho e navegação
│   │   ├── Hero.jsx            # Seção principal com carrossel
│   │   ├── Services.jsx        # Seção de serviços
│   │   ├── Contact.jsx         # Formulário de contato
│   │   ├── Footer.jsx          # Rodapé
│   │   └── WhatsAppButton.jsx  # Botão flutuante do WhatsApp
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos globais
│   ├── main.jsx                # Ponto de entrada
│   └── index.css               # Estilos Tailwind
├── .env.example                # Exemplo de variáveis de ambiente
├── package.json                # Dependências e scripts
├── tailwind.config.js          # Configuração do Tailwind
├── vite.config.js              # Configuração do Vite
└── README.md                   # Este arquivo
```

## 🎯 Funcionalidades Detalhadas

### Carrossel de Imagens (Hero Component)

- Implementado com **react-slick**
- Configurações personalizadas:
  - Autoplay ativado
  - Velocidade de transição configurável
  - Navegação por pontos (dots)
  - Setas de navegação
  - Infinite loop

### Formulário de Contato

- Campos validados:
  - Nome
  - E-mail
  - Telefone
  - Mensagem
- Envio assíncrono com EmailJS
- Feedback visual de sucesso/erro
- Reset automático após envio bem-sucedido

### Botão WhatsApp

- Posicionamento fixo no canto inferior direito
- Animação de entrada suave
- Link direto para conversa no WhatsApp
- Número configurável

## 🎨 Customização

### Cores e Estilos

As cores principais podem ser customizadas no arquivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#sua-cor',
      secondary: '#sua-cor',
    }
  }
}
```

### Conteúdo

Edite os componentes em `src/components/` para personalizar:
- Textos e títulos
- Imagens do carrossel
- Serviços oferecidos
- Informações de contato

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Importe o projeto no [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente
4. Deploy automático!

### Outras Opções

- **Netlify**
- **GitHub Pages**
- **Railway**
- **Render**

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1440px+)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Felipe Dev**

- GitHub: [@FelipeDevRec](https://github.com/FelipeDevRec)

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através do formulário no site ou pelo WhatsApp.

---

Feito com ❤️ por Felipe Dev
