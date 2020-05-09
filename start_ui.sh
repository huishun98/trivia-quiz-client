#!/bin/bash

if which node > /dev/null
then
    # npm install -g @vue/cli
    npm install
    npm run build
    npm run serve
else
    tput setaf 1
    echo 'Please download Node.js from https://nodejs.org/en/'
fi

$SHELL