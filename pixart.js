
$("#set-color").on('click', function(event){
	event.preventDefault();
	var $inputVal = $("#color-field").val();
	$(".brush").css("background", $inputVal)
})

