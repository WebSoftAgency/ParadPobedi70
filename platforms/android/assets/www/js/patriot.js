angular.module('patriot', ['ionic', 'patriot.controllers'])

	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			if(window.cordova && window.cordova.plugins.Keyboard) 
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);	
			if(window.StatusBar) 
				StatusBar.styleDefault();
		});
	})
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/main');
		
		$stateProvider
		
			.state('patriot', {
				url: '',
				abstract:true,
				templateUrl: 'templates/patriot.html'
			})

			.state('patriot.default', {
				url: '/main',
				templateUrl: 'templates/default.html'
			})
			
			.state('patriot.login', {
				url: '/login',
				templateUrl: 'templates/login.html'
			})
			
			.state('patriot.about', {
				url: '/about',
				templateUrl: 'templates/about.html'
			})
			
			.state('patriot.groups', {
				url: '/groups',
				templateUrl: 'templates/groups.html',
				controller : 'GroupsCtrl',
			})
		
			.state('patriot.models', {
				url: '/groups/:groupId',
				templateUrl: 'templates/models.html',
				controller : 'GroupCtrl'
			})
			
			.state('model', {
				url: '/groups/:groupId/models/:modelId',
				templateUrl: 'templates/model.html',
				controller : 'ModelCtrl',
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
			
	});