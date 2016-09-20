$(document).ready(function(){
    $("#your-fb.fb-comments").attr('data-href', URL); //set truoc
    initFacebook();
    init();
    setColor();
    setAnimation();
    // initTwitter();
    initGoogleAnalytic();
    
});


//-----------------------------------------------------------------
function setColor(){
    $("body").addClass(COLOR + " lighten-5");
    $(".main-color-text").addClass(COLOR + "-text text-darken-4");
    $(".main-color").addClass(COLOR + " darken-4");

    $(".progress, .indeterminate").addClass(COLOR + " lignten-1");
    $("nav#nav").addClass(COLOR + " darken-2 center-align");
    $("li#avatar").addClass(COLOR + " darken-4 white-text center-align");
    $("ul#dropdown-1").addClass(COLOR + " darken-3");
    $("div#report").addClass(COLOR + " darken-4 white-text z-depth-1");
    $(".prefix").addClass(COLOR + "-text darken-4");
    $("ul.dropdown-content li a").addClass(COLOR + "-text");

    $('.materialboxed').materialbox();
    
    $('img').attr("alt", KEYWORDS);
    $('img').attr("title", KEYWORDS);
}

function setAnimation(){
    animationHover(".call-to-action","tada");
}

function init(){
    $(".dropdown-button").dropdown();
    $('.parallax').parallax();
    $('.slider1').bxSlider({
        captions: true, 
        slideWidth: 210,
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 10
    });
    $('ul.tabs').tabs();
}

function checkLicense(){

}

function fbComment() {
    //- console.log('Found FB: Loading comments.');
    // var url = $("#club").val();
    $("#your-fb.fb-comments").attr('data-href', URL);
    FB.XFBML.parse();
}

//-----------------------------------------------------------------
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//-- animate.css
function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}

function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
  
        });
}

function animation(element, animation){
    element.addClass('animated ' + animation);        
    //wait for animation to finish before removing classes
    window.setTimeout( function(){
        element.removeClass('animated ' + animation);
    }, 2000);         

}

//- Google Analytics
function initGoogleAnalytic(){

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-82197343-1', 'auto');
    ga('send', 'pageview');

}

function initFacebook(){
    window.fbAsyncInit = function() {
        FB.init({
          appId      : FB_APP_ID,
          xfbml      : true,
          version    : 'v2.7'
        });

        // *** here is my code ***
        if (typeof fbComment == 'function') {
            fbComment();
        }
    };    

    

    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     // js.src = "https://connect.facebook.net/en_VN/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}


function initTwitter(){
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
}


