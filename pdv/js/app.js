// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(window).load(function() {
  // The slider being synced must be initialized first
  $('#idp-thumbnails').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 90,
    itemMargin: 10,
    asNavFor: '#idp-image-main'
  });
 
  $('#idp-image-main').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#idp-thumbnails"
  });
});