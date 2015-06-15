module.exports = ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/dash');

    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/patriot.html'
        })
        .state('app.dash', {
            url: '/dash',
            templateUrl: 'templates/default.html'
        })
        .state('app.login', {
            url: '/login',
            templateUrl: 'templates/login.html'
        })
        .state('app.about', {
            url: '/about',
            templateUrl: 'templates/about.html'
        })
        .state('app.groups', {
            url: '/groups',
            templateUrl: 'templates/groups.html',
            controller: 'GroupsCtrl',
        })
        .state('app.models', {
            url: '/groups/:groupId',
            templateUrl: 'templates/models.html',
            controller: 'GroupCtrl'
        })
        .state('model', {
            url: '/groups/:groupId/models/:modelId',
            templateUrl: 'templates/model.html',
            controller: 'ModelCtrl',
        })
        .state('model.gallery', {
            url: '/gallery',
            views: {
                'conteiner': {
                    templateUrl: 'templates/model-gallery.html',
                }
            },
        })
        .state('model.tth', {
            url: '/tth',
            views: {
                'conteiner': {
                    templateUrl: 'templates/tth.html',
                }
            },
        })
        .state('model.description', {
            url: '/description',
            views: {
                'conteiner': {
                    templateUrl: 'templates/description.html',
                }
            },
        })
        .state('model.gallerySlide', {
            url: '/slide',
            views: {
                'conteiner': {
                    templateUrl: 'templates/slide.html',
                    controller: 'SlideCtrl'
                }
            },
        });
}]
