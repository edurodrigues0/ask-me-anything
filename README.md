# AMA (Ask me anything)

## Apresentação

O projeto AMA (Ask Me Anything) foi desenvolvido como parte da Semana Tech Go React organizada pela Rocketseat. Este projeto tem como objetivo criar uma plataforma interativa onde os usuários podem fazer perguntas em tempo real e receber respostas imediatas, proporcionando uma experiência de interação fluida e dinâmica.

## Tecnologias Utilizadas

- React.js: A biblioteca principal utilizada para a construção da interface do usuário, permitindo a criação de componentes reutilizáveis e gerenciando o estado da aplicação de forma eficiente.

- TypeScript: Utilizado para adicionar tipagem estática ao JavaScript, garantindo maior segurança e clareza no desenvolvimento, além de facilitar a manutenção do código a longo prazo.

- Vite: Um bundler rápido e moderno, escolhido pela sua eficiência na criação de projetos React, oferecendo um ambiente de desenvolvimento otimizado com recarregamento rápido e build rápido para produção.

- WebSockets: Implementado para permitir a atualização em tempo real na plataforma, possibilitando que perguntas e respostas sejam exibidas instantaneamente sem a necessidade de recarregar a página.

- React Query: Utilizado para gerenciar o estado de dados assíncronos, como as perguntas e respostas, facilitando o cache, a sincronização e a atualização dos dados em tempo real, além de melhorar a performance da aplicação ao minimizar requisições desnecessárias ao servidor.

## Funcionalidades do Projeto

- Envio de Perguntas em Tempo Real: Os usuários podem enviar perguntas que são exibidas imediatamente na interface, graças à integração com WebSockets.

- Atualização Automática das Respostas: As respostas dos administradores ou outros usuários aparecem em tempo real, garantindo uma interação dinâmica e sem atrasos.

- Melhoria na Resolução de Respostas: A plataforma permite que as respostas sejam marcadas como "resolvidas", destacando as questões que já foram abordadas.

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [npm](https://docs.npmjs.com/cli/v10/commands/npm-install)

## Rodando o Front End

```bash
# Clone este repositorio
$ git clone https://github.com/edurodrigues0/api-maturation-production.git

# Acesse a pasta do projeto no terminal/cmd

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O projeto iniciará em http://localhost:5173
```

## Melhorias

- [ ] Interface Responsiva
- [ ] Respostas Imediatas

## Conclusão
O projeto AMA (Ask Me Anything) foi uma excelente oportunidade para aplicar e consolidar conhecimentos em React.js, TypeScript e Vite, além de explorar as capacidades dos WebSockets para criar experiências interativas em tempo real. A experiência proporcionada pela Semana Tech Go React foi fundamental para o desenvolvimento de habilidades práticas e a construção de uma aplicação moderna e eficiente.