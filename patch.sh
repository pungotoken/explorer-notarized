#!/bin/bash

cp status.html ../$1-explorer/node_modules/insight-ui-komodo/public/views/status.html
cp header.html ../$1-explorer/node_modules/insight-ui-komodo/public/views/includes/header.html
cp status.js ../$1-explorer/node_modules/insight-api-komodo/lib/status.js
cp bitcoind.js ../$1-explorer/node_modules/bitcore-node-komodo/lib/services/bitcoind.js

