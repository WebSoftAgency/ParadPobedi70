require ('./modules/dash/index.js');
var routing = require('./routing.js');

angular.module('app', ['ionic'. 'dash'])
    .config(routing)
    .config(function(localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('App')
            .setStorageType('localStorage')
            .setNotify(true, true)
    })
    .run(['$ionicPlatform', function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            if (window.StatusBar)
                StatusBar.styleDefault();
        });
    }])
