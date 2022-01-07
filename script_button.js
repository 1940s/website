var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
/*modify*/
/*scroll*/
  var scrolled = $(this).scrollTop();
  var interval = 0;
    
    $('.subp2_1').children().each(function () 
    {
        var startToShow = $(this).offset().top + $(this).outerHeight()/3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow)
        {
            $(this).addClass('reveal');
        }
    });
    $('.subp5').children().each(function () 
    {
        var startToShow = $(this).offset().top + $(this).outerHeight()/3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow)
        {
            $(this).addClass('reveal');
        }
    });
    $('.textp3').children().each(function () 
    {
        var startToShow = $(this).offset().top + $(this).outerHeight()/3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow)
        {
            $(this).addClass('reveal');
        }
    });
    
    $('.page7_person').children().each(function () 
    {
        var startToShow = $(this).offset().top + $(this).outerHeight()/3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow)
        {
            $(this).addClass('reveal');
        }
    });
    $('.page7_question').children().each(function () 
    {
        var startToShow = $(this).offset().top + $(this).outerHeight()/3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow)
        {
            $(this).addClass('reveal');
        }
    });
    $('.page8_question').children().each(function () 
    {
        var startToShow = $(this).offset().top + $(this).outerHeight()/3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow)
        {
            $(this).addClass('reveal');
        }
    });
    $('.page9_person').children().each(function () 
    {
        var startToShow = $(this).offset().top + $(this).outerHeight()/3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow)
        {
            $(this).addClass('reveal');
        }
    });
    $('.page9_question').children().each(function () 
    {
        var startToShow = $(this).offset().top + $(this).outerHeight()/3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow)
        {
            $(this).addClass('reveal');
        }
    });
    $('.page10_person').children().each(function () 
    {
        var startToShow = $(this).offset().top + $(this).outerHeight()/3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow)
        {
            $(this).addClass('reveal');
        }
    });
    $('.page10_question').children().each(function () 
    {
        var startToShow = $(this).offset().top + $(this).outerHeight()/3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow)
        {
            $(this).addClass('reveal');
        }
    });

    var scrollVal = $(this).scrollTop();
    $("span.qScrollTop").text(scrollVal);
    var $sc = $(this).scrollTop();
    if(scrollVal >3250&&scrollVal<4000){  
    $(".page6_radition").css({
      "transform" : "rotate("+ $sc/10 +"deg)"
    });
    }
/*modify*/
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


/*modify*/
$(window).load(function () 
{
    $('.sub-section').first().addClass('reveal');
});
/*modify*/