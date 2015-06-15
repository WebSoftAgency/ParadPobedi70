var _templates = {
    dash: require("html!./templates/dash.tpl.html")
};

module.exports = angular.module('dash', ['ionic'])
    .run(['$templateCache', function($templateCache) {
        $templateCache.put('/modules/dash/templates/dash.tpl', _templates.dash)
    }])
