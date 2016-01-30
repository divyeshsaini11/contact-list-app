var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactList',function(req, res){
	console.log("I received a GET request");

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

	res.json(contactList);
});

app.listen(3000);
console.log("Server running on port 3000");