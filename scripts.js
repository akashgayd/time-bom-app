let crakers = document.getElementById("crakers");

let croud = document.getElementById("croud");

let bomImg = document.getElementById("bomImg");

let input = document.getElementById("input");

let timer = document.getElementById("timer");


let random;

function ganrateRandomNum(){
  random = Math.ceil(Math.random()*4)
}
ganrateRandomNum();




// console.log(random);
let count = 10;



timer.textContent = count;

// let responce = "success";

let timeOutId = setInterval(() => {
   count = count -1;
  


timer.textContent = count;

if(count === 0){

   croud.src = "assets/blste.gif"

   clearInterval(timeOutId)

}
   
},1000);

function saveTheCity(){

  let usermsg = parseInt(input.value)
   

   if(usermsg === random && count >0 ){

       croud.src = "assets/croud2.png"
       crakers.style.display = "block";
       bomImg.style.display = "none";
       input.style.display = "none";


       clearTimeout(timeOutId);
   }
   else{
      croud.src = "assets/blste.gif";
bomImg.style.display = "none";
input.style.display = "none";
      clearTimeout(timeOutId);

   }
  
}

function resetButton(){

   ganrateRandomNum()

location.reload();
   

   
}
