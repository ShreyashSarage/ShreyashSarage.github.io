function clearScreen(){
    document.getElementById("result").value ="";
}

function display(value){
    document.getElementById("result").value += value;
}

function calculate(){
    var expression = document.getElementById("result").value;
    var evaluate = eval(expression);
    document.getElementById("result").value = evaluate;
}