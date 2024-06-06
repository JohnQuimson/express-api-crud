<h1 align="center">
  
 express-api-crud
  
</h1>

<!-- <h4 align="center">summary <a href="http://electron.atom.io" target="_blank">"link"</a>.</h4> -->

<!-- <p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
  <a href="https://gitter.im/amitmerchant1990/electron-markdownify"><img src="https://badges.gitter.im/amitmerchant1990/electron-markdownify.svg"></a>
  <a href="https://saythanks.io/to/bullredeyes@gmail.com">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.paypal.me/AmitMerchant">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p> -->

<p align="center">
  <a href="#description">Description</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#used-technologies">Used technologies</a> 
</p>

![screenshot](https://raw.githubusercontent.com/gist/mahmudinm/47588cab5af928d2c8a2976d90216ea7/raw/88f20c9d749d756be63f22b09f3c4ac570bc5101/programming.gif)

## Description

Iniziamo a creare le API per il nostro blog. Iniziate con un nuovo progetto Express + Prisma.

<strong>Definizione degli endpoint</strong></br>
Vi chiediamo di definire i seguenti endpoint:

- <strong>POST</strong> _/posts_ per creare un nuovo post.
- <strong>GET </strong>_/posts/:slug_ per recuperare un post utilizzando il suo slug.
- <strong>GET</strong>_/posts_ per recuperare tutti i post presenti nel database, con la - possibilità di filtrare per:
  - Post pubblicati.
  - Post che contengono una determinata parola nel titolo o nel contenuto.
- <strong>PUT</strong> _/posts/:slug_ per aggiornare un post.
- <strong>DELETE</strong> _/posts/:slug_ per eliminare un post.

### Bonus

- Implementare la paginazione.
- Gestire gli errori, restituendo uno stato HTTP 404 e un messaggio di errore, nel caso in cui una rotta non sia stata trovata.
- Gestire gli errori, restituendo uno stato HTTP 500 e un messaggio di errore, nel caso in cui venga sollevata un'eccezione dal Prisma Client.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
 git clone ('link of the repository')

# Go into the repository
 cd ('file name')

# Install dependencies
 npm install

# Run the app
 npm run dev
```

## Used technologies

This software uses the following technologies:

- [Node.js](https://)
- [Express](https://)

> GitHub [@JohnQuimson](https://github.com/JohnQuimson) &nbsp;&middot;&nbsp;
> Twitter [@John Henric Quimson](https://www.linkedin.com/in/john-henric-quimson-973827280/)
