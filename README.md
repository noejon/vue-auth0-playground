# vue-auth0-playground

Following this tutorial

https://auth0.com/blog/vuejs2-authentication-tutorial/

With documentation from

https://johnpapa.net/vue-typescript/
https://github.com/johnpapa/vue-typescript/blob/master/client/components/HeroList.vue
https://alligator.io/vuejs/typescript-class-components/
https://auth0.github.io/auth0.js/index.html
https://auth0.com/docs/libraries/auth0js/v9
https://github.com/kjur/jsrsasign
https://auth0.com/docs/quickstart/spa/vuejs/01-login
https://www.npmjs.com/package/eventemitter3
https://www.storyblok.com/tp/how-to-auth0-vuejs-authentication
https://vuejs.org/v2/cookbook/adding-instance-properties.html
https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins

## Step 1: Creating the backend server

### Setup
- Create [server](/server) folder `mkdir server`
- `cd server`
- `npm init`
```
package name: (server) vue-auth0-playground
version: (1.0.0) 0.0.1
description: The backend to test auth0 authentication
entry point: (index.js) server.js
test command:
git repository: https://github.com/noejon/vue-auth0-playground
keywords: vue vuejs vuejs2 auth0 authentication
author: noejon
license: (ISC) MIT
```

A `package.json` file should now be present in the server folder.

Installing dependencies:
`npm i -s body-parser cors express express-jwt jwks-rsa`

Babel:

Run `npm i --save-dev babel-cli babel-preset-env`

Create a `.babelrc` file: `touch .babelrc`

For a start file `.babelrc` with:

```json
{
    "presets": ["env"]
}
```

server.js:

`server.js` does the following import `import { AUTH0_DOMAIN, API_AUDIENCE_ATTRIBUTE } from './config.js'`

This file has been added to (.gitignore)[/.gitignore] as it contains my personal auth0 information.

Please create a `config.js` file and add the following information:

```javascript
export const AUTH0_DOMAIN = '{YOUR_AUTH0_DOMAIN}';
export const API_AUDIENCE_ATTRIBUTE = '{YOUR_API_AUDIENCE_ATTRIBUTE}';
```

### Running

Make sure that nodemon is globally installed

`npm i -g nodemon`

Open `/server/package.json` and modify the `scripts` as follow:

```
"scripts": {
    "build": "babel server.js -d dist"
    "start": "npm run build && node dist/server.js",
    "start.dev": "npm run build && nodemon dist/server.js"
}
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Adding auth0

Pre-requisite
`jwt-decode` and `auth-0-js`

```
npm i -s auth0-js jwt-decode
```

Types for typescript

```
npm i -s @types/auth0-js @types/jwt-decode
```

#Typescript: Adding a plugin

- define class
- create a file plugin.d.ts
- add all the relevant methods

https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins


No Audience => Bearer token fail
https://auth0.com/docs/scopes/current/api-scopes
Scope needs to be OpenId

https://bootstrap-vue.js.org/docs

https://router.vuejs.org/guide/advanced/navigation-guards.html#global-guards