function onImageLoaded(url, cb) {
  let image = new Image();
  image.src = url;
  if (image.complete) {
    cb(image);
  } else {
    image.onload = function () {
      cb(image);
    };
  }
}

function checkImgOnload() {
  const panoramaSection = document.querySelector(".panorama-container");
  let image = new Image();
  image.src = "images/s3/sec3-360.jpg";
  image.onload = function () {
    onImageLoaded(`${image.src}`, function () {
      panoramaSection.innerHTML = `<img src="${image.src}" data-width="${image.width}" data-height="${image.height}" alt="Panorama">`;
    });
    $(".panorama-view").panorama360({
      sliding_controls: false,
      bind_resize: true,
      start_position: 100,
    });
  };
}

function init() {
  $("#fullpage").fullpage({
    anchors: [
      "1stPage",
      "2ndPage",
      "3rdPage",
      "4thPage",
      "5thPage",
      "6thPage",
      "7thPage",
      "8thPage",
      "9thPage",
      "10thPage",
      "11thPage",
    ],
    slidesNavigation: true,
    loopHorizontal: false,
    autoScrolling: true,
    scrollHorizontally: true,
    scrollOverflow: true,
    normalScrollElements: "#google_map",
    navigation: true,
  });
}

$(document).ready(function () {
  checkImgOnload();
  init();
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  window.addEventListener("resize", function () {
    setTimeout(function () {
      this.location.reload();
    });
  });
});