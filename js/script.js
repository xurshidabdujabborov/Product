window.addEventListener("load" , function(e){
    $("header .activeBars").click(function () {
        $("header .activeMenuBars").slideToggle(1000);
      });
    //   login
      $("header .eyes").click(function () {
        var attr = $("header .pass input").attr("type");
        if (attr == "password") {
          $("header .pass input").attr("type", "text");
        } else {
          $("header .pass input").attr("type", "password");
        }
      });
      $(".headerLogin button").click(function (e) {
        e.preventDefault();
        if ($(".headerLogin input").val() === "") {
          $(".errorMsg").show();
        } else {
          $(".errorMsg").hide();
        }
      });
    
      /// header navbar signin close
    
      $(".headerLogin .close").click(function () {
        $(".headerLogin").fadeOut(500);
      });
    
      $("header .signUp").click(function () {
        $(".headerLogin").fadeIn();
        $(".headerLogin").css("display", "flex");
      });

      // headerTitle
      $(".About .close").click(function () {
        $(".About").fadeOut(500);
      });
    
      $("header .cul").click(function () {
        $(".About").fadeIn();
        $(".About").css("display", "flex");
      });
    // owel
    $(".center .owl-carousel").owlCarousel({
      items: 3,
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1000,
      nav: true,
    });
    // more
    $(".more .close").click(function () {
      $(".more").fadeOut(500);
    });
  
    $(".work .signUP").click(function () {
      $(".more").fadeIn();
      $(".more").css("display", "flex");
    });
})