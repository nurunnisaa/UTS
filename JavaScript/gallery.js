// JavaScript khusus GALERI

// FOTO
let body = document.querySelector("body"),
  lightBox = document.querySelector(".sha-lightBox"),
  img = document.querySelectorAll(".sha-photo"),
  showImg = lightBox.querySelector(".sha-showImage img"),
  close = lightBox.querySelector(".sha-close");

for (let image of img) {
  image.addEventListener("click", () => {
    showImg.src = image.src;
    lightBox.style.display = "block";
    body.style.overflow = "hidden";
    close.onclick = () => {
      lightBox.style.display = "none";
      body.style.overflow = "visible";
    };
  });
}

// Akhir FOTO
// VIDEO
let videoList = document.querySelectorAll(".sha-vid-list-container .sha-list");

videoList.forEach((vid) => {
  vid.onclick = () => {
    videoList.forEach((remove) => {
      remove.classList.remove("active");
    });
    vid.classList.add("active");
    let src = vid.querySelector(".sha-list-video").src;
    let title = vid.querySelector(".sha-list-title").innerHTML;
    document.querySelector(".sha-main-vid-container .sha-main-video").src = src;
    document.querySelector(".sha-main-vid-container .sha-main-video").play();
    document.querySelector(".sha-main-vid-container .sha-main-vid-title").innerHTML = title;
  };
});
