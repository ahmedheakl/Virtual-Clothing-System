// =============== Colorful Loading Screen ===============

function hideLoading() {
  $(".loader").fadeOut(1000, function () {
    // $("body").css("overflow-y", "auto");
  });
}
window.onload = hideLoading;

$(document).ready(function () {
  if (document.getElementById("team")) {
    var splide = new Splide("#team", {
      pagination: false,
      perPage: 5,
      perMove: 1,
      rewind: true,
      gap: 20,
    });
    splide.mount();
  }
  if (document.getElementById("img-1")) {
    $("#img-1").fadeIn(1000, function () {
      $("#span-1").fadeIn(function () {
        $("#img-2").fadeIn(1000, function () {
          $("#span-2").fadeIn(function () {
            $("#img-3").fadeIn(2000, function () {
              var app = document.getElementById("end-message");

              var typewriter = new Typewriter(app, {
                loop: true,
              });

              typewriter
                .typeString("We hope that you like the results.")
                .pauseFor(2500)
                .deleteAll()
                .typeString("This was generated by an AI!!")
                .pauseFor(2500)
                .deleteChars(7)
                .typeString("<strong>Us :D</strong>")
                .pauseFor(2500)
                .start();
            });
          });
        });
      });
    });
  }
});
if (document.getElementById("id_person_img")) {
  id_person_img.onchange = (e) => {
    const [file] = id_person_img.files;
    if (file) {
      person_img_field.hidden = false;
      person_img_field.src = URL.createObjectURL(file);
    }
  };
} else {
  id_cloth_img.onchange = (e) => {
    const [file] = id_cloth_img.files;
    if (file) {
      cloth_img_field.hidden = false;
      cloth_img_field.src = URL.createObjectURL(file);
    }
  };
}
