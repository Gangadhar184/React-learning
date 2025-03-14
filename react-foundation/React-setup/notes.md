# Setting Up a React Project from Scratch

## Steps to Set Up React

### Step 1: Initialize the Project

```sh
npm init -y
```

This creates a `package.json` file that manages dependencies and project configuration.

### Step 2: Install React and ReactDOM

```sh
npm install react@18 react-dom@18
```

This installs React and ReactDOM, which are essential for building React applications.

### Understanding `package.json` and `package-lock.json`

- `package.json`: Stores project dependencies and metadata.
- `package-lock.json`: Records exact versions of installed dependencies to ensure consistency.

### Step 3: Create Folder Structure

- `public/` folder contains `index.html`.
- `src/` folder contains JavaScript files, components, and other code.

If you run `index.html` now, it won't execute properly because we don't have a bundled JavaScript file.

## Bundling with Webpack

React + ReactDOM + our code should be bundled into a single file (`bundle.js`). For this, we use **Webpack**.

### Step 4: Install Webpack

```sh
npx webpack
```

This will prompt for installation. To install Webpack and Webpack CLI as development dependencies, run:

```sh
npm install -D webpack webpack-cli
```

### Step 5: Configure Webpack

Create a `webpack.config.js` file in the root directory:

```js
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    devtool: 'source-map',
    mode: "development",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public")
        },
        port: 3500,
    }
};
```

### Step 6: Link the Bundle in `index.html`

Modify `public/index.html` to include:

```html
<script src="./bundle.js"></script>
```

## Notes

- Your setup is mostly correct.
- `npx webpack` alone won't install Webpack. Instead, you need `npm install -D webpack webpack-cli`.
- The `devServer` configuration is useful for local development, but to use it, you also need to install:

  ``` sh
  npm install -D webpack-dev-server

  ```server
- To run the development server, use:

  ```sh
  npx webpack serve
  ```

Now your React project is set up with Webpack bundling.
understood how to setup the React project from scratch

first step i did was npm init -y
second step is npm install react@18 react-dom@18

Understood the purpose of package.json and package-lock.json

thrid step is creating public and src folder
    public folder has index.html
    src contains our code,js files components etc

Now if we run the index.html it will not execute all because we dont have bundle

//React + ReactDOM + ourcode => bundle.js
//we use webpack bunlder,
//npx => node package executer

Here i used webpack

npx webpack -> then it will install npm i -D webpack bundle

Now we have to config the webpack acc to our usage

created webpack.config.js in parent folder

```//we do bundling process here in this file
//configuration details for bundling

const path = require("path");
module.exports = {
    entry : "./src/index.js",
    output : {
        filename : "bundle.js",
        path : path.resolve(__dirname, "public")
    },
    devtool: 'source-map',
    mode : "development",
    devServer : {
        static:{
            directory : path.resolve(__dirname, "public")
        },
        port : 3500,
    }
}
In index.html we have import the script files with bundle.js
<script src="./bundle.js"></script>

configuring dev server 

By default we dont get css loaders and style loaders, We have to config in webpack.config.js

```

 modules :{
        test: /\.css$/,
        use:["style-loader", "css-loader"]
    }

then npm i -D style-loader css-loader
