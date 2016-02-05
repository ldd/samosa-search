#!/bin/sh

#check which type of platform we wish to use
case "$1" in
 ios|android)
  npm i react-native
  ;;
 ios)
  ;;
 android)
  ;;
 web)
  npm i material-ui react react-dom react-google-maps react-router react-tap-event-plugin
  ;;
 *)
  echo $"Usage:$0 {ios|android|web} {only}"
  exit 1
esac

#check whether we want to install platform dependencies (only), or all dependencies by default 
case "$2" in
 only)
  ;;
 *) 
  echo npm i fbjs@^0.6.1 babel-core babel-loader babel-preset-es2015 babel-preset-react eslint eslint-loader eslint-plugin-react re-base
  ;;
esac

#finally, fix fbjs decoupling (npm 2.x issue)
find . -name 'fbjs' -print | grep "\./node_modules/fbjs" -v | xargs rm -rf

