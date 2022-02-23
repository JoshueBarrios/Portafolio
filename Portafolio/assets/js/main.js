console.log("funciona main.js");
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

/*cambia saludo al hacer hover*/
$(document).ready(function(){
/*nav - cambio de opacidad*/
	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if(scroll > 200){
			$("#estiloNav").css({"background-color": "#f7f7f7"});
		}else{
			$("#estiloNav").css({"background-color": "transparent",
				"border-color":"transparent"});
		}
	});
	/*HOME*/	
	/*welcome*/
	$('#welcome').hover(
	    function() {
	        var $this = $(this);
	        $this.data('Bienvenidos', $this.text());
	        $this.text("Welcome");
	    },
	    function() {
	        var $this = $(this);
	        $this.text($this.data('Bienvenidos'));
	    }
	);
	/*iAm*/
	$('#iAm').hover(
	    function() {
	        var $this = $(this);
	        $this.data('Soy Joshue', $this.text());
	        $this.text("I am Kaliman");
	    },
	    function() {
	        var $this = $(this);
	        $this.text($this.data('Soy Joshue'));
	    }
	);
	/*Diseño*/
	$('#designer').hover(
	    function() {
	        var $this = $(this);
	        $this.data('Diseñador y', $this.text());
	        $this.text("Designer &");
	    },
	    function() {
	        var $this = $(this);
	        $this.text($this.data('Diseñador y'));
	    }
	);
	/*web dev*/
	$('#webDev').hover(
	    function() {
	        var $this = $(this);
	        $this.data('Desarrollador front-end', $this.text());
	        $this.text("Front-end developer");
	    },
	    function() {
	        var $this = $(this);
	        $this.text($this.data('Desarrollador front-end'));
	    }
	);
	/*Animals*/
	$('#lovesurf').hover(
	    function() {
	        var $this = $(this);
	        $this.data('Amante del surf', $this.text());
	        $this.text("I love surf");
	    },
	    function() {
	        var $this = $(this);
	        $this.text($this.data('Amante del surf'));
	    }
	);
		/*movies*/
	$('#lovesurf').hover(
	    function() {
	        var $this = $(this);
	        $this.data('Los videojuegos', $this.text());
	        $this.text("Surfing and video games");
	    },
	    function() {
	        var $this = $(this);
	        $this.text($this.data('Los videojuegos y el surfing'));
	    }
	);
	//en caso de que la persona utilice landscape deberá aparecer un mensaje indicando que solo debe usarse portrait
/*if(window.innerHeight > window.innerWidth){
    alert("Please use Landscape!");
}*/
});