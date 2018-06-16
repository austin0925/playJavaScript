var greet = name => "Greetings " + name; 
console.log(greet);
assert(greet("Oishi") === "Greetings Oishi", "Oishi is properly greeted");
var anotherGreet = function (name) { return "Greetings " + name; }; 
console.log(anotherGreet);
assert(anotherGreet("Oishi") === "Greetings Oishi", "Again, Oishi is properly greeted"); 
