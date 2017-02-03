$(document).ready(function(){

  $(window).on("scroll" , function(){

    if(this.scrollY > 0){
      $('#navbarId').removeClass('navbar');
      $('#navbarId').addClass('navbarInPositionFixed');
    }else{
      $('#navbarId').removeClass('navbarInPositionFixed');
      $('#navbarId').addClass('navbar');
    }

  });

  $(".navScroll").click(function() {




    var href = $(this).attr('href');
      $('html, body').animate({

            scrollTop: $(href).offset().top

        }, 1000);
  });

  $(window).scroll(function(){

    if(document.body.scrollTop >= 1441 ){

      $(".skillbar-bar").each(function(i,e){
        $(e).addClass($(this).data("class"));
      });
    }
    

  });

  $("#submit").click(function(e){
    e.preventDefault();

    $.ajax({

      url: "http://ibernal.fvi-grad.com:2998/info",
      method: "post",
      data: $('#contactMe').serialize(),
      success: function(){

        $('#contactMe')[0].reset();
      }
    });
  });



});
