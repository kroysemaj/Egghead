/**
*  Module
*
* Description
*/
var app = angular.module('phoneApp', []);


app.controller('AppCtrl', function ($scope) {
	$scope.callHome = function (message) {
		console.log(message);
	}	
})

app.directive('phone', function () {
	return {
		scope: {
			dial:'&'
		},
	 	template:'<input type="text" ng-model="value"> <br/>' + 
	 	'<div class="btn btn-primary" ng-click="dial({message:value})">Call Home!</div>'
	}
});