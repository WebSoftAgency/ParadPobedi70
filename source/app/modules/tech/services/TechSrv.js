require('../module.js')
    .service('TechSrv', ['$http', function($http) {

        var
            _currentGroup, currentModel;

        return {
            getTechList: function() {
                return $http.get('server/techList.json', {});
            },
            currentGroup: function(value) {
                if (value != undefined) {
                    currentGroup = value;
                } else {
                    return currentGroup;
                }
            },
            currentModel: function(value) {
                if (value != undefined) {
                    currentModel = value;
                } else {
                    return currentModel;
                }
            }
        }
    }])
