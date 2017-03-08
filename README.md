# JW Player Code Test

Technologies used: React with Redux, LESS, Grunt, Node, Express

### Installation
To begin, clone the repository on your machine:

```bash
git clone https://github.com/adamawang/jwplayer-codetest.git
```
then cd into the repository:

```bash
cd jwplayer-codetest/
```

install all packages and dependencies:

```bash
npm install
```

### Build
Next, run the grunt task in terminal to run webpack production build, compile LESS, and start the server:

```bash
grunt
```

The server should be found at:

```bash
localhost:5000
```

### Comments

After going through the README and planning how to tackle the challenge, I decided to use React as my front end, knowing well that modularized components would help greatly in displaying tiers of content with carousel like functionality.  I had created a React-Redux-Express boilerplate repo in the past, so I was able to get the front-end portion off the ground quickly and efficiently. It includes everything I need to run React, Redux, Webpack, a basic server, a CSS file, and a number of dependencies including Axios for my API call.

Some challenges I faced throughout the course of the project were refactoring my CSS into LESS (nested classes, variables, etc). I spent some time familiarizing myself with the LESS docs and used some of their examples to work through the refactor, and definitely think with more time I'd be able to further modularize the CSS portion of this code test.

I also ran into some issues with the dropdown menu I had in mind that showed after clicking the menu button on each tile. I initially attempted to manually override the classes through the document.querySelector(xxx), but the way that the Virtual DOM works in react, I would not be seeing immediately reflected changes as it wouldn't detect changes necessary to rerender the page. Once I figured that out, I used component state to keep track of the dropdown menu state, as well as classnames for the hidden div.

For the Jumbo carousel up top, I overlaid a slight gradient that darkened towards the bottom of the image to make the white text more legible in case of bright cover photos. And for the smaller carousel and tiles below, I used css to show an overlay on hover with the video description.

Thank you for the opportunity to work on this project, it was overall a great learning experience and am proud of what I was able to accomplish in under three days. Looking forward to your feedback, thanks again!
