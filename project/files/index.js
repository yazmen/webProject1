function GetRandomLtter() {
  var arrLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W"
    , "X", "Y", "Z"];
  var randomLtter = arrLetter[Math.floor(Math.random() * arrLetter.length)];
  return randomLtter;
}
var inputText = document.getElementById("inputText");
var generate = document.getElementById("inputSubmit");
var storageButton = document.getElementById("storageButton");

var ul = document.getElementById("listOfButtons");
var count = 0; // index of an array
var letterOfButtons = [];
var loadArr = [];
var unloadArr = [];
var generateArr = [];
var letterArr = [];
var numOfChars;
// خد عدد الحروف لما اضغط البوتون
generate.addEventListener("click", function () {
  numOfChars = inputText.value;
  // console.log(numOfChars);
});
// اعملي بوتونز بعدد الحروف اللي جبتها فوق لما أناديك
function createButtons() {
  for (var i = 0; i < numOfChars; i++) {
    var li = document.createElement("li");
    letterOfButtons[i] = GetRandomLtter();
    li.innerHTML = "<button>" + letterOfButtons[i] + "</button>";
    ul.appendChild(li);
    //console.log(li.innerHTML);
    // console.log(li.textContent + i);
  }
}
// لو فيه بوتونز موجودة امسحها و بعدين ضيفلي بوتونز جديدة على حسب الرقم اللي طلبه
generate.addEventListener("click", function () {
  if (letterOfButtons.length != 0) {
    // console.log(ul.innerHTML);
    ul.innerHTML = "";
    // console.log(ul.innerHTML);
    document.getElementById("images").innerHTML = "";
  }
  createButtons();
});
// لما اناديك اعرضلي صورة الحرف اللي هديهولك
function viewIMG_OfLetter(lettet) { //done
  var img = document.createElement("img");
  var imgParent = document.getElementById("images");
  img.src += "../pic/" + lettet + ".jpg";
  imgParent.appendChild(img);
}
// امسك الحرف اللي اتضغط و ابعته للفنكشن اللي فوق  
ul.addEventListener("click", function (e) {
  document.getElementById("images").innerHTML = "";
  if (e.target.textContent.length != 1)
    alert("press the button please , you press out button .");
  else
    viewIMG_OfLetter(e.target.textContent);

});
// Class 

function Event(type, target, time) {
  this.eventType = type;
  this.eventTarget = target;
  this.eventTime = time;
  this.display = function () {
    console.log("Type : " + this.eventType);
    console.log("Target : " + this.eventTarget);
    console.log("Time : " + this.eventTime);
  }
}
//events :
// no.1 (LOAD & UNLOAD)
window.addEventListener("load", function (event) {
  //console.log(event.type , event.target)
  makeANDsend(event, "window", 1);
});
window.addEventListener("unload", function (e) {
  // console.log(event.type , event.target)
  makeANDsend(event, "window", 2);
});
//no.2 (GENREATE BUTTON)
generate.addEventListener("click", function (e) {
  if (inputText.value > 0) {
    makeANDsend(event, numOfChars, 3);
    //console.log(event.type,e.target.textContent);
  }
});
//no.3(LETTER BUTTONS)
ul.addEventListener("click", function (e) {
  if (e.target.textContent.length < 2) //لو ضغط حاجة برا البوتون
    makeANDsend(event, event.target.textContent, 4);
});
//ببعتلها الايفنت عشان تحطه في اوبجكت 
function makeANDsend(event, targetType, typeOfEvent) {
  var type = event.type;
  var target = targetType;
  var evenTime = new Date();
  var date = evenTime.getFullYear() + '-' + (evenTime.getMonth() + 1) + '-' + evenTime.getDate();
  var time = evenTime.getHours() + ':' + evenTime.getMinutes() + ':' + evenTime.getSeconds();
  evenTime = date + ' ' + time;
  var temp = new Event(type, target, evenTime);
  //console.log(type);
  // temp.display();
  if (typeOfEvent == 1) {
    storeLOAD(temp);
  }
  else if (typeOfEvent == 2) {
    storeUNLOAD(temp);
  }
  else if (typeOfEvent == 3) {
    storeGENERARE(temp);
  }
  else if (typeOfEvent == 4) {
    storeLETTER(temp);

  }

}

// var eventArr = [];
// var loadArr = [];
// var unloadArr = [];
// var generateArr = [];
// var letterArr = [];
function storeLOAD(temp) {
  if (localStorage.getItem("LOAD")) {
    var stored = JSON.parse(localStorage.getItem("LOAD"));
    stored.push(temp);
    localStorage.setItem("LOAD", JSON.stringify(stored));
  }
  else {

    localStorage.setItem("LOAD", JSON.stringify(loadArr));


  }
}
function storeUNLOAD(temp) {
  if (localStorage.getItem("UNLOAD")) {
    var stored2 = JSON.parse(localStorage.getItem("UNLOAD"));
    stored2.push(temp);
    localStorage.setItem("UNLOAD", JSON.stringify(stored2));

  }
  else {
    localStorage.setItem("UNLOAD", JSON.stringify(unloadArr));


  }
}
function storeGENERARE(temp) {

  if (localStorage.getItem("GENERARE") === null) {
    var stored3 = localStorage.setItem("GENERARE", JSON.stringify(generateArr));
  }
  else {
    stored3 = JSON.parse(localStorage.getItem("GENERARE"));

    stored3.push(temp);

    localStorage.setItem("GENERARE", JSON.stringify(stored3));

  }
}
function storeLETTER(temp) {
  if (localStorage.getItem("LETTER") === null) {
    var stored4 = localStorage.setItem("LETTER", JSON.stringify(letterArr));

  }
  else {
    stored4 = JSON.parse(localStorage.getItem("LETTER"));
    stored4.push(temp);
    localStorage.setItem("LETTER", JSON.stringify(stored4));

  }
}
// window.setInterval(function () {
//   localStorage.clear();
//  //eventArr = [];
// //   //console.log("clearing Local Storage DONE");
// }, 5000);
///////////////////(vergion #2)////////////////////

window.setInterval(function () {
  //console.log(JSON.parse(localStorage.getItem("LETTER")));
  var $arr1 = [];
  var $arr2 = [];
  var $arr3 = [];
  var $arr4 = [];
  $arr1 = JSON.parse(localStorage.getItem("LOAD"));
  $arr2 = JSON.parse(localStorage.getItem("UNLOAD"));
  $arr3 = JSON.parse(localStorage.getItem("GENERARE"));
  $arr4 = JSON.parse(localStorage.getItem("LETTER"));
  //console.log( $arr1);
  
  $.ajax({
    "type": "POST",
    "url": "index.php",
    "data": {
      "LOAD": JSON.stringify($arr1),
      "UNLOAD": JSON.stringify($arr2),
      "GENERARE": JSON.stringify($arr3),
      "LETTER": JSON.stringify($arr4)
    },
    "beforeSend": function () {
      console.log("Sending to Server...");
    },
    "success": function (response) {
      console.log("Server Replied!");
    }
  });
  localStorage.clear();
}, 5000);
storageButton.addEventListener("click", function () {
$.ajax({
    "type": "GET",
    "url": "index.php",
    "data": {
      "events": ''
     
    },
    "success": function(response){
      $("#storageDIV").text(response);
    	if(response){
       var obj = JSON.parse(response);
       
    	}
    }
});
});






