$(document).ready(function () {
  $("div").each((_, element) => {
    $(element).on("click", function () {
      $(this).remove();
    });
  });
});
