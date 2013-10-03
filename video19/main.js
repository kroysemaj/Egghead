/**
*  Module
*
* Description
*/
var app = angular.module('phoneApp', []);


app.controller('AppCtrl', function ($scope) {
	$scope.callHome = function () {
		console.log('called Home.');
	}	
})

app.directive('phone', function () {
	return {
		scope: {
			dial:'&'
		},
	 	template:'<div class="btn btn-primary" ng-click="dial()">Call Home!</div>'
	}
});


