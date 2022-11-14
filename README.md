# TextEd

This app serves to to build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. It features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

# Description

- AS A developer
- I WANT to create notes or code snippets with or without an internet connection
- SO THAT I can reliably retrieve them for later use
- GIVEN a text editor web application
- WHEN I open my application in my editor
- THEN I should see a client server folder structure
- WHEN I run `npm run start` from the root directory
- THEN I find that my application should start up the backend and serve the client
- WHEN I run the text editor application from my terminal
- THEN I find that my JavaScript files have been bundled using webpack
- WHEN I run my webpack plugins
- THEN I find that I have a generated HTML file, service worker, and a manifest file
- WHEN I use next-gen JavaScript in my application
- THEN I find that the text editor still functions in the browser without errors
- WHEN I open the text editor
- THEN I find that IndexedDB has immediately created a database storage
- WHEN I enter content and subsequently click off of the DOM window
- THEN I find that the content in the text editor has been saved with IndexedDB
- WHEN I reopen the text editor after closing it
- THEN I find that the content in the text editor has been retrieved from our IndexedDB
- WHEN I click on the Install button
- THEN I download my web application as an icon on my desktop
- WHEN I load my web application
- THEN I should have a registered service worker using workbox
- WHEN I register a service worker
- THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
- WHEN I deploy to Heroku
- THEN I should have proper build scripts for a webpack application

## Table of Contents

- [Technologies used](#technologies-used)
- [How to install](#how-to-install)
- [Usage](#usage)
- [License](#license)
- [Screenshot](#screenshot)
- [Bugs](#bugs)
- [Version History](#Version-history)
- [Links to repo and heroku](#links-to-repo-and-heroku)
- [Contributing](#contributing)
- [Contact](#contact)

## Technologies used

![Technologies-used](https://img.shields.io/badge/-Git-F05032?logo=Git&logoColor=white)
![Technologies-used](https://img.shields.io/badge/-JavaScript-007396?logo=JavaScript&logoColor=white)
![Technologies-used](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies-used](https://img.shields.io/badge/-Express-000000?logo=Express&logoColor=white)
![Technologies-used](https://img.shields.io/badge/-Babel-CB3837?logo=Babel&logoColor=white)
![Technologies-used](https://img.shields.io/badge/-HTML5-E34F26?logo=HTML5&logoColor=white)
![Technologies-used](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)
![Technologies-used](https://img.shields.io/badge/-Webpack-8DD6F9?logo=Webpack&logoColor=white)

## How to install

In the terminal, start by typing "npm i". This will install all the dependencies and dev dependencies required.

## Usage

To begin this app, type 'npm run build' then 'npm run start:dev' this builds the dist folder, bundling your assets for efficiency and starts the server in local host 3000.

## License

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=GitHub&logoColor=white)

## Screenshot

![Screenshot](https://github.com/Laura-Kam/TextEd/issues/1#issue-1448834478)

## Bugs

- Post for users did not work. Issue resolved - put route used instead.
- App would not deploy to heroku due to not being able to read dev dependencies.

## Version history

- 0.1 Dependencies and dev dependencies installed.
- 0.2 Established database and opened one with IndexedDB.
- 0.3 Created put DB and get DB routes.
- 0.4 Configured manifest json and service worker files.
- 0.5 Deployed to Heroku.

## Links to repo and heroku

[Github Repository](https://github.com/Laura-Kam/TextEd/)
[Heroku Live URL](https://cryptic-dawn-19004.herokuapp.com/)

## Contributing

- Teaching Assistant - Jordi Lanau
- Webpack 5 Crash Course | Frontend Development Setup- Traversy Media https://www.youtube.com/watch?v=IZGNcSuwBZs&t=455s

To contribute to the repo yourself please:

Git clone the repository, work on the code, then make a pull request.

## Contact

If you have any questions, or would like to get in touch find me on GitHub [Laura-Kam](https://github.com/Laura-Kam)
or email me at laura_ek@yahoo.co.uk.
