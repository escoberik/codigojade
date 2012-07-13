// = require jquery
// = require jquery-ui
// = require jquery_ujs

$(document).ready(function() { 
  $('.tds').hover(
    function (e) {
      var $img = $(e.target).find('img.uncolored');
      var $imgv = $(e.target).find('img.colored');
      $img.addClass("none");
      $img.removeClass("visible");
      $imgv.removeClass("none");
      $imgv.addClass("visible");

    },
    function (e) {
      var $img = $(e.target).find('img.uncolored');
      var $imgv = $(e.target).find('img.colored');
      $img.removeClass("none");
      $img.addClass("visible");
      $imgv.removeClass("visible");
      $imgv.addClass("none");
    }
  );
});
