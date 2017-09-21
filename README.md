# Logic gates simulator

A basic logic schematic web page by Angular 2 Typescript and webpack.
Feature:
* Drag and drop logic gate to diagram.
* Draggable elements and connection, by [jsPlumb](https://github.com/jsplumb/jsPlumb).
* Detect connection between input and output only.
* Working with Angular routing, directive, component.
* Stylesheets with [Bootstrap 4 beta](https://getbootstrap.com/docs/4.0/getting-started/introduction/) - [SASS](http://sass-lang.com/)

### Quick start

```bash
# clone repo
$ git clone https://github.com/hoakusa/logicgates.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```
go to [http://localhost:8080](http://localhost:8080) in your browser.


# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Developing](#developing)
    * [Testing](#testing)
    * [Production](#production)
* [Documentation](#documentation)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* `npm install` to install all dependencies or edit [`package.json`](/package.json)

## Developing

Start run development mode:

* `npm start`

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The application can be checked at `http://localhost:8080`.

## Testing

#### 1. Unit Tests

* single run: `npm test`

## Production

To build your application, run:

* `npm run build`

You can now go to `/dist` and deploy that to your server!

## Documentation

1. Routing:
'/' is the main home of application, go and modify routing by edit [`app-routing.module.ts`](/src/app/app-routing.module.ts).
2. Library:
This application uses [jsPlumb](https://github.com/jsplumb/jsPlumb) as core library to perform gate connection and behaviors inside diagram. Read more at [documentation](https://jsplumbtoolkit.com/community/doc/home.html).
3. Intruction video:
Watch intruction video at the end of webpage to understand how application works.

> Editor: [Visual Studio Code](https://code.visualstudio.com/) 