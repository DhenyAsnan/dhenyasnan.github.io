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

function init() {
  // console.log("hello");

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi everyone, plase check this out:");

  facebookBtn.setAttribute("href", "https://www.facebook.com/sharer.php?u=");
  twitterBtn.setAttribute("href", "https://twitter.com/share?url=${postUrl}&text=${postTitle}");
  whatsappBtn.setAttribute("href", "https://api.whatsapp.com/send?text=${postTitle} ${postUrl}");
}
init();
