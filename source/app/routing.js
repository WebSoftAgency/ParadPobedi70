module.exports = ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/dash');

    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: '/templates/app.tpl'
        })
        .state('app.dash', {
            url: '/dash',
            templateUrl: '/modules/dash/templates/dash.tpl',
            controller: 'DashCtrl'
        })
        .state('app.tech', {
            url: '/tech',
            views: {
                '@app': {
                    templateUrl: '/modules/tech/templates/tech.tpl',
                    controller: "TechCtrl"
                }
            }
        })
        .state('app.tech.catalog', {
            url: '/catalog',
            views: {
                '@app': {
                    templateUrl: '/modules/tech/templates/techCatalog.tpl',
                    controller: 'TechCatalogCtrl'
                }
            }
        })
        .state('app.tech.model', {
            url: '/catalog',
            views: {
                '@app': {
                    templateUrl: '/modules/tech/templates/techModel.tpl',
                    controller: 'TechModelCtrl'
                }
            }
        })
        .state('app.tech.model.gallery', {
            url: '/catalog',
            templateUrl: '/modules/tech/templates/techModelGallery.tpl',
            controller: 'TechModelCtrl'
        })
        .state('app.tech.model.description', {
            url: '/description',
            templateUrl: '/modules/tech/templates/techModelDescription.tpl',
            controller: 'TechModelCtrl'
        })
        .state('app.tech.model.tth', {
            url: '/tth',
            templateUrl: '/modules/tech/templates/techModelTth.tpl',
            controller: 'TechModelCtrl'
        })
}]
