# Project Overview

**JC-REACT-BOILERPLATE** is a template you can use when starting a React Application.
The template itself was structured based on the most commonly used libraries and architecture when developing React Application.
You can opt to use this template if you feel ReactJS [CRA](https://create-react-app.dev/) is too complicated for your project.

## Structure

This boilerplate uses the following technologies:

1.  [ReactJS](https://reactjs.org/)
2.  [ReactHooks](https://reactjs.org/docs/hooks-intro.html)
3.  [Redux](https://redux.js.org/)
4.  [Redux-Typescript](https://github.com/piotrwitek/react-redux-typescript-guide)
5.  [Typescript](https://www.typescriptlang.org/)
6.  [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
7.  **HTML/SCSS**
8.  [Webpack](https://webpack.js.org/)

## Additional Structure

The boilerplate predefined some usefull mixins, custom hooks, && function:

### MIXINS

1. `media-query()`: To easily define the media size of the viewport in CSS.
2. `align-center()`: To align the content in center.

### CUSTOM HOOKS

1. `useDeviceType()`: To define the viewport size in javascript.
2. `useVisibleInViewPort()`: To determine if the passed element ID is visible in viewport.

### FUNCTIONS

1. `classnames()`: To be able to define multiple classnames and/or adding conditional classname.

## How to set up the project?

You may wish to fork this repository or remove my remote origin and add your own. Go [here](https://help.github.com/articles/changing-a-remote-s-url/) for more information on how to change remotes. But I highly suggest you fork this repo for monitoring.

1.  To download the repository and install dependencies, run the following commands:

```bash
git clone https://github.com/JCGonzaga01/jc-react-boilerplate.git [YOUR_PREFERRED_REPO_NAME]

cd [YOUR_PREFERRED_REPO_NAME]

yarn install
```

2. Once installed, run the following command to build the application and serve it with hot module reloading:

```bash
yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view running project.
This completes the set up.

## Checklist

Files needed to modify:

1. Kindly look for all `NOTE` comments in the project and update all information necessary per file.

## Build and Deploy

1. To build the project, just run the below command.

```bash
yarn build
```

2. If you fork this repository or publish it in your own github account and wants to deploy it in github hosting, you can just run the below command to auto deploy and host your project.

```bash
yarn deploy
```

Running the above command will create new git branch named `gh-pages`.
To know more on how to host repo project in Github properly, kindly read this [article](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for more information.

## Reminder

- Please don't forget to send love and support by giving star to this project.
- If you encounter some issues or would like to add some enhancement, never hesitate to file an issue ticket and send PR.

## License

[MIT](https://github.com/JCGonzaga01/jc-react-boilerplate/blob/master/LICENSE)
