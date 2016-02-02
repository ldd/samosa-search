# Samosa Search App
To use, simply visit ldd.github.io/samosa-search

This simple webapp uses react and a firebase backend to show the closest samosa sales on campus

Comments, questions, suggestions?  
[![Join the chat at https://gitter.im/ldd/samosa-search](https://badges.gitter.im/ldd/samosa-search.svg)](https://gitter.im/ldd/samosa-search?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


# Contributing
Make sure that you have ```node``` and ```npm``` installed.
If you do not have ```webpack``` and ```webpack-dev-server``` installed globally, install them:
```
npm install -g webpack
npm install -g webpack-dev-server
```
Then, clone this repo
```
git clone git@github.com:ldd/samosa-search.git
```
Finally, install the required ```npm``` packages:
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

# License
MIT
