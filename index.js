// var firstName = prompt("hi! enter your name!");
// var lastName = prompt("hi! enter your lastName!");
// var fullName = firstName + " " + lastName;
// alert("hi good afternoon "  + fullName );





// var database = [
//     {
//         userName: "ujjwal",
//         password: "supersecret"
//     },
//     {
//         userName: "mansi",
//         password: "mysecret"
//     },
//     {
//         userName: "michel",
//         password: "secretpw"
    
//     },
//     {
//         userName: "arush",
//         password: "anythig"
//     }
// ];                        
 
// var newsFeed = [
//     {
//         userName: "vedant",
//         timeline: "So tired of all that learning!"
//     },
//     {
//         userName: "shweta",
//         timeline: "Learning Js is so cool"
//     },
//     {
//         userName: "manjit",
//         timeline: "Learning Js is part of my daily routine"
//     }
// ]                  
// var userNamePrompt = prompt("What's your userName?");
// var passwordPrompt = prompt("What's your Password?");
 
 
// function isUserValid(user, pass){
//     for (var i = 0; i<database.length; i++){
//         if(database[i].userName === user
//             && database[i].password === pass ){
//         return true;            }
//         }
//     return false;
// }
 
// function signIn(user, pass){
// if(isUserValid(user, pass)){
//     console.log(newsFeed);
// }else{
//     alert("Sorry wrong userName and Password");
// }
// }
 
// signIn(userNamePrompt, passwordPrompt);


















// var database = [
//     {
//         userName: "manjit",
//         password: "abcd"
//     },
//     {
//         userName: "sanjit",
//         password: "1234"
//     },
//     {
//         password: "anjita",
//         password: "sharma"
//     },
//     {
//         userName: "shashi",
//         password: "sharma"
//     },
//     {
//         userName: "shayam",
//         password: "sharma"
//     },
//     {
//         userName: "shabya",
//         password: "sharma"
//     }
// ]

// var newsFeed = [
//     {
//         userName: "yogesh",
//         timeline: "riding is my hobby"

//     },
//     {
//         userName: "shabya",
//         timeline: "shabya is like to singing"
//     },
//     {
//         userName: "manjit",
//         timeline: "like to learn javascript"
//     },
//     {
//         userName: "rajesh",
//         timeline: "im unstopeabal"
//     }
// ]


// var userNamePrompt = prompt("enter your username");
// var userNamePrompt = prompt("enter your password");



// signIn(userNamePrompt,userNamePrompt);



























// // var database = [
// //     {
// //         userName: "manjit",
// //         password: "Om.@#!1234"
// //     },
// //     
// //         userName: "ranjit",
// //         password: "Om.@#!12345"
// //     }
// // ];                        
 
// // var newsFeed = [
// //     {
// //         userName: "sanjit",
// //         timeline: function(){
// //             alert("alert")
// //         }
// //     },
// //     {
// //         userName: "jay",
// //         timeline: "Learning Js is so cool"
// //     }
// // ]   




// // var userNamePrompt = prompt("What's your userName?");
// // var passwordPrompt = prompt("What's your Password?");




// // function signIn(user, pass){
// // if(user === database[0].userName  && pass === database[0].password){
// //     console.log(newsFeed);
// // }else{
// //     alert("Sorry wrong userName and Password");
// // }
// // }





// var database = [
//     {
//         userName: "ujjwal",
//         password: "supersecret"
//     },
//     {
//         userName: "mansi",
//         password: "mysecret"
//     },
//     {
//         userName: "michel",
//         password: "secretpw"
//     }
// ];                        
 
// var newsFeed = [
//     {
//         userName: "vedant",
//         timeline: "So tired of all that learning!"
//     },
//     {
//         userName: "shweta",
//         timeline: "Learning Js is so cool"
//     },
//     {
//         userName: "manjit",
//         timeline: "Learning Js is part of my daily routine"
//     }
// ]                  
// var userNamePrompt = prompt("What's your userName?");
// var passwordPrompt = prompt("What's your Password?");
 
 
// function isUserValid(user, pass){
//     for (var i = 0; i<database.length; i++){
//         if(database[i].userName === user
//             && database[i].password === pass ){
//                 return true;            }
//             }
//         return false;
//     }
     
//     function signIn(user, pass){
//     if(isUserValid(user, pass)){
//         console.log(newsFeed);
//     }else{
//         alert("Sorry wrong userName and Password");
//     }
//     }
     
//     signIn(userNamePrompt, passwordPrompt);
    
































var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");


var body = document.getElementById("gradient");



var button = document.getElementById("enter");
var input = document.getElementById("userinput");

var button2 = document.getElementById("add");
var input2 = document.getElementById("userdata");

var button3 = document.getElementById("enter2")
var input3 = document.getElementById("usercart")

var ul = document.querySelector("#abc");
var ul = document.querySelector("#abcd");
var ul = document.querySelector("#abcde");



function setGradient(){
console.log("working")

    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

button.addEventListener("click", function(){
    if (input.value.length> 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})



button2.addEventListener("click", function(){
    console.log("click")
    if (input.value.length> 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})



button3.addEventListener("click", function(){
    if (input.value.length> 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})





input.addEventListener("keypress", function(e){
    if (input.value.length> 0 && e.keyCode === 13){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})














