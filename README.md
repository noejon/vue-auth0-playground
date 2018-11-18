# vue-auth0-playground

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

### Running

Make sure that nodemon is globally installed

`npm i -g nodemon`

Open `/server/package.json` and modify the `scripts` as follow:

```
"scripts": {
    "start": "node server.js",
    "start.dev": "nodemon server.js"
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
