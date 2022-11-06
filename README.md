# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)

### Screenshot

![Desktop screenshot](./design/desktop%20screenshot.jpeg)
![Mobile screenshot](./design/mobile%20screenshot.jpeg)
![Menu overlay screenshot](./design/menu%20screenshot.jpg)

### Links

- Solution URL: [Frontend Mentor page](https://www.frontendmentor.io/solutions/responsive-news-homepage-using-grid-dMLdqftEoe)
- Live Site URL: [On Github](https://theniceguywastaken.github.io/news-homepage-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This was my biggest challenge yet, I learned so much new things especially in CSS, like how to use custom variables properly, how to use utility classes (basically building a private small library), and how to build a full responsive layout using the modern ways of Grid (for 2 dimentional layouts) and Flexbox (for single dimentional layouts).<br>
Also, this was the first project I've used JavaScript in, not much, but it's a start!

```css
/* Some CSS that I'm proud of! */
.overlay {
  transform: translateX(200%);
  transition: transform 0.5s cubic-bezier(0.39, 0.23, 0.16, 0.42);
  flex-direction: column;
  gap: 4rem;
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  padding: 1.5rem;
  background-color: var(--off-white);
  box-shadow: -200px 0 100px 0 rgba(0, 0, 0, 0.215);
}
```

### Continued development

I want to continue building more complexe projects to have more understanding of Flexbox and Grid. And try to implement more and more JavaScript into the mix, to eventually start learning React إن شاء الله!

### Useful resources

- [Elzero Web School](http://elzero.org/) - I have leanred so much from this guy that I can't specify only one thing, if you're arab and you want to learn front-end, this is the guy for you!
- [Kevin Powell](https://www.youtube.com/kepowob) - This is an amazing YouTube channel to learn CSS, and he helped me understand Flex and Grid much better and also easier.

## Author

- LinkedIn - [Oubaid](https://www.linkedin.com/in/oubaidelmoudhik/)
- Frontend Mentor - [@theniceguywastaken](https://www.frontendmentor.io/profile/theniceguywastaken)
- Twitter - [@oubaidem](https://www.twitter.com/oubaidem)

## Acknowledgments

الحمد لله الذي بنعمته تتم الصالحات، والصلاة والسلام على سيدنا محمد.
