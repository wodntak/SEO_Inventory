//Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('addItem');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click',openModal);
//Listen for close click
closeBtn.addEventListener('click',closeModal);
//Listen for click outside the form
window.addEventListener('click', outsideClick);

// //navigation bar scroll with resizing
// function myFunction() {
//     var x = document.getElementById("mytopNaviBar");
//      if (x.className === "topNaviBar") {
//          x.className += " responsive";
//     }
//      else {
//         x.className = "topNaviBar";
//         }
//      }

//fuction to open modal
function openModal(){
     modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function outsideClick(e){
if(e.target == modal){
    modal.style.display ='none';
}
}
