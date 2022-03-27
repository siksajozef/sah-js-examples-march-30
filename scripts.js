// 4th part

$("div").text("Hello");
$("div").css("background","purple");



// From 1st part to the 3rd
console.log("JavaScript is working!");

let colors = ["orange", "blue", "green", "purple"];
let post = {
    title: "My Post",
    description: "My first post, awesome!",
    likeCount: 12,
    comments: ["cool", "nice job!"]
};

console.log(colors);
console.log(post);

let age=12;
if (age > 18) {
    console.log("You are an adult.");
} else{
    console.log("You are NOT an adult."); 
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

colors.forEach(color => {console.log(color);});

let myFunkcion = x => {
    console.log(x);
}
myFunkcion(10);

let greeter = name => {
    console.log(`Hello, ${name}.`);
}
greeter("Adam");
greeter("Thomas");

console.log("This is the end of our code.");