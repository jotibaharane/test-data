let plname = document.getElementById("name");
let age = document.getElementById("age");
let player = document.getElementById("player");
let add = document.getElementById("add");
let list = document.getElementById("list");
var namesArr = [];
function myFunction() {
  let inner = `<tr>
  <th>sr.no</th>
  <th>Player Name</th>
  <th>Player Age</th>
  <th>Player Type</th>
</tr>`;
  let data = {
    Pname: plname.value,
    Page: age.value,
    Ptype: player.value,
  };
  let checkh = JSON.parse(localStorage.getItem("PlayerData"));
  console.log(checkh);
  //   console.log(namesArr);
  let check = namesArr.filter((index) => {
    return index.Pname === data.Pname;
  });

  if (check.length === 0) {
    if (data.Pname !== "" && data.Page !== "" && namesArr.length <= 11) {
      namesArr.push(data);
      //   let new1 = [...namesArr, data];
      localStorage.setItem("PlayerData", JSON.stringify(data));
      console.log("added");
    } else {
      alert("please insert data");
    }
  } else {
    alert("data alredy exist");
  }

  checkh.map((index, no) => {
    return (inner += `<tr>
    <td>${no + 1}</td>
    <td>${index.Pname}</td>
    <td>${index.Page}</td>
    <td>${index.Ptype}</td>
    </tr>`);
  });
  list.innerHTML = inner;
}

add.addEventListener("click", myFunction);
