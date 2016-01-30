function AppCtrl($scope) {
	console.log("Hello World from Controller");

	person1 = {
		name:'Siddharth',
		email: 'siddharth@email.com',
		number: '9867382921'
	};
	person2 = {
		name:'Manoj',
		email: 'manoj@email.com',
		number: '8472208831'
	};
	person3 = {
		name:'Divyesh',
		email: 'divyesh@email.com',
		number: '9837289196'
	};

	var contactList = [person1, person2, person3];

	$scope.contactList = contactList;	
}