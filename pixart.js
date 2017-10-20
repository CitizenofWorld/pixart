
$("#set-color").on('click', function(event){
	event.preventDefault();
	var $inputVal = $("#color-field").val();
	$(".brush").css("background", $inputVal)
})

$(".input").keypress(function(){
   var $inputVal = $("#color-field").val();
	$(".brush").css("background", $inputVal)
});

for (var i=0; i<=1000; i++){
	$('.thousand-boxes').append("<div>")
	$('div').addClass("square")
}

// $("body").click(function(event){
// 		var $inputVal = $("#color-field").val();
//     $(event.target).css("background", $inputVal)
// });

$("body").mouseover(function(){
		var $inputVal = $("#color-field").val();
    $(event.target).css("background", $inputVal)
})