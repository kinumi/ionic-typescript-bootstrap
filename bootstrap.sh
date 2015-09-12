#!/bin/bash

ionic platform add ios
ionic platform add browser

npm install
gulp install

npm install gulp-htmlmin
npm install gulp-typescript
npm install gulp-sourcemaps
npm install gulp-uglify

npm install -g tsd
tsd install cordova/* --save
tsd install cordova-ionic/* --save
tsd install angular --save
tsd install ionic --save

git clone https://github.com/kinumi/ionic-typescript-bootstrap .tmp
cp -a .tmp/template/* .

gulp
