$(document).ready(
    // function(){
    //     alert("This page want to access your ip")
    // }
    function(){
        $('.about_section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            },{
                offset: '100px'
            }
        )

        // Scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 750);
            event.preventDefault();
        });
    }        

       
)