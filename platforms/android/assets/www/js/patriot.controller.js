angular.module('patriot.controllers', ['patriot.service']).

		controller('MainMenuCtrl', function($scope, $ionicModal, $timeout) {
			$scope.loginData = {};

			$ionicModal.fromTemplateUrl('templates/login.html', {
				scope: $scope
			}).then(function(modal) {
				$scope.modal = modal;
			});

			$scope.closeLogin = function() {
				$scope.modal.hide();
			};

			$scope.login = function() {
				$scope.modal.show();
			};

			$scope.doLogin = function() {
				console.log('Doing login', $scope.loginData);

				$timeout(function() {
					$scope.closeLogin();
				}, 1000);
			};

		}).

		controller('GroupsCtrl', function($scope, groups) {
			$scope.groupList = groups.getList();		
		}).
		
		controller('GroupCtrl', function($scope, $stateParams, $location, tech) {

			$scope.path = $location.path();

			$scope.groupId = $stateParams.groupId;

			tech.getList($stateParams.groupId).then(function( data){
				$scope.modelList = data;
			});
		}).
		
		controller('ModelCtrl', function($scope, $stateParams, $state, $location, tech) {
			$scope.groupId = $stateParams.groupId;
			$scope.path = $location.path();


			$scope.startSlide = function( index){				
				$state.go('model.gallerySlide', {groupId: $stateParams.groupId, modelId : $stateParams.modelId});
			}
			
			tech.getOne($stateParams.modelId).then(function( data){
				$scope.model = data[0];
			})		
		}).
		
		controller('SlideCtrl', function($scope, $stateParams, $state, tech) {
			
			tech.getOne($stateParams.modelId).then(function( data){
				$scope.model = data[0];
			
			})
			
			
		}).
		
		controller('MainCtrl', function($scope, $ionicModal) {
			$scope.contact = {
				name: 'Mittens Cat',
				info: 'Tap anywhere on the card to open the modal'
			}

			$ionicModal.fromTemplateUrl('templates/about.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
				$scope.modal = modal
			})

			$scope.openModal = function() {
				$scope.modal.show()
			}

			$scope.closeModal = function() {
				$scope.modal.hide();
			};

			$scope.$on('$destroy', function() {
				$scope.modal.remove();
			});
		})
		