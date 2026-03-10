function changeColor(){
document.body.style.backgroundColor = "lightblue";
}

function showName(){

let name = document.getElementById("nameInput").value;

document.getElementById("result").innerHTML = "Hello " + name;

}