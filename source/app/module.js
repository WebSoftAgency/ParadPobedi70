require('./modules/dash/index.js');
require('./modules/tech/index.js');
var routing = require('./routing.js');
var template = require('html!./templates/app.tpl.html');
var about = require('html!./templates/about.tpl.html');

module.exports = angular.module('app', ['ionic', 'dash', 'tech'])
    .config(routing)
    .run(['$ionicPlatform', function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            if (window.StatusBar)
                StatusBar.styleDefault();
        });
    }])
    .run(['$templateCache', function($templateCache) {
        $templateCache.put('/templates/app.tpl', template);
        $templateCache.put('/templates/about.tpl', about)
    }])

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});
