let button1 = document.getElementById('b1');
let button2 = document.getElementById('b2');
let button3 = document.getElementById('b3');

let popup = document.getElementById('ans');
let trans = document.querySelector('.pop');


button1.addEventListener('click', function CR(){
     var a= Math.floor(Math.random()*(7-1))+1;
      if(a==1||a==2){
      document.getElementById("useri").src="userstone.png";
      document.getElementById("comi").src="comstone.png";
      document.getElementById("para").innerText="Game Tiee !";
      popup.style.display = "grid";
      trans.style.transition = "all 1s ease";
   }
      if(a==3||a==4){
      document.getElementById("useri").src="userstone.png";
      document.getElementById("comi").src="compaper.png";
      document.getElementById("para").innerText="Computer Win !";
      popup.style.display = "grid";
   }     if(a==5||a==6){
      document.getElementById("useri").src="userstone.png";
      document.getElementById("comi").src="comsci.png";
      document.getElementById("para").innerText="You win !";
      popup.style.display = "grid";

   }});

   button2.addEventListener('click', function CP(){
      var a= Math.floor(Math.random()*(7-1))+1;
       if(a==1||a==2){
       document.getElementById("useri").src="userpaper.png";
       document.getElementById("comi").src="comstone.png";
       document.getElementById("para").innerText="You Win !";
       popup.style.display = "grid";
    }
       if(a==3||a==4){
       document.getElementById("useri").src="userpaper.png";
       document.getElementById("comi").src="compaper.png";
       document.getElementById("para").innerText="Game Tiee !";
       popup.style.display = "grid";
    }     if(a==5||a==6){
       document.getElementById("useri").src="userpaper.png";
       document.getElementById("comi").src="comsci.png";
       document.getElementById("para").innerText="Computer Win !";
       popup.style.display = "grid";
 
    }});
    button3.addEventListener('click', function CR(){
      var a= Math.floor(Math.random()*(7-1))+1;
       if(a==1||a==2){
       document.getElementById("useri").src="usersci.png";
       document.getElementById("comi").src="comstone.png";
       document.getElementById("para").innerText="Computer Win !";
       popup.style.display = "grid";
    }
       if(a==3||a==4){
       document.getElementById("useri").src="usersci.png";
       document.getElementById("comi").src="compaper.png";
       document.getElementById("para").innerText="You Win !";
       popup.style.display = "grid";
    }     if(a==5||a==6){
       document.getElementById("useri").src="usersci.png";
       document.getElementById("comi").src="comsci.png";
       document.getElementById("para").innerText="Game Tiee !";
       popup.style.display = "grid";
 
    }});