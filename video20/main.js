/**
*  Module
*
* Description
*/
var app = angular.module('phoneApp', []);

app.controller('AppCtrl', function ($scope) {
	$scope.leaveVoicemail = function (number, message) {
		console.log('Number: ' + number + ' said: ' + message);
	}
});

app.directive('phone', function () {
	return {
		restrict:"E",
		scope:{
			number:"@",
			network:"=",
			makeCall:"&"
		},
		template:'<div class="well"> Number: {{number}} <br/>Network: <select ng-model="netwowrk" ng-options="net for net in networks"></select> <br/>' +
		'<input type="text" ng-model="value"> <br/>' +
		'<div class="btn btn-primary" ng-click="makeCall({number:number, message:value})">Call Home</div></div>',

		link: function (scope) {
			scope.networks = ["Verizon", "AT&T", "Sprint"]
			scope.network = scope.networks[0]
		}
	}
})