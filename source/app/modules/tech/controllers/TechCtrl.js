require('../module.js')
    .controller('TechCtrl', ['$scope', '$state', 'TechSrv', function($scope, $state, TechSrv) {

        $scope.techList = [];

        TechSrv.getTechList().then(function(res) {
            $scope.techList = res.data;
        });

        $scope.selectGroup = function(group) {
            TechSrv.currentGroup(group);
        };

    }])
    .controller('TechCatalogCtrl', ['$scope', '$state', 'TechSrv', function($scope, $state, TechSrv) {

        $scope.currentGroup = TechSrv.currentGroup();

        $scope.selectModel = function(model) {
            TechSrv.currentModel(model);
        };

    }])
    .controller('TechModelCtrl', ['$scope', '$state', '$ionicModal', 'TechSrv', function($scope, $state, $ionicModal, TechSrv) {

        $scope.currentModel = TechSrv.currentModel();

        console.log($scope.currentModel);

        $scope.gallerySlider = function() {

            $ionicModal.fromTemplateUrl('/modules/tech/templates/techModelGallerySlider.tpl', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal = modal;
                $scope.modal.show()
            });    
        };

        $scope.hideSlider = function(){
        	$scope.modal.hide();
        }

    }])
