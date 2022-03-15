$(document).ready(function () {
  $("div").each((_, element) => {
    $(element).on("click", function (e) {
      e.stopPropagation();
      $(this).remove();
    });
  });
});
