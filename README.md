# Samosa Search App
To use, simply visit ldd.github.io/samosa-search

This simple webapp uses react and a firebase backend to show the closest samosa sales on campus

Comments, questions, suggestions?  
[![Join the chat at https://gitter.im/ldd/samosa-search](https://badges.gitter.im/ldd/samosa-search.svg)](https://gitter.im/ldd/samosa-search?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


# Contributing
First, perform the appropriate third-party setup by following these instructions:
*  Create an account on [Firebase](https://www.firebase.com)
* follow their [guide to use facebook login](https://www.firebase.com/docs/web/guide/login/facebook.html) (make sure to create a facebook app)
* Join [MapZen](https://mapzen.com/developers) and get a  time distance matrix key
* Add your Firebase url and MapZen key to `app/constants/providers.js`

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
webpack-dev-server
```

# License
MIT
