//Strike off specific todos by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("done")
});   //Call back fires when we click on a li inside a ul which will also fire for all future lis. - on() method advantage

//Click on X to delete todo
$("ul").on("click","span",function(event){ //call back fires for when we click on a span inside a ul which will fire for all future spans.

    $(this).parent().fadeOut(500,function(){
        $(this).remove();     //span is inside the parent element which is an li so li gets removed with it.
    });                                
    event.stopPropogation(); //To Stop bubbling of parent elements - Here span> li> ul> div container> body.
});

//To Add a new Todo

$("input[type='text']").keypress(function(event){
    if(event.which===13){ //13 is keycode for Enter

        //Grabbing new todo text from input
        var todoText= $(this).val();
        $(this).val(""); // to set the input blank again after hitting enter
        
        //Create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>") // to append an li to the ul
    } 
});

$(".fa-plus").on("click",function(){
    $("input[type='text']").fadeToggle(200);
});