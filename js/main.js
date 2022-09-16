    
    $("header#top .inner ul.enb li.ham a").remove();
    $("ul.text").hide();
    $("ul.menu_sub").hide();  
    $("li.ham").hide();
    $("ul.gray").hide();  
    $("div.dots").hide();

    //처음 시작할 때 <1051
    winW=$(window).width();
        if(winW<1051){
            $("footer .inner .top ul.main li ul.sub").hide();
            $("footer .inner .top ul.main li h2 a span").hide();
            // $("footer .inner .top ul.main li ul.sub li a span").hide(); //왜 숨겼는지 이유 불명
            $("footer .inner .top ul.main li h2 a").append("<i></i>");
            $("footer .inner .top ul.main li h2 a.D i").attr("class","ion-chevron-down");
            $("footer .inner .top ul.main li h2 a.R i").attr("class","ion-chevron-right");
            $("footer .inner .top ul.main li h2 a.A i").attr("class","ion-android-arrow-up");
            
            $("footer .inner .top ul.main li h2 a").click(function(){                                            
                $(this).parent().siblings("ul.sub").toggle();
                $(this).parent().parent("li").toggleClass("border_B");
                $(this).parent().parent("div").toggleClass("border_B");
                if($(this).hasClass("D")){
                    $(this).children("i").toggleClass("ion-chevron-down");
                    $(this).children("i").toggleClass("ion-chevron-up");
                }
                return false;                                         
            }); 

            $("li.ham").appendTo("header#top .inner ul.enb").show();
            $("header#top .inner ul.enb li.lang").hide();       
            $("header#top .inner ul.enb li.dark").hide();  
            
        }

        
    //resize
    $(window).resize(function(){
        winW=$(window).width();
        $("#board").css("width",winW);
        if(winW<1051){
            //console.log(winW);
            $("footer .inner .top ul.main li h2 i").remove();
            $("footer .inner .top ul.main li h2 a").off("click");
            $("footer .inner .top ul.main li h2 a").parent().parent("li").removeClass("border_B");
            $("footer .inner .top ul.main li h2 a").parent().parent("div").removeClass("border_B");
            $("header#top .inner ul.enb li.ham").hide();
            $("#top ul.menu li ul.menu_sub").hide()

            $("footer .inner .top ul.main li ul.sub").hide();
            $("footer .inner .top ul.main li h2 a span").hide();
            $("footer .inner .top ul.main li h2 a").append("<i></i>");
            $("footer .inner .top ul.main li h2 a.D i").attr("class","ion-chevron-down");
            $("footer .inner .top ul.main li h2 a.R i").attr("class","ion-chevron-right");
            $("footer .inner .top ul.main li h2 a.A i").attr("class","ion-android-arrow-up");
            
            $("footer .inner .top ul.main li h2 a").on("click");
            $("footer .inner .top ul.main li h2 a").click(function(){        
                $(this).parent().siblings("ul.sub").toggle();
                $(this).parent().parent("li").toggleClass("border_B");
                $(this).parent().parent("div").toggleClass("border_B");
                if($(this).hasClass("D")){
                    $(this).children("i").toggleClass("ion-chevron-down");
                    $(this).children("i").toggleClass("ion-chevron-up");
                }
                return false;                                         
            }); 

            
            $("li.ham").appendTo("header#top .inner ul.enb").show();                    
            $("header#top .inner ul.enb li.lang").hide();       
            $("header#top .inner ul.enb li.dark").hide();
            $("#board .boardinner #top .inner ul li.ham").hide();  
            
            if(search == 1){
                $("div.search").css({opacity:0});

                $("div.search").removeClass("move_search");                
                $("#title").css("opacity","1");
                $("main").css("opacity","1");

                $("header#top .inner ul.enb li.search").removeClass("X");
                $("header#top .inner ul.enb li.ham").show();

                search = 0;
            }

        }       

        else if ($("#board .boardinner #top .inner ul li").hasClass("X")) {
            
            $("#board").css("position","fixed");
            $("#board").toggleClass("slideR")
            $("#title,main,footer").show();
            $("#board .boardinner ul.menu > li > a").off("click");
            $("#board .boardinner ul.menu > li:not(:nth-of-type(2)) i").hide();

            
            $("header#top").prependTo("body");
            $("li.X a").parent().removeClass("X").addClass("ham");
            $("li.search").show();

            if(winW>1051){

            $("header#top .inner ul.enb li.ham").hide();
            $("header#top .inner ul.enb li.lang").show();       
            $("header#top .inner ul.enb li.dark").show();

            $("footer .inner .top ul.main li ul.sub").show();
            $("footer .inner .top ul.main li h2 a span").show();
            $("footer .inner .top ul.main li h2 a i").remove();
            $("footer .inner .top ul.main li h2 a").off("click");
            $("header#top .inner ul.enb li.ham").hide();
            $("body>header#top .inner ul.enb li.lang").show();       
            $("body>header#top .inner ul.enb li.dark").show();

            }                        
                                    
            $("#board").remove();
            $("ul.menu li>a>i").remove();

            $("#top ul.menu li a").click(function(){                
                $(this).siblings("ul.menu_sub").toggle();
                $("ul.menu li a").not(this).siblings("ul.menu_sub").hide();
                return false;
            })     
            
            
            
            n=0;                    
        }

        else{

            $("footer .inner .top ul.main li ul.sub").show();
            $("footer .inner .top ul.main li h2 a span").show();
            $("footer .inner .top ul.main li h2 a i").remove();
            $("footer .inner .top ul.main li h2 a").off("click");
            $("header#top .inner ul.enb li.ham").hide();
            $("body>header#top .inner ul.enb li.lang").show();       
            $("body>header#top .inner ul.enb li.dark").show();       
            
            if(search == 1){
                $("div.search").css({opacity:0});

                $("ul.menu").show();
                $("div.search").removeClass("move_search");                
                $("#title").css("opacity","1");
                $("main").css("opacity","1");

                $("header#top .inner ul.enb li.search").removeClass("X");
                $("header#top .inner ul.enb li.lang").show();
                $("header#top .inner ul.enb li.dark").show();

                search = 0;
            }

        }                
    });


    //ham button
    let n=0;            
    $("li.ham a").click(function(){
    
        if(n==0){
            $("#title,main,footer").hide();
            $("body").prepend("<div id='board'></div>");
            $("#board").prepend("<div class='boardinner'></div>");
            $("header#top").appendTo(".boardinner");                
            $(this).parent().removeClass("ham");
            $(this).parent().addClass("X");
            $("li.search").hide();
            $("header#top .inner ul.menu").clone().appendTo(".boardinner");
            $(".boardinner").append("<div class='footer'><ul class='icon'></ul></div>");
            $("ul.text").clone().prependTo(".boardinner .footer").show();
            $("li.dark").clone().appendTo("ul.icon").show();
            $("li.lang").clone().appendTo("ul.icon").show();
            $("#board").css("width",winW);
            $("#board").css("position","fixed");
            $("#board").toggleClass("slideR");
            $("#board .boardinner ul.menu>li:not(:nth-of-type(2))>a").append("<i class='ion-arrow-down-b'></i>");

            
            $("#board ul.menu li a").click(function(){
                $("#board").css("position","initial");
                $(this).siblings("ul.menu_sub").toggle();
                $(this).children("i").toggleClass("ion-arrow-down-b");                        
                $(this).children("i").toggleClass("ion-arrow-up-b");                        
                return false;
            })
            
            //gray
            $("#board ul.gray").siblings("a").click(function(){
                $(this).siblings("svg").toggleClass("svg_rotate");
                $(this).siblings("ul.gray").toggle();
                return false;
            })
            n=1;
        }

        else{
            if($(this).parent().hasClass("X")){

                $("#board").css("position","fixed");
                $("#board").toggleClass("slideR")
                $("#title,main,footer").show();
                $("#board .boardinner ul.menu > li > a").off("click");
                $("#board .boardinner ul.menu > li:not(:nth-of-type(2)) i").hide();

                setTimeout(function(){
                    $("header#top").prependTo("body");
                    $("li.X a").parent().removeClass("X").addClass("ham");
                    $("li.search").show();

                    if(winW>1051){
                    $("header#top .inner ul.enb li.ham").hide();
                    $("header#top .inner ul.enb li.lang").show();       
                    $("header#top .inner ul.enb li.dark").show();
                    }                            
                },50);

                setTimeout(function(){                            
                    $("#board").remove();
                    $("ul.menu li>a>i").remove();

                    $("#top ul.menu li a").click(function(){                
                        $(this).siblings("ul.menu_sub").toggle();
                        $("ul.menu li a").not(this).siblings("ul.menu_sub").hide();
                        return false;
                    })
                },500);                   
            
                n=0;
            }
        }
        
        return false;

    });
    
    //gray
    $("ul.bottom li a").click(function(){
        $(this).toggleClass("color_333");
        $("ul.bottom li a").not(this).removeClass("color_333");
        $(this).children("svg").toggleClass("color_333");
        $("ul.bottom li a").not(this).children("svg").removeClass("color_333");
        $(this).children("svg").toggleClass("svg_rotate");
        $(this).siblings("ul.gray").toggle();
        $("ul.bottom li a").not(this).siblings("ul.gray").hide();
        $("ul.bottom li a").not(this).children("svg").removeClass("svg_rotate");
        return false;
    })

    // timenow
    let now = new Date(); //전체
    let year=now.getFullYear();//연도
    let month=now.getMonth()+1;//월
    let date=now.getDate();//일
    let day=now.getDay();//요일
    let weekKR = new Array('일','월','화','수','목','금','토');
    let dayKR = weekKR[day];
    let hr=now.getHours();//시간
    let ampm = hr >= 12 ? 'PM' : 'AM';
    let min=now.getMinutes();//분
    let sec=now.getSeconds();//초

    $("p.timenow").text(year+"."+month+"."+date+" "+hr+":"+min+""+ampm);
    $("h2.date").text(month+"월 "+date+"일 "+dayKR+"요일 소식입니다");


    //top menu click
    $("#top ul.menu li a").click(function(){                
        $(this).siblings("ul.menu_sub").toggle();
        $("ul.menu li a").not(this).siblings("ul.menu_sub").hide();
        return false;
    })
    
    //scroll
    
    $(window).on('mousewheel DOMMouseScroll scroll', function(event){
        // 휠 방향 감지(아래: -120, 위: 120)
        let w_delta = event.originalEvent.wheelDelta/30 ; //크롬용
        //alert(w_delta);
        let w_deltaF = -event.originalEvent.detail*1.5 ; //파이어폭스용
        //alert(w_deltaF);

        if($(window).scrollTop()<30){
            $("body>header").css("position","relative");
            $("body>header").removeClass("header_white");
        }
        if($(window).scrollTop()>30 && $(window).scrollTop()<300){
            $("body>header").css("position","fixed");
            $("body>header").addClass("header_white");
        }
        if($(window).scrollTop()>300){
            if(w_deltaF<0){//아래로
                $("body>header").css("top","-20%");
            }
            if(w_delta<0){//아래로
                $("body>header").css("top","-20%");
            }  

        }         
        if(w_deltaF>0){ //위로
            if($(window).scrollTop()>30){
                $("body>header").css("top","0%");
                $("body>header").addClass("header_white");
            }                    
        }
        if(w_delta>0){ //위로
            if($(window).scrollTop()>30){
                $("body>header").css("top","0%");
                $("body>header").addClass("header_white");
            }                    
        }
    });       
    
    //dot click
    $("div.dots").clone().appendTo("article").hide();
    
    $("a.dots").click(function(){
        $("a.dots").not(this).parent().children("div.dots").children("ul.dots").slideUp();
        $(this).siblings("div.dots").fadeToggle(300);

        setTimeout(() => {
            $(this).siblings("div.dots").children("ul.dots").slideDown(300); 
        }, 100);                
        $(this).hide();
        $("a.dots").not(this).show();        
        $("a.dots").not(this).parent().children("div.dots").fadeOut(500);      
        return false;                

    });            

    $("li.dots_close a").click(function(){
        setTimeout(() => {
            $(this).parent().parent().parent("div.dots").fadeOut(200);
        }, 200);  
        $("ul.dots").slideUp(300); 
        $("a.dots").show();                
        return false;                
    });

    // search
    $("div.search").clone().insertAfter("#top");
    
    let search = 0
    $("header#top .inner ul.enb li.search a").click(function(){
        if (winW<1051){
            if(search == 0){
                $("div.search").addClass("move_search");                
                $("#title").css("opacity","0.1");
                $("main").css("opacity","0.1");

                setTimeout(() => {
                    $("div.search").animate({opacity:1},100);
                }, 500);

                $("header#top .inner ul.enb li.search").addClass("X");
                $("header#top .inner ul.enb li.ham").hide();

                $("ul.menu_sub").hide();

                search = 1;
            } else{
                $("div.search").animate({opacity:0},10);

                setTimeout(() => {
                    $("div.search").removeClass("move_search");                
                    $("#title").css("opacity","1");
                    $("main").css("opacity","1");
                }, 500);

                $("header#top .inner ul.enb li.search").removeClass("X");
                $("header#top .inner ul.enb li.ham").show();

                search = 0;
            }
        }
        else{
            if(search == 0){
            $("ul.menu").hide();
            $("div.search").addClass("move_search");                
            $("#title").css("opacity","0.1");
            $("main").css("opacity","0.1");

            setTimeout(() => {
                $("div.search").animate({opacity:1},100);
            }, 500);

            $("header#top .inner ul.enb li.search").addClass("X");
            $("header#top .inner ul.enb li.lang").hide();
            $("header#top .inner ul.enb li.dark").hide();

            $("ul.menu_sub").hide();

            search = 1;                    
            } else {
            $("div.search").animate({opacity:0},10);

            setTimeout(() => {
                $("ul.menu").show();
                $("div.search").removeClass("move_search");                
                $("#title").css("opacity","1");
                $("main").css("opacity","1");
            }, 500);

            $("header#top .inner ul.enb li.search").removeClass("X");
            $("header#top .inner ul.enb li.lang").show();
            $("header#top .inner ul.enb li.dark").show();

            search = 0;
            }
        }               
    });
