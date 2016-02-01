# Samosa Search App

[![Join the chat at https://gitter.im/ldd/samosa-search](https://badges.gitter.im/ldd/samosa-search.svg)](https://gitter.im/ldd/samosa-search?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

To use, simply visit ldd.github.io/samosa-search

This simple webapp uses react and a firebase backend to show the closest samosa sales on campus

# Contributing
Make sure that you have webpack and webpack-dev-server installed:
```
npm install -g webpack
npm install -g webpack-dev-server
```
Clone this repo
```
git clone git@github.com:ldd/samosa-search.git
```
install:
```
npm install
```
serve using webpack-dev-server:
```
webpack-dev-server --define "FIREBASE_URL"='"<YOUR_URL>"' \
--define "BING_KEY"='"<A_KEY>"'\
--define "MAPZEN_MATRIX_KEY"='"<A_KEY>"'
```
**tip:** Notice the weird ```""``` wrapped inside ```''``` . This is NOT a coincidence. 

This is good enough for development.

# important issue
For the time being, the ```muicss``` package does not have some very important functionality, so you will *not* be able to fully replicate this application until it is updated (I will update my fork, eventually)

# license
MIT
