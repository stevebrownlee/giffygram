#!/bin/bash

rm -rf dist
mkdir -p dist/styles
mkdir -p dist/scripts
mkdir -p dist/images
cp src/index.html dist
cp src/styles/* dist/styles
cp src/images/* dist/images
javascript-obfuscator ./src/scripts --output dist/scripts
