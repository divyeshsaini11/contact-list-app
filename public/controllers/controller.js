function AppCtrl($scope, $http) {
	console.log("Hello World from Controller");
var refresh = function(){
$http.get('/contactList').success(function(response){
	console.log("I got the data I requested",response);
	$scope.contactList = response;
	$scope.contact="";
}); 
};

refresh();

$scope.addContact = function() {
	console.log($scope.contact);
	$http.post('/contactList',$scope.contact).success(function(response){
		console.log(response);
		refresh();
	});
};

$scope.remove = function(contact) {
	console.log(contact._id);
	$http.delete('/contactList/' + contact._id).success(function(response){
		refresh();
	});
};
}