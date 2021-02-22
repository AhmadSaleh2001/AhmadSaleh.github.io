$(document).ready
(
    function()
    {
        new WOW().init();
        var MyType = new Typed
        (
            ".MyType"
            ,
            {
                strings : ["HELLO ! I AM "],
                typeSpeed : 50,
                backSpeed : 50,
                loop:true,
                
            }
        );
        
        $(".NavLinks > li , .NavLinks2 li").on
        (
            "click"
            ,
            function()
            {
                $("html , body").animate
                (
                    {
                        scrollTop : $("." + $(this).attr("id")).offset().top
                    }
                    ,
                    800
                );
            }
        );
        
        $(".Logo").on
        (
            "click"
            ,
            function()
            {
                $("html , body").animate
                (
                    {
                        scrollTop : 0
                    }
                );
            }
        );
        
        $(".ShowLinks").on
        (
            "click"
            ,
            function()
            {
                $(".NavLinks2").toggleClass("NavLinkActive");
                
                var Time = 200;
                $(".NavLinks2 > ul > li").each
                (
                    function()
                    {
                        var Now = $(this);
                        setTimeout
                        (
                            function()
                            {
                                Now.toggleClass("NavLinkActive");
                            }
                            ,
                            Time+=200
                        );
                    }
                );
                
                
            }
        );
        
    }

);