# angular1-tv-tracker

Angular 1.x + TypeScript + Webpack seed project.

The webpack configuration in this project was largely inspired by: [preboot/angular-webpack](http://https://github.com/preboot/angular-webpack)

All show data has been provided by the [TVmaze.com](http://www.tvmaze.com/api) API.

By default, the application will use one of my personal Firebase instances. Details on setting up a personal instance to follow.

The running application can be viewed at <https://tv-tracker-73580.firebaseapp.com>. Be sure to create a fake account to see the "mark as favorite" functionality.

### Quick Start

```sh
# clone the repo
git clone https://github.com/giannico/angular1-tv-tracker app

# change directory to your app
cd app

# install the dependencies with npm
npm install

# start the dev server
npm start
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Build

```sh
npm install

npm run build

# see the built application
ls dist
```

View the built content in the dist folder.

### Features

* Angular 1.5.x application with webpack
* TypeScript Support
* Popular vendor libraries
  * UI-Router 1.0
  * Bootstrap 3
* Firebase Persistence
  * Firebase 3.3.0
  * AngularFire 2.0.2
* Best practice application patterns
  * Componentized design
  * Feature-based directory structure
* Application features
  * Route authentication
  * Log In, Sign Up, Password Reset
  * Global resolves
* Dev Mode
  * LiveReload
  * Sourcemaps
   Route authentication
* Build
  * ng-annotate support for minified builds
  * Optimized build package (with separate vendor/app assets)
  * No dependency on grunt or gulp