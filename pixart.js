
$("#set-color").on('click', function(event){
	event.preventDefault();
	var $inputVal = $("#color-field").val();
	$(".brush").css("background", $inputVal)
})

$(".input").keypress(function(){
   var $inputVal = $("#color-field").val();
	$(".brush").css("background", $inputVal)
});
