<h1 align="center">KrunkerCSS Engine</h1>

<h3 align="center">An engine for developing custom CSS for Krunker.</h3>
<br>

<div align="center">
    <img src="https://img.shields.io/github/v/release/KrunkerCSS/Engine?style=for-the-badge&color=d442f5">
    <img src="https://img.shields.io/github/contributors/KrunkerCSS/Engine?style=for-the-badge&color=d442f5">
    <img src="https://img.shields.io/github/languages/code-size/KrunkerCSS/Engine?style=for-the-badge&color=d442f5">
</div>

### Installing Dependencies
This project uses [Yarn](https://yarnpkg.com). It is advised not to mix package managers as this can result in inconsistent lockfiles across contributors.

To install dependencies for this project, open a command line interface at the directory of your project, and run:
```sh
yarn
```

This will create a `node_modules` directory in that of your project and add the packages there.

### Compiling the Project
This project utilizes [Webpack](https://webpack.js.org) to compile Sass to normal, browser-renderable CSS.

To build for production, run
```sh
yarn build
``` 

To setup a development server, run
```
yarn dev
```

This will setup a connection at `http://localhost:8080` for you to access.

### Contributing
If you would like to contribute to this project, you may fork the repository and open a pull request.

### Licensing
This project is licensed under the terms of the GNU AGPLv3.
