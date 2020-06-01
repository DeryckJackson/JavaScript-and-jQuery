function SayName(name){
  console.log("hi " + name)
}

const myName = "Ian"
SayName(myName);
SayName("Deryck");

function Mutipl(num1, num2){
  console.log(num1 * num2)
}
const number1 = 2
const number2 = 4
Mutipl(number1, number2);

function Divide(num1, num2){
  console.log(num1 / num2)
}

const number3 = 8;
const number4 = 2;
Divide(number3, number4);

function NameAF(){
  let var1 = prompt("type name")
  let var2 = prompt("say age")
  let var3 = prompt("favorite food")
  alert(var1 + " " + var2 + " " + var3)
}

NameAF()