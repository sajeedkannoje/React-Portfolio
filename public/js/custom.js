$(document).ready(function () {
    $("#mail-form").submit(function (e) {
      let btn = $("button[name='submit']");
      let btnHtml = btn.html();
      let form = $(this);
      $.ajax({
        url: "/mail.php",
        method: 'POST',
        data: {
          first_name: $("input[name='first_name']").val(),
          last_name: $("input[name='last_name']").val(),
          email: $("input[name='email']").val(),
          phone: $("input[name='phone']").val(),
          message: $("textarea[name='message']").val(),
        },
        beforeSend: function () {
          btn.html("Loading...");
          btn.attr('disabled', 'disabled');
          $("#mail-sent").css('display', 'none');
          $("#mail-failed").css('display', 'none');
        },
        success: function (data) {
          btn.removeAttr('disabled');
          btn.html(btnHtml);

          if (data.success) {
            $("#mail-sent").css('display', 'block');
            form.find('input,textarea').val("");
          } else {
            $("#mail-failed").css('display', 'block');
          }
        },
        error: function () {
          btn.removeAttr('disabled');
          btn.html(btnHtml);
          $("#mail-failed").css('display', 'block');

        },
        complete: function () {
          btn.removeAttr('disabled');
          btn.html(btnHtml);

        }

      })
      e.preventDefault();
    });
  });



  $("body").prepend('<div id="preloader">Loading...</div>');
  $(document).ready(function () {
    $("#preloader").remove();
  });




  $(".mob-portfolio-item a").click(function () {
    var imgsvf = $(this).children().attr('src');
    $(".modal-body img").attr('src', imgsvf);
  });




  $('.loop').owlCarousel({
    center: true,
    items: 1,
    nav: true,
    loop: true,
    margin: 0,
    responsive: {
      300: {
        items: 2
      }
    }
  });

  $(".toggle-btn, .sidebar-menu .menu-links li a").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("show");
    $(".sidebar-menu").toggleClass("show");
  });

  $(".sidebar-menu .menu-links li a").click(function () {
    $(".toggle-btn").removeClass("show");
  });

  $(".contact-btn").click(function () {
    $(".sidebar-menu").removeClass("show");
  });




  $(document).ready(function () {
    if ($(window).width() < 992) {
      $(".nav-block ").click(function () {
        $('.blog-sec .nav-tabs').slideToggle("500");
      });
    }
  });




  function disablebtn() {
    $("#downClick").attr('disabled', 'disabled');
    $("#upClick").attr('disabled', 'disabled');
  }

  function enablebtn() {
    $("#downClick").removeAttr('disabled');
    $("#upClick").removeAttr('disabled');
  }
  var scrolled = 0;
  //let imgHeight = 0;
  $(document).ready(function () {
    $("#downClick").on("click", function () {
      disablebtn();

      //let imgHeight = $(".portfolio-img img").innerHeight() - 800;
      let imgHeight = $(".portfolio-tabs .tab-pane.active .portfolio-img img").innerHeight() - 800;
      console.log('img height: ' + imgHeight);

      if (scrolled >= imgHeight) {
        //scrolled = imgHeight;
      } else {
        scrolled += 400;
      }
      console.log('updated scrolled ' + scrolled);

      $(".portfolio-img").animate({
        scrollTop: scrolled
      }, 'fast', 'swing', enablebtn);
    });

    $(".portfolio-tabs .nav-link").on("click", function () {
      scrolled = 0;
    });

    $("#upClick").on("click", function () {
      disablebtn();
      let imgHeight = $(".portfolio-img img").innerHeight();

      console.log('Scrolled' + scrolled);
      if (scrolled <= 0) {
        scrolled = 0;
      } else {
        scrolled -= 400;
      }
      console.log('updated scrolled ' + scrolled);
      $(".portfolio-img").animate({
        scrollTop: scrolled
      }, 'fast', 'swing', enablebtn);

    });
  });

  $('.button').click(function () {
    var idToSRC = 'http://placehold.it/60x60/84a&text=' + this.id + '';
    $('#picture').attr('src', idToSRC);
  });