// aplicando o efeito no banner ao click no navbar, para adicionar o efeito de rolagem com jquery
$("#collapse-navbar").on("show.bs.collapse", function () {
  $(".topCasaFina-banner").css("transform", "translate(-50%, 10%)");
});

$("#collapse-navbar").on("hide.bs.collapse", function () {
  $(".topCasaFina-banner").css("transform", "translate(-50%, -50%)");
});
