require('./module.js')
    .controller('DashCtrl', ['$scope', '$state', 'DashSrv', function($scope, $state, DashSrv) {
    	console.log('DashCtrl');
    }])
