

// шахматы
$(document).ready(function() {
  let isImage2 = false;

  $(document.getElementById("chess")).click(function(){
      $('.cheas1img').each(function(){
          if (isImage2) {
              $(this).attr('src', 'img/chess1.svg');
          } else {
              $(this).attr('src', 'img/chess3.svg');
          }
      });
      isImage2 = !isImage2;
  });
});

// трио меняется
$(document).ready(function() {
  let isImage2 = false;

  $(document.getElementById("trio")).click(function(){
      $('.trioimg').each(function(){
          if (isImage2) {
              $(this).attr('src', 'img/trio1.svg');
          } else {
              $(this).attr('src', 'img/trio2.svg');
          }
      });
      isImage2 = !isImage2;
  });
});

// первые три зонта меняются

document.addEventListener("DOMContentLoaded", function() {
  let clickCount = 0;

  document.getElementById("image").addEventListener("click", function() {
  clickCount++;
  
  if (clickCount === 1) {
    this.src = "./img/change1.png"; 
  } else if (clickCount === 2) {
    this.src = "./img/change2.png"; 
  } else if (clickCount === 3) {
    this.src = "./img/change3.png";
    clickCount = 0; 
  }
  });
});

// формы зонтов меняются

document.addEventListener("DOMContentLoaded", function() {
  let clickCount = 0;

  document.getElementById("form1").addEventListener("click", function() {
  clickCount++;
  
  if (clickCount === 1) {
    this.src = "./img/newform1.png"; 
  } else if (clickCount === 2) {
    this.src = "./img/newform2.png"; 
  } else if (clickCount === 3) {
    this.src = "./img/newform3.png";
    clickCount = 0; 
  }
  });
});