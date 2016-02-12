#This script assumes that you have node and npm installed
type node || (echo "ERROR! node is not installed!"; exit 0;)
type npm || (echo "ERROR! npm is not installed!"; exit 0;)

function try_install {
    ls node_modules | grep ^$1$ || npm i $1
}
#install development dependencies
try_install babel-core
try_install babel-loader
try_install babel-preset-es2015
try_install babel-preset-react
try_install eslint
try_install eslint-loader
try_install eslint-plugin-react

try_install re-base
try_install react-native
try_install react-native-fbsdkcore
try_install react-native-fbsdklogin
try_install react-native-vector-icons

#fix fbjs by deduping it from react and react-native modules
npm i fbjs@^0.6.1
find . -name 'fbjs' -print | grep "\./node_modules/fbjs" -v | xargs rm -rf

#check that pod is installed
type pod || (echo "ERROR! pod is not installed!"; exit 0;)

#install pods
cd ios && pod install
