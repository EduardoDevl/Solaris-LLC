$(document).ready(function () {
	
	//variaveis locais

	var _containerBtn = $(".jbtn-voltar");

	//Mostra o botão voltar ao topo
	$(window).scroll(function() {
		if($(this).scrollTop() > 300) {	

			_containerBtn.fadeIn(0);

		}else {

			_containerBtn.fadeOut(0);

		}
	});

	//Clique e volte ao topo
	_containerBtn.click(function() {
			
		$("html, body").animate({scrollTop: 0}, 800);

		return false;
	});

});

var makeUnselectable = function( $target ) {
	$target
	.addClass( 'unselectable' ) // All these attributes are inheritable
	.attr( 'unselectable', 'on' ) // For IE9 - This property is not inherited, needs to be placed onto everything
	.attr( 'draggable', 'false' ) // For moz and webkit, although Firefox 16 ignores this when -moz-user-select: none; is set, it's like these properties are mutually exclusive, seems to be a bug.
	.on( 'dragstart', function() { return false; } );  // Needed since Firefox 16 seems to ingore the 'draggable' attribute we just applied above when '-moz-user-select: none' is applied to the CSS 

	$target // Apply non-inheritable properties to the child elements
	.find( '*' )
	.attr( 'draggable', 'false' )
	.attr( 'unselectable', 'on' ); 
};

document.onkeydown = function(e) {
  if(e.keyCode === 13) { // The Enter/Return key
    document.activeElement.click();
  }
};

$('button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
});

$(window).on('load', function() {
	document.getElementById("carregando").style.display = "none";
	document.getElementById("corpo").style.display = "block";
})

