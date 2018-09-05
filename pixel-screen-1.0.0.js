$(function() {
  var pxsURL = "screen.jpg";
  var pxsHeight = "10000px";
  var pxsOpacityControl = true;

  $("body").append(
    '<div class="screen" style="background:url(' +
      pxsURL +
      ") no-repeat center top; position: absolute; left: 0; right: 0; top: 0; height: " +
      pxsHeight +
      '; z-index: 200000; pointer-events: none; display: none;"></div>'
  );
  $("body").append(
    '<div class="screen_control" style="position: fixed; right: 20px; top: 20px; z-index: 200001;"><button class="screen_switch">On</button> </div>'
  );

  $(".screen_switch").on("click", function() {
    if ($(this).hasClass("active")) {
      $(".screen").hide();
      $(this)
        .text("ON")
        .removeClass("active");
    } else {
      $(".screen").show();
      $(this)
        .text("OFF")
        .addClass("active");
    }
  });

  if (pxsOpacityControl == true) {
    $(".screen_control").append(
      '<button data-opacity=".5">.5</button> <button data-opacity=".6">.6</button> <button data-opacity=".7">.7</button> <button data-opacity=".8">.8</button> <button data-opacity=".9">.9</button> <button data-opacity="1">1</button>'
    );
    $(".screen_control button[data-opacity]")
      .on("click", function() {
        var opacity = $(this).data("opacity");
        $(this).attr("disabled");
        $(this)
          .siblings()
          .removeAttr("disabled");
        $(".screen").css({ opacity: opacity });
      })
      .last()
      .click();
  }
});
