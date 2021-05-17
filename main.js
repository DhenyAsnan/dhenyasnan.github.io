/* Social Share Links
Whatsapp
https://api.whatsapp.com/send?text=[post-title] [post-url]

Facabook
https://www.facebook.com/sharer.php?u=[post-url]

Twitter
https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]

Pinterest
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]



*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");

function init() {
  //   console.log("hello");

  const pinterestImg = document.querySelector(".pinterest-img");

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi everyone, plase check this out: ");
  let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute("href", "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdhenyasnan.github.io/gajah.html");
  twitterBtn.setAttribute("href", "https://twitter.com/intent/tweet?via=dhenyasnan&text=Tetap%20Optimis%20di%20Tengah%20Pandemi%20COVID%20-19%20&url=https%3A%2F%2Fdhenyasnan.github.io%2Fgajah.html%2F");
  whatsappBtn.setAttribute("href", "https://api.whatsapp.com/send?text=Tetap%20Optimis%20di%20Tengah%20Pandemi%20COVID%20-19%20https%3A%2F%2Fdhenyasnan.github.io/gajah.html");
  pinterestBtn.setAttribute("href", "#");
}
init();
