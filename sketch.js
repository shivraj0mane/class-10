var a = prompt('Enter the value of a variable')
var b = prompt('Enter the value of b variable')

function setup(){
  var button1 = createButton('Click here to swap');
  button1.mousePressed(swap); 
  
}

function draw() {
  background(220);
}

function swap(){
[a, b]=[b, a]

console.log('value of a after swapping ',+a);
console.log('value of b after swapping ',+b);
}