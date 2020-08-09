// hide load page

setTimeout(hideLoadPage, 2500);
setTimeout(showLandingPage, 2500);

function hideLoadPage() {
  $("#loadPage").attr("style", "display: none;");
}

function showLandingPage() {
  $("#landingPage").attr("style", "display:block;");
}

// create random background image - derived from: https://www.dyn-web.com/code/random-image-js/

var random_images_array = [
  "/activities-background1.png",
  "/activities-background2.png",
  "/activities-background3.png",
  "/activities-background4.png",
];

function getRandomImage(imgAr, path) {
  path = path || "././images"; // default path here
  var num = Math.floor(Math.random() * imgAr.length);
  var img = imgAr[num];
  var imgStr = 'url("' + path + img + '") ';
  // document.write(imgStr); document.close();
  $("#landingPage.lpImage").attr("style", "background-image:" + imgStr + " ;");
  //   console.log("I made it here");
}

// let rando = getRandomImage(random_images_array);
// setTimeout(getRandomImage(random_images_array), 4000);
// setTimeout(console.log("I made it further"), 4000);
setTimeout(function () {
  getRandomImage(array, path);
}, 4000);
