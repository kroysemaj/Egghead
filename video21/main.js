/**
*  Module
*
* Description
*/
var app = angular.module('phoneApp', [])

app.controller('AppCtrl', function ($scope) {

});

app.directive('well', function () {
	return {
    restrict: "E",
    transclude: true,
		template: '<div class="well" ng-transclude>This is a well</div>'
		}
	}
);