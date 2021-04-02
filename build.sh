#!/bin/bash

rm -rf dist
mkdir -p dist/styles
mkdir -p dist/scripts
cp src/index.html dist
cp src/styles/* dist/styles
javascript-obfuscator ./src/scripts --output dist/scripts
