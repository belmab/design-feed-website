let progress = document.querySelector('.progress');
let logo = document.querySelector('.brand');

let scrollBar = document.querySelector('.bar');
let documentHeight = document.body.scrollHeight;
let windowHeight = window.innerHeight;


let difference = documentHeight - windowHeight; 
// scroll Number
document.addEventListener('scroll', function() {
    const pixelsFromTop = window.scrollY;
    progress.innerText = pixelsFromTop + " pixels from top";

    if(pixelsFromTop > 60) {
        logo.classList.add('hidden'); 
    } else {
        logo.classList.remove('hidden');
    }

    let percentage =  100 * pixelsFromTop / difference;

    scrollBar.style.width = percentage + '%';
    console.log(scrollBar.style.width);
});


// // Change background color
function updateBG(e) {
    document.body.style.background = this.getAttribute("data");
  }
  window.onload = function(){
    var d = document.querySelectorAll("section[data]");
    if (d) {
      var i, max = d.length;
      for(i=0;i<max;i++) {
        d[i].addEventListener("mouseover",updateBG,false);
      }
    }
  }


// Change background color using Jquery
// $(document).scroll(function(event) {
//     if ($(this).scrollTop() >= ($('#section-1').position().top - 100)) {
//       $('body').css('background-color', '#118AB2');
//     }
//     if ($(this).scrollTop() >= ($('#section-2').position().top - 100)) {
//       $('body').css('background-color', '#06D6A0');
//     }
//     if ($(this).scrollTop() >= ($('#section-3').position().top - 100)) {
//       $('body').css('background-color', '#FFD166');
//     }
//     if ($(this).scrollTop() >= ($('#section-4').position().top - 100)) {
//       $('body').css('background-color', '#073B4C');
//     }
//   });
