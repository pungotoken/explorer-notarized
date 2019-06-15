#!/bin/bash

/home/$USER/.nvm/versions/node/v4.9.1/bin/npm install
./node_modules/.bin/bower install

# run `./node_modules/.bin/grunt compile` to compile the js to minified & uglified and reflect your changes to the src in the live website. The output is at: `./public/js/ and /public/css/`

# run `./node_modules/.bin/grunt` to dev and have the changes reflect in the browser on refresh

# To change css properly, change the css in ./public/src/css/common.css then compile it. The resulting main.min.css will have the necessary changes

# To override specific css to reskin or change the theme of the explorer, add a file named common.min.css to the directory ./public/css/ and add all the over rides to it.

