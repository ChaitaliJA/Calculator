var page = document.createElement("div");
var table = document.createElement("table");
table.setAttribute("class", "table");
var tr1 = document.createElement("tr");
// var s=document.createElement('td');
// var ssss=document.createElement('input');
// ssss.setAttribute('type','text');
// ssss.setAttribute('id','screen');
// ssss.setAttribute('colspan','3');
// s.append(ssss);
var s = document.getElementById("screen");
s.addEventListener("keyup", onlynum);
function onlynum(event) {
  var key_value = event.which || event.keyCode;
  // document.getElementById("screen").innerHTML = "The Keypress Value is # " + key_value;
  // console.log(document.getElementById("screen"));
  if (key_value < 47 || key_value > 58) {
    alert("Only numbers are allowed");
  }
}
s.setAttribute("colspan", "3");
tr1.append(s);

var tr2 = document.createElement("tr");
var seven = but("7");
var eight = but("8");
var nine = but("9");
var plus = but("+");
var cl = c();
tr2.append(seven, eight, nine, plus, cl);

var tr3 = document.createElement("tr");
var four = but("4");
var five = but("5");
var six = but("6");
var percent = but("%");
var braco = but("(");
tr3.append(four, five, six, percent, braco);

var tr4 = document.createElement("tr");
var one = but("1");
var two = but("2");
var three = but("3");
var mult = but("*");
var bracc = but(")");
tr4.append(one, two, three, mult, bracc);

var tr5 = document.createElement("tr");
var zero = but("0");
var point = but(".");
var equal = e();
var minus = but("-");
var divide = but("/");
tr5.append(zero, point, equal, minus, divide);
table.append(tr1, tr2, tr3, tr4, tr5);
page.append(table);
document.body.append(page);

function but(butval) {
  var tryy = document.createElement("td");
  tryy.type = "button";
  tryy.classList.add("btn", "btn-info", "btn-sm");
  tryy.addEventListener("click", dis);
  tryy.innerText = butval;
  return tryy;
  function dis() {
    document.getElementById("screen").value += tryy.innerText;
  }
}

function c() {
  var clear = document.createElement("td");
  clear.type = "button";
  clear.classList.add("btn", "btn-info", "btn-sm");
  clear.addEventListener("click", cl);
  clear.innerText = "C";
  return clear;
  function cl() {
    document.getElementById("screen").value = "";
  }
}

function e() {
  var cal = document.createElement("td");
  cal.type = "button";
  cal.classList.add("btn", "btn-info", "btn-sm");
  cal.addEventListener("click", ecal);
  cal.innerText = "=";
  return cal;
  function ecal() {
    let x = document.getElementById("screen").value;
    let y = eval(x);
    document.getElementById("screen").value = y;
  }
}
