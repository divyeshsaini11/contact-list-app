function AppCtrl($scope, $http) {
	console.log("Hello World from Controller");

$http.get('/contactList').success(function(response){
	console.log("I got the data I requested");
	$scope.contactList = response;
}); 
	
}