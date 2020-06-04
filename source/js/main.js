//=require node_modules/jquery/dist/jquery.min.js
//=require node_modules/bootstrap/dist/js/bootstrap.bundle.min.js

$(document).ready(function () {
  $(window).load(function() {
    $(".images img").each(function() {
        $(this).removeClass("wide tall").addClass((this.width / this.height > $(this).parent().width() / $(this).parent().height()) ? "wide" : "tall");
    });
  });
});
