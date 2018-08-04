//check off specific todos by clicking

//we can only add listener to the elements when the webpage is loaded,
//so we add listener to ul, but this function will only run when li
//is clicked inside the ul.
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		color:"black",
	// 		textDecoration:"none"
	// 	});
	// }else{
	// 	$(this).css({
	// 		color:"gray",
	// 		textDecoration:"line-through"
	// 	});
	// }
});

//click on X to delete Todos
$("ul").on("click","span",function(event){
// $("span").click(function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
//add new todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})