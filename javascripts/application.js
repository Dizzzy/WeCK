// Avoid 'console' errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


$(function() {

  // Beautify selects
  $(".chosen:visible").chosen();

  // HTML5 Forms
  H5F.setup($('form'), {
    validClass: "valid",
    invalidClass: "invalid",
    requiredClass: "required",
    placeholderClass: "placeholder"
  });
  
  // Timeago
  $("time.timeago").timeago();
  
  // Tabs
  $(".tabs > li > a").on('click', function(e) {
    e.preventDefault();
    
    var ul = $(this).closest('ul');
    var li = $(this).parent();
    var tab_id = $(this).attr("title");
    
    ul.find('li.active').removeClass("active");
    li.addClass("active");
    
    ul.next(".tabs-contents").children(".tab-content").removeClass('active');
    $('#' + tab_id).addClass('active').find('.chosen').chosen();
  });

});