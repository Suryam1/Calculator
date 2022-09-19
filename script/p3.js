var screen=document.getElementById("output");
var operand1=null;
var operand2=null;
var operator=null;
var hunderd=100;
// var interval;
var c=0;
// function fkeyboard(event){
//     if (event.key=='w'){
//         f9();
//     }
// }
function f9(){
    let value=9
    screen.innerText+=value;
}
function f8(){
    let value=8;
    screen.innerText+=value;
}
function f7(){
    let value=7;
    screen.innerText+=value;
}
function f6(){
    let value=6;
    screen.innerText+=value;
}
function f5(){
    let value=5;
    screen.innerText+=value;
}
function f4(){
    let value=4;
    screen.innerText+=value;
}
function f3(){
    let value=3;
    screen.innerText+=value;
}
function f2(){
    let value=2;
    screen.innerText+=value;
}
function f1(){
    let value=1;
    screen.innerText+=value;
}
function f0(){
    let value=0;
    screen.innerText+=value;
}
function fdot(){
    let value='.';
    screen.innerText+=value;
}
function fsignchanges(){
    if(c%2==0){
        screen.innerText=-(screen.innerText);
    }
    else{
        screen.innerText=+(screen.innerText);
    }
}
function fsum(){
    operand1=screen.innerText;
    screen.innerText="";
    operator='+';
}
function fdiff(){
    operand1=screen.innerText;
    screen.innerText="";
    operator='-';
}
function fproduct(){
    operand1=screen.innerText;
    screen.innerText="";
    operator='*';
}
function fdivision(){
    operand1=screen.innerText;
    screen.innerText="";
    operator='/';
}
function fclears(){
    screen.innerText="";
}
function fpercentages(){
    if (operand1!=0){
        operand2=screen.innerText;
        if (operator=='+'){
            screen.innerText=eval(operand1+" "+operator+" "+operand2);
        }
        else if (operator=='-'){
            screen.innerText=eval(operand1+" "+operator+" "+operand2);
        }
        else if (operator=='*'){
            var operand3=eval(operand1+" "+operator+" "+operand2);
            operator='/';
        screen.innerText=eval(operand3+" "+operator+" "+hunderd);
        }
        else if (operator=='/'){
            var operand3=eval(operand2+" "+operator+" "+hunderd);
            screen.innerText=eval(operand1+" "+operator+" "+operand3);
        }
        
    }
    else if (operand1==null){
        operand1=screen.innerText;
        operator='/';
        screen.innerText=eval(operand1+" "+operator+" "+hunderd);
    }
}

function fequals(){
    operand2=screen.innerText;
    screen.innerText="";
    if (operator=='+'){
        screen.innerText=eval(operand1+" "+operator+" "+operand2);
    }
    else if (operator=='-'){
        screen.innerText=eval(operand1+" "+operator+" "+operand2);
    }
    else if (operator=='*'){
        screen.innerText=eval(operand1+" "+operator+" "+operand2);
    }
    else if (operator=='/'){
        if (operand2!=0){
        screen.innerText=eval(operand1+" "+operator+" "+operand2);
        }
        else if (operand2==0)
        {
            screen.innerText="Error";
        }
    }
}


// let value=this.getAttribute("data-value");
var num9=document.getElementById("nine");
var n9=document.getElementById("nine");
num9.addEventListener("click",f9);
n9.addEventListener("keydown",function(event){
    if (event.key=='w'){
        f9();
    }
})
let num8=document.getElementById("eight");
num8.addEventListener("click",f8);
let num7=document.getElementById("seven");
num7.addEventListener("click",f7);
let num6=document.getElementById("six");
num6.addEventListener("click",f6);
let num5=document.getElementById("five");
num5.addEventListener("click",f5);
let num4=document.getElementById("four");
num4.addEventListener("click",f4);
let num3=document.getElementById("three");
num3.addEventListener("click",f3);
let num2=document.getElementById("two");
num2.addEventListener("click",f2);
let num1=document.getElementById("one");
num1.addEventListener("click",f1);
let num0=document.getElementById("zero");
num0.addEventListener("click",f0);
let sum=document.getElementById("plus");
sum.addEventListener("click",fsum);
let diff=document.getElementById("minus");
diff.addEventListener("click",fdiff);
let product=document.getElementById("multiply");
product.addEventListener("click",fproduct);
let division=document.getElementById("divide");
division.addEventListener("click",fdivision);
let equals=document.getElementById("equal");
equals.addEventListener("click",fequals);
let clears=document.getElementById("clear");
clears.addEventListener("click",fclears);
let percentages=document.getElementById("percent");
percentages.addEventListener("click",fpercentages);
let dotss=document.getElementById("dot");
dotss.addEventListener("click",fdot);
let signchanges=document.getElementById("signchange");
signchanges.addEventListener("click",fsignchanges);