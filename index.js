let plname = document.getElementById("name");
let Age = document.getElementById("age");
let add = document.getElementById("add");
let list = document.getElementById("list");
let plus = document.getElementById("plus");
let mins = document.getElementById("mins");
let boll = document.getElementById("opt1");
let bat = document.getElementById("opt2");
let bowler;
let batsman;
let inner = "";
let checkh = "";
let check = "";
let data = "";
let val = "";
var namesArr = [];
const ptypeche = () => {
  if (bowler && batsman) {
    return "allrounder";
  } else if (bowler) {
    return "bowler";
  } else if (batsman) {
    return "batsman";
  } else {
    return "";
  }
};
function checkbox() {
  let checked = false;
  if (boll.checked) {
    checked = true;
  }
  bowler = checked;
}
function checkboxx() {
  let checked = false;
  if (bat.checked) {
    checked = true;
  }
  batsman = checked;
}

// onclick

function myFunction() {
  getData();
  funcheck();
  if (namesArr.length < 11) {
    if (check.length === 0) {
      if (
        data.Pname !== "" &&
        data.Page !== "" &&
        data.Ptype !== ""
      ) {
        namesArr.push(data);
        localStorage.setItem("PlayerData", JSON.stringify(namesArr));
        console.log("added");
      } else {
        alert("please insert data");
      }
    } else {
      alert("data alredy exist");
    }
  } else {
    alert("the player are full");
  }
  render();
  man();
  plname.value = "";
  age.value = "0";
  boll.checked = false;
  bat.checked = false;
  checkbox();
  checkboxx();
  list.innerHTML = inner;
}

function man() {
  funcheck();
  render();
  list.innerHTML = inner;
}

// inpute check

function funcheck() {
  checkh = JSON.parse(localStorage.getItem("PlayerData"));
  if (checkh) {
    namesArr = checkh;
  }
  check = namesArr.filter((index) => {
    return index.Pname === data.Pname;
  });
}

// value render

function render() {
  if (namesArr.length) {
    inner = `<tr>
  <th>sr.no</th>
  <th>Player Name</th>
  <th>Player Age</th>
  <th>Player Type</th>
  </tr>`;
  } else {
    inner = "No data for display";
  }
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

// age incriment decriment
plus.addEventListener("click", () => {
  Age.value = parseInt(Age.value) + 1;
});
mins.addEventListener("click", () => {
  Age.value = parseInt(Age.value) - 1;
});

function getData() {
  console.log(Age.value);
  let name = "";
  let age = "";
  let type = "";
  plname.value ? (name = plname.value) : alert("enter player name");
  Age.value
    ? Age.value >= 18 && Age.value <= 50
      ? (age = Age.value)
      : alert("enter age between 18-50")
    : alert("enter age");
  bowler && batsman
    ? (type = "allrounder")
    : bowler
    ? (type = "bowler")
    : batsman
    ? (type = "batsman")
    : (type = "");
  data = {
    Pname: name,
    Page: age,
    Ptype: type,
  };
}

function DataCheck()
{
    if (namesArr.length < 11) {
        if (check.length === 0) {
          if (
            data.Pname !== "" &&
            data.Page !== "" &&
            data.Ptype !== ""
          ) {
            namesArr.push(data);
            localStorage.setItem("PlayerData", JSON.stringify(namesArr));
            console.log("added");
          } else {
            alert("please insert data");
          }
        } else {
          alert("data alredy exist");
        }
      } else {
        alert("the player are full");
      }
}
