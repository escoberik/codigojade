// = require jquery
// = require jquery-ui
// = require jquery_ujs

$(document).ready(function() {

  var $high = $('.highquality');
  var $software = $('.software');
  var $web = $('.web');
  var $contentman = $('.contentman');
  var $continuum = $('.continuum');
  
  $('.first').hover(
    function () { 
      $software.removeClass("none");
      $high.addClass("none");
    },
    function () {
      $software.addClass("none");
      $high.removeClass("none");
    }
  );
  $('.second').hover(
    function () { 
      $web.removeClass("none");
      $high.addClass("none");
    },
    function () {
      $web.addClass("none");
      $high.removeClass("none");
    }
  );
  $('.third').hover(
    function () { 
      $contentman.removeClass("none");
      $high.addClass("none");
    },
    function () {
      $contentman.addClass("none");
      $high.removeClass("none");
    }
  );
  $('.last').hover(
    function () { 
      $continuum.removeClass("none");
      $high.addClass("none");
    },
    function () {
      $continuum.addClass("none");
      $high.removeClass("none");
    }
  );
  
});
