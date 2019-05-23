#!/bin/bash

cp status.html ../$1-explorer/node_modules/insight-ui-komodo/public/views/status.html
echo "status.html copied"
cp header.html ../$1-explorer/node_modules/insight-ui-komodo/public/views/includes/header.html
echo "header.html copied"
cp status.js ../$1-explorer/node_modules/insight-api-komodo/lib/status.js
echo "status.js copied"
cp bitcoind.js ../$1-explorer/node_modules/bitcore-node-komodo/lib/services/bitcoind.js
echo "bitcoind.js copied"
