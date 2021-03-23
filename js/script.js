let btn = document.getElementById("btn");
let ul_head = document.querySelectorAll(".ul_head");
let close_menu = document.querySelector("#close_menu");


btn.addEventListener("click", menuOpen);
close_menu.addEventListener("click", menuClose);

function menuClose() {
	for (let i = 0; i < ul_head.length; i++) {
		ul_head[i].classList.toggle("none");
		ul_head[i].classList.toggle("block");
	}
	btn.classList.toggle("none")
	close_menu.classList.toggle("none");
}

function menuOpen() {
	for (let i = 0; i < ul_head.length; i++) {
		ul_head[i].classList.toggle("none");
		ul_head[i].classList.toggle("block");
	}
	btn.classList.toggle("none");
	close_menu.classList.toggle("none");
}





$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

// $(document).ready(function(){
// 	$('#container_six').slick({
// 	 	infinite: true,
// 	  	slidesToShow: 3,
// 	  	slidesToScroll: 3,
	  	
// 	});
// });
