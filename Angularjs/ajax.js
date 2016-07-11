
var myApp = angular.module('myModule', []);

myApp.controller('myController', function($scope){
	var employee = {
		FirstName: "Hanh",
		LastName: "Tran",
		Gender: "Female"
	}
	$scope.employee = employee;
});

