
// const url = "https://v5vrzietzh.execute-api.ap-south-1.amazonaws.com/animmoov/api/tracker/track";
//const url = "http://localhost:5000/api/tracker/track";
const url = "https://cyalj0tlx4.execute-api.ap-south-1.amazonaws.com/uat_prov9_studio/api/tracker/track";


async function postData(a = {}) {
  const t = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(a),
  });
  return await t.json();
}

var vdoDuration,
  vdoTitle,
  clickAble = [
    "click",
    "click-2",
  ],
  animTkVdo = document.getElementsByTagName("video")[0],
  triggerPoints = [0, 26, 76, 99];
const urlParams = new URLSearchParams(window.location.search),
  data = {
    adId: adConfig.adId,
    uid: adConfig.uid,
    campaign: adConfig.campaign,
    type: adConfig.type,
    price: adConfig.price,
    size: urlParams.get("width")+'x'+urlParams.get("height")
  };

  if(animTkVdo){
    animTkVdo.onplay = function () {
      var a = this;
      (vdoTitle = ""),
        setTimeout(() => {
          vdoTitle = a.getAttribute("title");
        }, 500),
        (vdoDuration = this.duration);
    };
    animTkVdo.ontimeupdate = function () {
      var a = Math.round((animTkVdo.currentTime / vdoDuration) * 100),
        t = {};
      a == triggerPoints[1] &&
        (((t = data).video_quartile = { name: vdoTitle, quartile: 25 }),
        postData(t)),
        a == triggerPoints[2] &&
          (((t = data).video_quartile = { name: vdoTitle, quartile: 75 }),
          postData(t)),
        a == triggerPoints[3] &&
          (((t = data).video_quartile = { name: vdoTitle, quartile: 100 }),
          postData(t));
    };

}
var animFunction = function () {
  var a = this.getAttribute("data-title"),
    t = {};
  this.classList.contains(clickAble[0])
    ? ((t = data).tab = a)
    : this.classList.contains(clickAble[1])
    ? ((t = data).cta_button = a)
    : this.classList.contains(clickAble[2])
    ? ((t = data).back_button = a)
    : this.classList.contains(clickAble[3])
    ? ((t = data).third_party_link = a)
    : this.classList.contains(clickAble[4]) && ((t = data).engage = 1),
    postData(t);
    
  console.log(`data-title`, a)
};

$('a').click(function(){
  postData({"cta_button": $(this).attr('id')})
})
// document.querySelectorAll('button').forEach(item => {
//   console.log(`item`, item)
//   item.addEventListener('click', event => {
//     var dtitle = item.getAttribute("data-title");
//     (t = data).interaction = dtitle
//     postData(t);
//   })
// })
// for (var ca of clickAble) {
//   var link = document.getElementsByClassName(ca);
//   if (link)
//     for (var i = 0; i < link.length; i++)
//       link[i].addEventListener("click", animFunction, !1);
// }
// var notEngage = !0,
//   animTkEngage = document.getElementsByClassName("animTkEngage")[0];
// animTkEngage.addEventListener(
//   "mouseover",
//   function (a) {
//     notEngage && (postData(data), (notEngage = !1));
//   },
//   !1
// );
var firstImpression = true;
setTimeout(() => {
  if(firstImpression){
    (t = data).impression = 1;
    postData(t);
    firstImpression = false;
    (t = data).impression = 0;
  }
}, 0);