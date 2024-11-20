---
title: "Explorando o Next.js com a Estrutura de Pastas app/"
excerpt: "Next.js trouxe uma nova forma de estruturar e organizar suas aplicações com a introdução da pasta `app/`. Entenda como essa mudança pode facilitar o desenvolvimento e melhorar a organização do seu código."
coverImage: "/assets/blog/nextjs/cover.jpg"
date: "2024-11-20T10:25:00.322Z"
author:
  name: Gabriel Borges
  picture: "https://github.com/GabrielBorges2000.png"
ogImage:
  url: "/assets/blog/nextjs/cover.jpg"
---

Com o Next.js 13, a equipe do framework introduziu uma nova abordagem para a estruturação de aplicações, trazendo a pasta `app/` como a forma recomendada para organizar o código de uma maneira mais escalável e modular. Esse novo sistema de arquivos facilita a criação de layouts, páginas e componentes, além de melhorar a experiência do desenvolvedor.

## O que é a estrutura `app/` no Next.js?

A estrutura `app/` é uma nova forma de organizar o código em projetos Next.js, baseada em conceitos de layouts, páginas e aninhamento de diretórios. Com ela, o Next.js oferece uma maneira mais intuitiva de lidar com rotas e componentes reutilizáveis, além de fornecer benefícios de renderização no servidor de forma mais eficiente.

## Principais características da estrutura `app/`

- **Layouts Aninhados**: A pasta `app/` permite criar layouts reutilizáveis e aninhados, o que facilita a criação de aplicações com diversas seções que compartilham um estilo ou comportamento comum. Ao contrário da estrutura baseada na pasta `pages/`, você pode ter componentes compartilhados entre diferentes páginas sem duplicação de código.
  
- **Renderização no Servidor (SSR) e Static Site Generation (SSG)**: A estrutura `app/` integra de maneira mais natural a renderização no servidor e a geração de sites estáticos, permitindo que você controle como e quando o conteúdo será gerado.

- **Roteamento Baseado em Pastas**: Com a estrutura `app/`, o roteamento no Next.js segue uma convenção de pastas onde cada subpasta corresponde a uma rota, o que facilita a organização do código e a navegação entre as páginas.

- **Carregamento Assíncrono de Componentes**: O Next.js oferece a possibilidade de carregar componentes de maneira assíncrona dentro da estrutura `app/`, melhorando a performance da aplicação e o tempo de carregamento.

- **Support para Server Components**: O Next.js introduziu os Server Components, que são componentes que podem ser renderizados no servidor, ajudando a melhorar a performance ao reduzir o tamanho do JavaScript enviado para o cliente.

## Vantagens de usar a estrutura `app/`

1. **Organização e Escalabilidade**  
   A estrutura de pastas `app/` proporciona uma maneira clara e hierárquica de organizar o código, o que facilita o gerenciamento de grandes aplicações. Ao criar layouts e componentes reutilizáveis, a manutenção do código se torna mais simples.

2. **Melhor Controle sobre a Renderização**  
   A possibilidade de escolher entre SSR, SSG e Incremental Static Regeneration (ISR) diretamente nas páginas e componentes permite um controle mais granular sobre a renderização e a geração de conteúdo.

3. **Componentes e Layouts Reutilizáveis**  
   O Next.js com a estrutura `app/` facilita a criação de layouts e componentes que podem ser compartilhados entre várias partes da aplicação, melhorando a eficiência e evitando duplicação de código.

4. **Experiência de Desenvolvimento Aprimorada**  
   Com a introdução de recursos como o carregamento assíncrono de componentes e a renderização no servidor, a experiência do desenvolvedor é mais fluida e as aplicações se tornam mais rápidas.

## Exemplo prático: Criando uma aplicação com a estrutura `app/`

Vamos ver como você pode criar um projeto simples utilizando a estrutura `app/`:

1. **Crie um projeto Next.js**:

```bash
npx create-next-app@latest my-next-app
cd my-next-app
```

2. **Estrutura de Pastas**:

Dentro da pasta ```app/```, crie os seguintes arquivos e pastas:
```bash
app/
├── layout.tsx
├── page.tsx
└── about/
    ├── page.tsx
```

3. **Criando o Layout**:

No arquivo ```layout.tsx```, adicione um layout básico que será compartilhado entre todas as páginas:
```tsx
export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>Meu Site com Next.js</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Meu Site</p>
      </footer>
    </div>
  );
}
```

4. **Criando a Página Inicial**:

No arquivo ```page.tsx```, adicione o conteúdo da página principal:
```tsx
export default function HomePage() {
  return (
    <div>
      <h2>Bem-vindo à nossa página inicial!</h2>
      <p>Este é um exemplo utilizando a estrutura app/ no Next.js.</p>
    </div>
  );
}
```


5. **Criando uma Página Adicional**:

No arquivo ```about/page.tsx```, adicione uma página adicional:
```tsx
export default function AboutPage() {
  return (
    <div>
      <h2>Sobre Nós</h2>
      <p>Esta página foi criada dentro da pasta sobre/ usando a estrutura app/.</p>
    </div>
  );
}
```

--- 
## Conclusão

A introdução da estrutura `app/` no Next.js oferece uma nova maneira de organizar e otimizar o desenvolvimento de aplicações. Com recursos como layouts reutilizáveis, renderização no servidor e suporte a Server Components, o Next.js torna o processo de desenvolvimento mais eficiente e a experiência do usuário mais fluida. Se você ainda não experimentou essa nova estrutura, é um excelente momento para começar a explorar as possibilidades que ela oferece.