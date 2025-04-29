# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot
Desktop Desgin
![Desktop Desgin](./design/desktop-design.jpg)


Desktop Active State
![Desktop Active State](./design/desktop-active-states.jpg)

Mobile Design
![Mobile Design](./design/mobile-design.jpg)

Mobile Navigation
![Mobile Navigation](./design/mobile-navigation.jpg)


### Links

- Solution URL: [Solution site](https://www.frontendmentor.io/solutions/responsive-landing-page-for-api-with-flexbox-EBeZP1NYM6)
- Live Site URL: [Live site](https://shortly-fmc.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Axios](https://reactjs.org/) - APIs library


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
try {
  // Call the CleanURI API to shorten the URL
  const cors_api_url = 'https://cors-anywhere.herokuapp.com/'; // cors handler api
  const response = await axios.post(`${cors_api_url}https://cleanuri.com/api/v1/shorten`, {
    url: inputValue, // Required payload
  });
  const shortenLink = await response.data;

  const newLink = {
    original: inputValue,
    short: shortenLink.result_url, // Shortened URL from the API response
    // error: shortenLink.error, // Shortened URL from the API response for error
  }
  
  // Update the state with the new link
  setInputArr([newLink, ...inputArr]);
  setInputValue(""); // Clear the input field
} catch (error) {
  alert("Error Shortening the Link, must be something like this: http://google.com/")
  console.error("Error Shortening the Link:", error)
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

I want to be able in handling CORS technique for APIs handling.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [maduanusi](https://maduanusi.vercel.app/)
- Frontend Mentor - [@therealmaduanusi](https://www.frontendmentor.io/profile/therealmaduanusi)
- Twitter - [@madu_anusi](https://www.twitter.com/madu_anus)


## Acknowledgments

FMC and me for taking on this challenge