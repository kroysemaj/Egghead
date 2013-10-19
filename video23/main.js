/**
*  Module
*
* Description
*/
var app = angular.module('theApp', [])

var controllers = {}
controllers.AppCtrl = function ($scope) {

  this.sayHi = function () {
    console.log('Hi!');
  }

  return $scope.AppCtrl = this;

}

app.controller(controllers);

