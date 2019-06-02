#!/bin/bash

cp -R bitcore-node-komodo ../$1-explorer/node_modules/
echo "bitcore-node-komodo patched"
cp -R insight-api-komodo ../$1-explorer/node_modules/
echo "insight-api-komodo patched"
cp -R insight-ui-komodo ../$1-explorer/node_modules/
echo "insight-ui-komodo patched"