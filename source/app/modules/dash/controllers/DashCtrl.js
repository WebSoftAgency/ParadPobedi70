require('../module.js')
    .controller('DashCtrl', ['$scope', '$state', '$ionicModal', 'DashSrv', function($scope, $state, $ionicModal, DashSrv) {

        $ionicModal.fromTemplateUrl('/templates/about.tpl', {
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
    }])
