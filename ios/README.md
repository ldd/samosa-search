# Samosa Search App : iOS version

This app uses `react-native` and a firebase backend to show the closest samosa sales on campus

Comments, questions, suggestions?  
[![Join the chat at https://gitter.im/ldd/samosa-search](https://badges.gitter.im/ldd/samosa-search.svg)](https://gitter.im/ldd/samosa-search?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


# Running in XCode
[npm](https://www.npmjs.com/), [node](https://nodejs.org/) and [pod](https://cocoapods.org) are required

First, perform the appropriate third-party setup by following these instructions:
*  Create an account on [Firebase](https://www.firebase.com)
* follow their [guide to use facebook login](https://www.firebase.com/docs/web/guide/login/facebook.html) (make sure to create a facebook app)
* Join [MapZen](https://mapzen.com/developers) and get a  time distance matrix key
* Add your Firebase url and MapZen key to `app/constants/providers.js`

Now, clone this repository and checkout the ios branch
```
git clone git@github.com:ldd/samosa-search.git 
git fetch
git checkout ios
```

Make sure that you can run the installation script and run it
```
chmox u+x ./scripts/install-ios.sh
./scripts/install-ios.sh
```
At this point, you may want to make sure that have the necessary fonts installed by following the manual part of [this guide](https://github.com/oblador/react-native-vector-icons)

Finally, run 
`node node_modules/react-native/local-cli/cli.js start`, open the file `ios/SamosaSearch.xcworkspace` in XCode and start the simulator.


# Features

You can see a map with the sales locations
![see map](https://giant.gfycat.com/DismalMenacingKillerwhale.gif)


You can see a list of sales, sort them and/or filter them
![see list](https://zippy.gfycat.com/MenacingSelfassuredAsianwaterbuffalo.gif)
![sort by](https://zippy.gfycat.com/AccomplishedBabyishCattle.gif)
![filter by](https://zippy.gfycat.com/FocusedVerifiableGangesdolphin.gif)


You can add sales
![add sale](https://fat.gfycat.com/GleefulFaintFoxterrier.gif)


The sale list and map auto update when someone else adds a new sale
![auto update](https://zippy.gfycat.com/WeeklyAshamedGonolek.gif)


Finally, you need to authenticate using facebook
![authenticate](https://fat.gfycat.com/OrangeMiniatureAntelopegroundsquirrel.gif)


# License
MIT
