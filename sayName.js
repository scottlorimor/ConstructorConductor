//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
 var Person = function (name, age) {
 	this.name = name;
 	this.age = age;
 }

//Now create three instances of Person with data you make up

  //code here
var scott = new Person("scott", 29);
var Tim = new Person("Tim", 28);
var Andy = new Person("Andy", 30);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

Person.prototype.sayName = function() {
	alert(this.name);
};