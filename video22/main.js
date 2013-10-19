/**
*  Module
*
* Description
*/
var app = angular.module('theApp', [])

app.controller('AppCtrl', function ($scope) {

  this.sayHi = function () {
    console.log('Hi!');
  }

  return $scope.AppCtrl = this;

});

