let extraContent = document.querySelector(".extra-content");
let showMoreBtn = document.getElementById("show-more-btn");
document.getElementById("show-more-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah tautan default dari melakukan navigasi
  if (extraContent.style.display === "none" || extraContent.style.display === "") {
    extraContent.style.display = "flex";
    showMoreBtn.style.display = "none";
  } else {
    extraContent.style.display = "none";
  }
});

let closeMoreBtn = document.getElementById("close-more-btn")
closeMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (showMoreBtn.style.display === "none" || showMoreBtn.style.display === "") {
    showMoreBtn.style.display = "block";
    extraContent.style.display = "none";
  }
})

fsLightboxInstances["extra-image"].props.onOpen = function () {
  console.log("The first lightbox has opened.");
};

fsLightboxInstances["grooming-video"].props.onOpen = function () {
  console.log("The first lightbox has opened.");
};

function openWhatsApp() {
            const phoneNumber = '62895324395789'; 
            const waLink = `https://wa.me/${phoneNumber}`;
            window.open(waLink, '_blank');
        }
