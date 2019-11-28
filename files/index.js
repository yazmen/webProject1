function GetRandomLtter() { 
  var arrLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W"
    , "X", "Y", "Z"];
  var randomLtter = arrLetter[Math.floor(Math.random() * arrLetter.length)];
  return randomLtter;
}
var inputText = document.getElementById("inputText");
var  generate = document.getElementById("inputSubmit");
var ul = document.getElementById("listOfButtons");
var count = 0 ; // index of an array
var letterOfButtons = []; 
var eventArr = [];
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
  }}
// لو فيه بوتونز موجودة امسحها و بعدين ضيفلي بوتونز جديدة على حسب الرقم اللي طلبه
  generate.addEventListener("click", function(){
     if(letterOfButtons.length != 0){
       // console.log(ul.innerHTML);
        ul.innerHTML = "";  
       // console.log(ul.innerHTML);
        document.getElementById("images").innerHTML = ""; }
        createButtons();
  });
  // لما اناديك اعرضلي صورة الحرف اللي هديهولك
  function viewIMG_OfLetter( lettet){ //done
     var img = document.createElement("img"); 
     var imgParent = document.getElementById("images") ;
         img.src +="../pic/"+lettet+".jpg"; 
         imgParent.appendChild(img); 
   }
    // امسك الحرف اللي اتضغط و ابعته للفنكشن اللي فوق  
  ul.addEventListener("click" , function(e){
     document.getElementById("images").innerHTML = "";
     if(e.target.textContent.length !=1) 
    alert("press the button please , you press out button .");
    else 
    viewIMG_OfLetter(e.target.textContent);

   });
   // Class 

function Event(type, target,  time){
  this.eventType = type ;
  this.eventTarget = target ;
  this.eventTime = time ;
  this.display = function(){
    console.log("Type : " +this.eventType );
    console.log( "Target : " +this.eventTarget );
    console.log("Time : " + this.eventTime  );
  }
}
//events :
// no.1 (LOAD & UNLOAD)
window.addEventListener("load" , function(event){
  //console.log(event.type , event.target)
  makeANDsend( event , event.target);
});
window.addEventListener("unload" , function(e){
// console.log(event.type , event.target)
 // makeANDsend( event , event.target);
});
//no.2 (GENREATE BUTTON)
generate.addEventListener("click" , function(e){
if(inputText.value >0 ){
  makeANDsend( event , numOfChars);
  //console.log(event.type,e.target.textContent);
}
});
//no.3(LETTER BUTTONS)
ul.addEventListener("click" , function(e){
   if(e.target.textContent.length <2) //لو ضغط حاجة برا البوتون
 makeANDsend( event , event.target.textContent);
} );
//ببعتلها الايفنت عشان تحطه في اوبجكت 
function makeANDsend (event,targetType){
  var type = event.type ;
  var target = targetType;
  var evenTime = new Date();
  var date = evenTime.getFullYear()+'-'+(evenTime.getMonth()+1)+'-'+evenTime.getDate();
  var time =evenTime.getHours() +':'+evenTime.getMinutes() + ':' + evenTime.getSeconds();
  evenTime = date + ' '+ time ;
  var temp = new Event(type , target , evenTime );
 // temp.display();
storeInLocalStorage(temp);
    
}
//arr.push(obj );
//arr.push(JSON.parse(localStorage.getItem('key name ')));
//localStorage.setItem('key name ', JSON.stringify(arr));
// ببتنادى مع كل ايفنت بيحصل 
function storeInLocalStorage(temp){
  var stored ;
  if(localStorage.length<1){
    eventArr.push(temp);
    localStorage.setItem('Events', JSON.stringify(eventArr));
     stored = localStorage.getItem('Events');
    //console.log(stored);

}

  else {
    stored = localStorage.getItem('Events');
    var stored2 = JSON.parse(stored);
   eventArr.push(stored2);
   eventArr.push(temp);
       // console.log(eventArr);
      localStorage.setItem("Events", JSON.stringify(eventArr));

  }



}

window.setInterval(function(){
 localStorage.clear();
//eventArr = [];
 //console.log("clearing Local Storage DONE");
}, 5000);  

/*

 var bt = document.getElementById("printArray");
 bt.addEventListener("click", dis());
 function dis(){
 for(var i=0 ; i<count ;i++ ){
     eventArr[i].display();

 }
}*/




/*function person (n , a ){
   this.name = n ;
   this.age = a ;
   this.display = function(){
   document.write(" name "+this.name+" age "+ this.age )	
   };
   }
   var p1 = new person("ali", 20);
   var p2 = new person("ola", 21);
   var p3 = new person("ameen", 11);
   var arr = [] ;
  // arr[0]= p1 ;
  // arr[1]= p2 ;
  // arr[3]= p3 ;
  arr.push(p1);
  localStorage.setItem("Persons", JSON.stringify(arr));
   //console.log("stored normal :"+stored);
function stor (p){
   var stored = JSON.parse(localStorage.getItem("Persons"));
   stored.push(p);
   console.log("stored fun befor :"+stored);
   localStorage.setItem("Persons", JSON.stringify(stored));
  // console.log("stored fun after :"+stored);

}
stor(p2);
stor(p3);


*/


     