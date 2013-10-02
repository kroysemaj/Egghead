/**
* ChoreApp Module
*
* Description
*/
var app = angular.module('ChoreApp', []);

app.controller('ChoreCtrl', function ($scope) {
	$scope.logChore = function (chore) {
		console.log(chore + ' is done!');
	}
})

app.directive('kid', function(){
		return {
			scope:{
				done:'&'
			}, 
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			template: '<div><input type="text" ng-model="chore"> </div>' +
			' <div> {{chore}} </div>'   + 
			' <div class="btn btn-primary" ng-click="done({chore:chore})"> I\'m done</div>',
		};
	});	