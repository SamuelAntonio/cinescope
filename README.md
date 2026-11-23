# 🎬 CineScope

**Explore filmes, descubra histórias e organize seus favoritos.**

https://samuelantonio.github.io/cinescope/

CineScope é uma aplicação web de catálogo de filmes desenvolvida com React e JavaScript, integrada à API do TMDB para consulta de informações cinematográficas.

O projeto foi desenvolvido como parte do meu portfólio Front-End, com foco em componentização, gerenciamento de estado, consumo de APIs e construção de interfaces responsivas.

## ✨ Funcionalidades

- Catálogo de filmes integrado ao TMDB.
- Busca de filmes por título.
- Filtro por gênero.
- Visualização de detalhes dos filmes.
- Gerenciamento de filmes favoritos.
- Persistência dos favoritos no navegador.
- Interface responsiva para diferentes dispositivos.

## 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| React | Construção da interface |
| JavaScript (ES6+) | Lógica da aplicação |
| Vite | Ambiente de desenvolvimento |
| React Router DOM | Navegação entre páginas |
| CSS3 | Estilização e responsividade |
| TMDB API | Dados e imagens dos filmes |
| LocalStorage | Persistência dos favoritos |

## 📂 Estrutura do projeto

```text
src/
├── components/
├── pages/
├── services/
├── styles/
├── App.jsx
├── context.jsx
└── main.jsx
```

## 🚀 Como executar

**Pré-requisitos:** Node.js e npm instalados.

1. Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

2. Entre na pasta:

```bash
cd cinescope
```

3. Instale as dependências:

```bash
npm install
```

4. Configure a variável de ambiente com sua credencial do TMDB, conforme o arquivo `.env.example`.

5. Inicie a aplicação:

```bash
npm run dev
```

6. Acesse o endereço informado pelo Vite.

## 🔌 API

O projeto utiliza a API do [The Movie Database (TMDB)](https://www.themoviedb.org/).

A integração permite consultar informações, sinopses, avaliações e imagens dos filmes.

## 📌 Próximas melhorias

- Implementação de testes automatizados.
- Paginação do catálogo.
- Melhorias de acessibilidade.
- Pipeline de CI/CD.
- Deploy da aplicação.

## 👨‍💻 Autor

**Samuel Antonio Gonçalves**

Projeto desenvolvido para fins de aprendizado e portfólio profissional.
