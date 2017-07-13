# ng-posts-es6

Post example like github posts and comments system.

This project show you how to use AngularJS 1.4+ with webpack.

* communicate between components 
* how to add third party like angular-trix
* in angular1.6 everything is components. not ng-controller anymore!
* for routing you should see routing v2 for angularjs.
* Angular with ES6 AND babel!!!
* Project structure.
* Using HTML5 tags!
* AngularJS shared modules and core modules!!
* smart and dumb in AngularJS!
* bootstrap and more...

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

> Clone/Download the repo then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone our repo
$ git clone https://github.com/wizardnet972/ng-posts-es6.git

# change directory to your app
$ cd ng-posts-es6

# install the dependencies with npm
$ npm install

# or better use yarn
$ yarn install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm start`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)
