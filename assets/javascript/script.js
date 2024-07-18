function showInfo(category) {
  // Sembunyikan semua info container
  document.querySelectorAll(".info-container").forEach(function (info) {
    info.style.display = "none";
  });

  // Tampilkan info container yang dipilih
  document.getElementById(category + "-info").style.display = "block";
}

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

const navbar = document.querySelector(".navbar");
document.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    // Adjust the value as needed
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function activateLink(element) {
  // Menghapus kelas 'active' dari semua link
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.classList.remove("active");
  });

  // Menambahkan kelas 'active' ke link yang diklik
  element.classList.add("active");

  // Menutup navbar jika dalam mode collapse (untuk layar kecil) dan link bukan dropdown toggle
  if ($(".navbar-toggler").is(":visible") && !element.classList.contains("dropdown-toggle")) {
    $(".navbar-collapse").collapse("hide");
  }
}

// Event listener untuk dropdown items
document.querySelectorAll(".dropdown-menu .dropdown-item").forEach(function (item) {
  item.addEventListener("click", function () {
    // Menutup navbar jika dalam mode collapse (untuk layar kecil)
    if ($(".navbar-toggler").is(":visible")) {
      $(".navbar-collapse").collapse("hide");
    }
  });
});

