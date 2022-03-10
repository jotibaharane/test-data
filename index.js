let plname = document.getElementById("name");
let age = document.getElementById("age");
let player = document.getElementById("player");
let add = document.getElementById("add");
let list = document.getElementById("list");
let inner=""
let checkh=""
let check=""
let data =""
var namesArr = [];
function myFunction() {
  funcheck();
  if( namesArr.length <11){
  if (check.length === 0) {
    if (data.Pname !== "" && data.Page !== "" ) {
      namesArr.push(data);
      localStorage.setItem("PlayerData", JSON.stringify(namesArr));
      console.log("added");
    } else {
      alert("please insert data");
    }
  } else {
    alert("data alredy exist");
  }}else{
    alert("the player are full")
  }
  render()
man();
list.innerHTML = inner;
}
function man(){
  funcheck()
  render();
  list.innerHTML = inner;
}
function funcheck(){
   data = {
    Pname: plname.value,
    Page: age.value,
    Ptype: player.value,
  };
  checkh = JSON.parse(localStorage.getItem("PlayerData"));  
  // console.log(checkh.length)
  if (checkh) {
    namesArr=checkh
    console.log("localstorage check");
  }
  check = namesArr.filter((index) => {
    return index.Pname === data.Pname;
  });
}
function render(){
  inner = `<tr>
  <th>sr.no</th>
  <th>Player Name</th>
  <th>Player Age</th>
  <th>Player Type</th>
  </tr>`;
  namesArr.map((index, no) => {
    return (inner += `<tr>
    <td>${no + 1}</td>
    <td>${index.Pname}</td>
    <td>${index.Page}</td>
    <td>${index.Ptype}</td>
    </tr>`);
  });
}
man();
add.addEventListener("click", myFunction);
