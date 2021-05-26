function mediaCheck() {
  const desktopGroupSlides = document.querySelectorAll(".group_slide");
  const mobileGroupSlides = document.querySelectorAll(".m_group_slide");
  desktopGroupSlides.forEach((dGroupSlide) => {
    if (innerWidth <= 768) {
      dGroupSlide.classList.remove("slide");
    } else {
      dGroupSlide.classList.add("slide");
    }
  });
  mobileGroupSlides.forEach((mGroupSlide) => {
    if (innerWidth <= 768) {
      mGroupSlide.classList.add("slide");
    } else {
      mGroupSlide.classList.remove("slide");
    }
  });
}
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
  image.onload = function () {
    onImageLoaded(`${image.src}`, function () {
      panoramaSection.innerHTML = `<img src="${image.src}" data-width="${image.width}" data-height="${image.height}" alt="Panorama">`;
    });
    $(".panorama-view").panorama360({
      sliding_controls: false,
      bind_resize: true,
    });
  };
  if (innerWidth <= 768) {
    image.src = "images/mobile/s1/sec1img01.jpg";
  } else {
    image.src = "images/desktop/s1/sec1img01.jpg";
  }
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
      "12thPage",
      "13thPage",
    ],
    slidesNavigation: true,
    loopHorizontal: false,
    autoScrolling: true,
    scrollHorizontally: true,
    normalScrollElements: "#google_map",
    navigation: true,
  });
}

$(document).ready(function () {
  // checkImgOnload();
  // mediaCheck();
  init();

  // window.addEventListener("resize", function () {
  //   setTimeout(function () {
  //     this.location.reload();
  //   });
  // });
  
});