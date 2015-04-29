angular.module('patriot.service', ['ngResource'])

	.factory('tech', ['$resource', '$q', function( $resource, $q){

        var techList = $resource(
        	'storage/techList.json',
        	{'get':  { isArray:true }});

        return {

        	getList : function( groupId){
        		var deferred = $q.defer();
        		
        		techList.query().$promise.then(
        			function( data) {

        				if( groupId != null && groupId != undefined) {

        					var filterData = [];

							angular.forEach(data, function(item) {
							  	if( item.groupId == groupId){
							  		this.push(item);
							  	}
							}, filterData);

							deferred.resolve(filterData);
        				} else {
        					deferred.reject(error);
        				}

        			}, function( error) {

        				deferred.reject(error);
        			})

        		return deferred.promise;
        	},

        	getOne : function( id){
        		var deferred = $q.defer();

        		techList.query().$promise.then(
        			function( data) {

        				if( id != null && id != undefined) {

        					var tech = [];

							angular.forEach(data, function( item) {
							  	if( item.id == id){
							  		this.push( item);
							  	}
							}, tech);

							data = tech;

        				} 

        				deferred.resolve(data);

        			}, function( error) {

        				deferred.reject(error);
        			})

        		return deferred.promise;
        	}
        }

	}])

		.factory('groups', function(){
			
			var groupList = [
				{ "id" : 0, 	"name" : "Наземная техника"		},
				{ "id" : 1, 	"name" : "Воздушная техника" 	},
			];
			
			return {
				getList : function(){
					return groupList;
				}
			}
			
		}).
		
		factory('models', function(){
			
			var modelsList = [
					[
						{ "id" : 0, "name" : "Вертолёт0", "src" : "http://placehold.it/50x50" },
						{ "id" : 1, "name" : "Вертолёт1", "src" : "http://placehold.it/50x50" },
						{ "id" : 2, "name" : "Вертолёт2", "src" : "http://placehold.it/50x50" },
						{ "id" : 3, "name" : "Вертолёт3", "src" : "http://placehold.it/50x50" },
						{ "id" : 4, "name" : "Вертолёт4", "src" : "http://placehold.it/50x50" },
					]				
				];
				
			return {
				getList : function( groupId){
					return modelsList[groupId];
				}			
			}
			
		}).
		
		factory('model', function(){
			var activeSlide = 0
			var modelList = [
					[
						{ "id" : 0, "name" : "Модель вертолёт №1", "src" : [
							"../img/1.png",
							"../img/2.png",
							"../img/3.png",
							"http://avia.pro/sites/default/files/t-1399kt-112.jpg",
							"http://avia.pro/sites/default/files/t-1399kt-112.jpg"
						],
							"tth" : {
								"description" : "<h3>sdfsdfsdfdsfdsfsdfrefdvfdgdfgfdvdffdgfdg</h3>"
							}
							
						},
						{ "id" : 1, "name" : "Модель вертолёт №2", "src" : [
							"http://img13.nnm.me/6/0/2/e/8/602e8bde653ace428fc8e51728ec1124_full.jpg",
							"http://img13.nnm.me/6/0/2/e/8/602e8bde653ace428fc8e51728ec1124_full.jpg",
							"http://img13.nnm.me/6/0/2/e/8/602e8bde653ace428fc8e51728ec1124_full.jpg",
							"http://img13.nnm.me/6/0/2/e/8/602e8bde653ace428fc8e51728ec1124_full.jpg",
							"http://img13.nnm.me/6/0/2/e/8/602e8bde653ace428fc8e51728ec1124_full.jpg"
						
						],
							"tth" : {
								"description" : "<h3>sdfsdfsdfdsfdsfsdfrefdvfdgdfgfdvdffdgfdg</h3>"
							}
						},

					]				
				];
			
			return {
				get : function( groupId, modelId){
					return modelList[groupId][modelId];
				},
				activeSlide : activeSlide,
			}
						
		});
		