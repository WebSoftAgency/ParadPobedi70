var _templates = {
    dash: require('./templates/dash.tpl.html')
};

angular.module('dash', ['ionic'])
    .run(['$templateCache', function($templateCache) {
        $templateCache.put('/modules/dash/templates/dash.tpl', templates.dash)
    }])
