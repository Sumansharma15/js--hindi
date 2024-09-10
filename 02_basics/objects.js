//singleton => through constructor 
//object.create

//object literals
const MySym = Symbol("key1") //this is a data type we need to define it inside an object
const JsUser = {
    name : "suman",
    [MySym] : "mykey1", // correct way of defining symbol inside an object
    age : 20,
    location : "jammu",
    IsLoggedIn : false,
    email : "suman@gmail.com",
    Lastlogindays : [ "saturday", "monday"]
}

console.log(JsUser.email); //not best way bcz if name is in inverted commas you cannot access it by using .email
console.log(JsUser["email"]); // best way 
console.log(JsUser[MySym]);

JsUser.age = 23
//Object.freeze(JsUser)
JsUser.age = 33
console.log(JsUser);

 JsUser.greeting = function(){
    console.log("Hello Jsuser");
    
 }
 console.log(JsUser.greeting());

 JsUser.twogreeting = function(){
    console.log(`Hello JsUser, ${this.name}`);
    
 }
 console.log(JsUser.twogreeting());
 



