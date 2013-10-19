/**
*  Module
*
* Description
*/
var app = angular.module('theApp', [])

app.directive('zippy', function (){
  return {
    restrict: "E",
    scope: {
      title: "@"
    },
    transclude: true,
    template: '<div><h3 ng-click="toggleContent()">{{title}}</h3><div ng-show="isContentVisible" ng-transclude>Hello World, </div></div>',
    link: function (scope) {
      scope.isContentVisible = false;

      scope.toggleContent = function () {
        scope.isContentVisible = !scope.isContentVisible;
      }
    }
  }
})
