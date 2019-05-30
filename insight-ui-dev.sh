#!/bin/bash

/home/$USER/.nvm/versions/node/v4.9.1/bin/npm install
./node_modules/.bin/bower install

# run `./node_modules/.bin/grunt compile` to compile the js to minified & uglified and reflect your changes to the src in the live website. The output is at: `./public/js/` 