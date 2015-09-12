/// <reference path='../typings/tsd.d.ts' />

var app = angular.module('app', ['ionic']);

app.run(function($ionicPlatform: ionic.platform.IonicPlatformService) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      window.StatusBar.styleDefault();
    }
  });
});
