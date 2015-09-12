#!/bin/bash -x

git init
git add .
git commit -m "initial commit"

ionic platform add ios
ionic platform add browser

npm install
gulp install

npm install gulp-htmlmin --save
npm install gulp-typescript --save
npm install gulp-sourcemaps --save
npm install gulp-uglify --save

npm install -g tsd
tsd install cordova/* --save
tsd install cordova-ionic/* --save
tsd install angular --save
tsd install ionic --save

git clone https://github.com/kinumi/ionic-typescript-bootstrap .tmp
cp -a .tmp/template/. .
rm -rf .tmp

git add .
git commit -m "ionic-typescript-bootstrap"
