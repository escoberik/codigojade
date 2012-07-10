// = require jquery
// = require jquery-ui
// = require jquery_ujs

//$(document).ready(function() { 
  $('.tds').hover(
    function (e) {
      var $img = $(e.target).find('img.none');
      var $imgv = $(e.target).find('img.visible');
      $img.removeClass("none");
      $img.addClass("visible");
      $imgv.removeClass("visible");
      $imgv.addClass("none");

    },
    function (e) {
      var $img = $(e.target).find('img.none');
      var $imgv = $(e.target).find('img.visible');
      $img.removeClass("none");
      $img.addClass("visible");
      $imgv.removeClass("visible");
      $imgv.addClass("none");
    }
  );
});
