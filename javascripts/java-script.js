
// наклейки драгбл
$(document).ready(function(){

	$( function() {
		$( ".na1" ).draggable();
	});
	$(function() {
		$(".na2").draggable();
	});
	$(function() {
		$(".na3").draggable();
	});
	$(function() {
		$(".na4").draggable();
	});
	$(function() {
		$(".na5").draggable();
	});
	$(function() {
		$(".na6").draggable();
	});
	$(function() {
		$(".na7").draggable();
    });

// наклейки крутить

	let rot1 = 0;
	$(".na1").click(function() {
			rot1 += 45;
			$(this).css("transform", `rotate(${rot1}deg)`)
	});
	let rot2 = 0;
	$(".na2").click(function() {
			rot2 += 45;
			$(this).css("transform", `rotate(${rot2}deg)`)
	});
	let rot3 = 0;
	$(".na3").click(function() {
			rot3 += 45;
			$(this).css("transform", `rotate(${rot3}deg)`)
	});
	let rot4 = 0;
	$(".na4").click(function() {
			rot4 += 45;
			$(this).css("transform", `rotate(${rot4}deg)`)
	});
	let rot5 = 0;
	$(".na5").click(function() {
			rot5 += 45;
			$(this).css("transform", `rotate(${rot5}deg)`)
	});
	let rot6 = 0;
	$(".na6").click(function() {
			rot6 += 45;
			$(this).css("transform", `rotate(${rot6}deg)`)
	});
	let rot7 = 0;
	$(".na7").click(function() {
			rot7 += 45;
			$(this).css("transform", `rotate(${rot7}deg)`)
	});

// крутить зонт в конце

$(".umb9img").click(function() {
	rot7 += 15;
	$(this).css("transform", `rotate(${rot7}deg)`)
});


$(".umb10img").click(function() {
	rot7 += 15;
	$(this).css("transform", `rotate(${rot7}deg)`)
});


$(".umb11img").click(function() {
	rot7 += 15;
	$(this).css("transform", `rotate(${rot7}deg)`)
});
});


// пропажа дождя

$(function () {
	$('.rain').click(function () {
	$(this).css('display', 'none')
	})
  setTimeout (function () {
	$('.rain').css('display', 'block')
	}, 1500)
  })

// пропажа облаков
$(document).ready(function () {
    $("#cloud1").click(function () {
        $(this).hide();
    });
	$("#cloud2").click(function () {
        $(this).hide();
    });
	$("#cloud3").click(function () {
        $(this).hide();
    });
	$("#cloud4").click(function () {
        $(this).hide();
    });
	$("#cloud5").click(function () {
        $(this).hide();
    });
	$("#cloud6").click(function () {
        $(this).hide();
    });
	$("#cloud7").click(function () {
        $(this).hide();
    });
	$("#cloud8").click(function () {
        $(this).hide();
    });
	$("#cloud9").click(function () {
        $(this).hide();
    });
	$("#cloud10").click(function () {
        $(this).hide();
    });

});
// вращение прямоугольников


  $(function () {
    let rot = -1;
    $('.six').click(function () {
      rot += 15;
      $(this).css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });
  });
 
    var images = document.getElementsByTagName("img");
   for (var i=0;i<images.length;i++) {
        images[i].onmouseover = imgScale;
        images[i].onclick = imgScale;
   }
  
   $(function () {
    let rot = -1;
    $('.umb3').click(function () {
      rot += 15;
      $(this).css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });


	// кружки меняют цвет
  });
  function elColor() {
		document.getElementById("color1").style.backgroundColor = '#D4FF73';
	  }
	  function elColor1() {
		document.getElementById("color2").style.backgroundColor = '#D4FF73';
	  }
	  function elColor2() {
		document.getElementById("color3").style.backgroundColor = '#D4FF73';
	  }
	  function elColor3() {
		document.getElementById("color4").style.backgroundColor = '#D4FF73';
	  }
	  function elColor4() {
		document.getElementById("color5").style.backgroundColor = '#D4FF73';
	  }
	  function elColor5() {
		document.getElementById("color6").style.backgroundColor = '#FF003D';
	  }
	  function elColor6() {
		document.getElementById("color7").style.backgroundColor = '#FF003D';
	  }
	  function elColor7() {
		document.getElementById("color8").style.backgroundColor = '#FF003D';
	  }
	  function elColor8() {
		document.getElementById("color9").style.backgroundColor = '#FF003D';
	  }

