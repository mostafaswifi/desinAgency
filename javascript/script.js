//modify the burger menu
let dots = document.getElementById("dots");
dots.addEventListener("click", (e) => {
  dots.classList.toggle("fa-ellipsis-v");
});

// بعدين نطورها
// const square2 = document.getElementById('sec-header2');
// square2.classList.remove('square-transition');
// const observer2 = new IntersectionObserver(entries => {

//   entries.forEach(entry => {

//     if (entry.isIntersecting) {
//       entry.target.classList.add('square-transition');
//       return;
//     }
//     entry.target.classList.remove('square-transition');
//   });
// });
// observer2.observe(document.querySelector('.square-wrapper2'));

// section 1 observer
const square1 = document.getElementById("sec-header");
square1.classList.remove("square-transition");
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square1.classList.add("square-transition");
      return;
    }
    square1.classList.remove("square-transition");
  });
});
observer1.observe(document.querySelector(".square-wrapper"));

// section 2 observer
const square2 = document.getElementById("sec-header2");
square2.classList.remove("square-transition");
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square2.classList.add("square-transition");
      return;
    }
    square2.classList.remove("square-transition");
  });
});
observer2.observe(document.querySelector(".square-wrapper2"));

// section  observer3
const prog = document.querySelectorAll(".prog");
const square3 = document.getElementById("sec-header3");
square3.classList.remove("square-transition");
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square3.classList.add("square-transition");
      prog[0].classList.add("progress1");
      prog[1].classList.add("progress2");
      prog[2].classList.add("progress3");
      return;
    }
    square3.classList.remove("square-transition");
  });
});
observer3.observe(document.querySelector(".square-wrapper3"));

// section 4 observer
const square4 = document.getElementById("sec-header4"),
counter = document.querySelectorAll('.counter');
square4.classList.remove("square-transition");
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square4.classList.add("square-transition");
      setTimeout(()=>{ 
        let v = 0; 
        
         

          counter.forEach(count=>{ 
           
             
         
              
                setInterval(()=>{
                  v++;
                  if(v>520){
                    return; }
                    else{
                  
            count.innerHTML = v;    
                    }

                },100)
                
            
        
       } )},3000);
 
      return;
    }
    square4.classList.remove("square-transition");
  });
});
observer4.observe(document.querySelector(".square-wrapper4"));

// section 5 observer
const square5 = document.getElementById("sec-header5");
square5.classList.remove("square-transition");
const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square5.classList.add("square-transition");
      return;
    }
    square5.classList.remove("square-transition");
  });
});
observer5.observe(document.querySelector(".square-wrapper5"));

// section 7 observer
const square7 = document.getElementById("sec-header7");
square7.classList.remove("square-transition");
const observer7 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square7.classList.add("square-transition");
      return;
    }
    square7.classList.remove("square-transition");
  });
});
observer7.observe(document.querySelector(".square-wrapper7"));

// section 6 observer
const square6 = document.getElementById("sec-header6");
square6.classList.remove("square-transition");
const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square6.classList.add("square-transition");
      return;
    }
    square6.classList.remove("square-transition");
  });
});
observer6.observe(document.querySelector(".square-wrapper6"));

// section 8 observer
const square8 = document.getElementById("sec-header8");
square8.classList.remove("square-transition");
const observer8 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square8.classList.add("square-transition");
      return;
    }
    square8.classList.remove("square-transition");
  });
});
observer8.observe(document.querySelector(".square-wrapper8"));

// section 9 observer
const square9 = document.getElementById("sec-header9");
square9.classList.remove("square-transition");
const observer9 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square9.classList.add("square-transition");
      return;
    }
    square9.classList.remove("square-transition");
  });
});
observer9.observe(document.querySelector(".square-wrapper9"));

// section 10 observer
const square10 = document.getElementById("sec-header10");
square10.classList.remove("square-transition");
const observer10 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square10.classList.add("square-transition");
      return;
    }
    square10.classList.remove("square-transition");
  });
});
observer10.observe(document.querySelector(".square-wrapper10"));

// section 11 observer
const square11 = document.getElementById("sec-header11");
square11.classList.remove("square-transition");
const observer11 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square11.classList.add("square-transition");
      return;
    }
    square11.classList.remove("square-transition");
  });
});
observer11.observe(document.querySelector(".square-wrapper11"));

// section 12 observer
const square12 = document.getElementById("sec-header12");
square12.classList.remove("square-transition");
const observer12 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square12.classList.add("square-transition");
      return;
    }
    square12.classList.remove("square-transition");
  });
});
observer12.observe(document.querySelector(".square-wrapper12"));

// section 13 observer
const square13 = document.getElementById("sec-header13");
square13.classList.remove("square-transition");
const observer13 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square13.classList.add("square-transition");
      return;
    }
    square13.classList.remove("square-transition");
  });
});
observer13.observe(document.querySelector(".square-wrapper13"));
