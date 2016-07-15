var myApp= angular.module('scopeDemo', []);
myApp.controller('myController', myController);
function myController($scope){
	$scope.name = "Hanh";

	$scope.sayHello = function(){
		$scope.name = "Hello " + $scope.name;
	}
};