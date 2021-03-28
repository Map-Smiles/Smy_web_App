# Dicovery - Smyle

This is a solution to the [Smile Site](). Queremos ajudar as pessoas a conquistar sonhos grandes!

## Table of contents

- [Overview](#overview)
  - [O desafio](#O-desafio)
  - [App](#App)
  - [Envolvidos](#Envolvidos)
- [Como chegamos aqui?](#my-process)
  - [Techs](#techs)
  - [O que aprendemos](#O-que-aprendemos)
  - [CI/CD](#CI/CD---Futuro)
- [Autores](#author)
- [Acknowledgments](#acknowledgments)
- [Convensões](#convensões)


## Overview

### O desafio

Users should be able to:

- 

### App

![](./screenshot.jpg)

Screen
Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Envolvidos

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process



### Built with

- [React](https://reactjs.org/) - JS library
- [CRA](https://create-react-app.dev/) - React framework - PWA
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [Leafleat](https://leafletjs.com/) - For Maps


### What I learned

Nossos Maiores Aprendizados

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### CI/CD - Futuro



### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Autores

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)



## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.


## Convenções

<details>
<sumary>Conventional Commits </sumary>
<p>
The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:
```sh
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

- fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
- feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).

- BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). 
A BREAKING CHANGE can be part of commits of any type.

types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the the Angular convention) recommends  

> build:
> chore: 
> ci: 
> docs: 
> style: 
> refactor: 
> perf: 
> test: and others.

footers other than BREAKING CHANGE: 
<description> may be provided and follow a convention similar to git trailer format.

Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in Semantic Versioning (unless they include a BREAKING CHANGE). A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., feat(parser): add ability to parse arrays.
</p>
</details>