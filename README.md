# Project

## Prepare environment

1. Install **node** & **npm**. For example: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

2. Install & check **Vue CLI**. Official documentation: https://cli.vuejs.org/ru/guide/installation.html

## Node.js local deploy

```
npm install
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker local deploy

### Build & run
```
docker-compose up -d
```

Check containers successfully running: ```docker ps```

### Stop & remove
```
docker-compose down --remove-orphans --rmi local
```

### Force rebuild
```
docker-compose down --no-cache
```

## Creation
_(for repository init only)_

Created w/ ```vue create app```. _app_ - name of a repository. Modules:
* _Babel_
* _Router_
* _Vuex_
* _CSS Pre-processors_
* _Linter / Formatter_
* _E2E Testing_

**Notes**

1. Vue Router w/ _history mode_: https://router.vuejs.org/ru/guide/essentials/history-mode.html

2. CSS Pre-processor _Sass/SCSS_ (with ```node-sass```)

3. ESLint with error prevention only & lint on save

4. E2E Testing: https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell

5. Install i18n: ```vue add i18n```

6. Apply patch to project based on vue-boilerplate
    1. vue-boilerplate: ```git format-patch --stdout -1 COMMIT_SHA > changes.patch```
    2. your project: ```git am -3 < changes.patch```
    3. optionally resolve conflicts and ```git am --continue```
