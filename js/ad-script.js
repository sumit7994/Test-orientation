function getUrlVars() {
  var vars = [],
    hash;
  var hashes = window.location.href
    .slice(window.location.href.indexOf("?") + 1)
    .split("&");
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

var params = getUrlVars();
var w = window.innerWidth + "px",
  h = window.innerHeight + "px";
// var adSize = (params.width || 320) + "x" + (params.height || 480);
console.log(">>>>>>>>>>>>>>>>", window.innerHeight);
var adSize = "responsive";

var featSize = adSize;

var wht = innerHeight;

var mrg = (wht - params.height) / 2;
console.log("mrg", wht - h);
var wp = $("#wrapper");
var hotspotstatus = true;
var animWpHt = $("#anim-wrapper").height();
console.log("animWpHt", (animWpHt - 480) / 2 + "px");
wp.css({
  width: "100%",
  height: h,
  backgroundColor: "rgb(0 0 0 / 0%)",
  // marginTop: (animWpHt - 480) / 2 + 'px'
});

var action = {},
  videoAction = {};
var allOutAnim = [
  "fadeOut",
  "fadeOutDown",
  "fadeOutDownBig",
  "fadeOutLeft",
  "fadeOutLeftBig",
  "fadeOutRight",
  "fadeOutRightBig",
  "fadeOutUp",
  "fadeOutUpBig",
  "fadeOutTopLeft",
  "fadeOutTopRight",
  "fadeOutBottomRight",
  "fadeOutBottomLeft",
  "zoomOut",
  "zoomOutDown",
  "zoomOutLeft",
  "zoomOutRight",
  "zoomOutUp",
  "slideOutDown",
  "slideOutLeft",
  "slideOutRight",
  "slideOutUp",
];

var totalTime = 0;

var numofvideos = 0,
  videos = [],
  buttons = [],
  logoStyle = {},
  logoExpandStyle = {},
  logoPath,
  logoLink,
  videoPosition = {},
  jumpTo = "";

let limit = 45;

function addElement(element, index) {
  var tp = element.type;
  var elm =
    tp == "link" && element.url
      ? "a"
      : tp == "link" && !element.url
      ? "button"
      : "div";
  var style = {
    ...element.style[adSize],
    zIndex: index + 1,
    position: "absolute",
  };
  // if(element && element.style && element.style[adSize]){
  //   style = `"width: ${element.style[adSize].width}; height:auto; top: ${
  //   element.style[adSize].top}; left: ${element.style[adSize].left}; z-index: ${idx + 1}; position: absolute;"`;
  // }
  var html = `<${elm} id="${element.id}"></${elm}>`;
  wp.append(html);
  var eid = $("#" + element.id);
  eid.css(style);
  eid.attr("z-index", index + 1);
  eid.attr("ele-type", tp);
  console.log(`element.hoverStyle`, element.hoverStyle);
  if (
    element &&
    element.hoverStyle &&
    element.hoverStyle[adSize] &&
    element.hoverStyle[adSize].backgroundColor &&
    element.hoverStyle[adSize].color
  ) {
    eid.mouseover(function () {
      $(this).css({
        backgroundColor: element.hoverStyle[adSize].backgroundColor,
        color: element.hoverStyle[adSize].color,
      });
    });
    eid.mouseout(function () {
      $(this).css({
        backgroundColor: element.style[adSize].backgroundColor,
        color: element.style[adSize].color,
      });
    });
  }
  if (tp == "link" && element.url) {
    eid.attr("href", element.url);
    eid.attr("target", "_blank");
  } else {
    eid.attr("src", element.url);
  }
  if (element.fileName) {
    eid.append(
      `<img src="${baseUrl}/images/${element.fileName}" style="width: 100%; height: auto;"/>`
    );
  }
  if (tp == "video") {
    eid.append(`<div class="vdo-main-container"><div class="vdo-container">
    <div id="player">
      <video id="myVideo" autoplay muted>
          <source src="videos/video-0.mp4" type="video/mp4">
      </video>
    </div>
  </div></div>`);
  }
  if ((tp == "link" || tp == "text") && element.text) {
    eid.css({ lineHeight: style.height });
    eid.text(element.text);
  }
  if (tp == "feature") {
    var feature = adConfig.features.filter(function (obj) {
      return obj._id === element.featureId;
    });
    eid.append(
      `<div class="am-feature-container content-holder" id="${feature[0].container.replace(
        "#",
        ""
      )}" />`
    );
  }

  if (
    element.animation &&
    element.animation[adSize] &&
    element.animation[adSize].length
  ) {
    element.animation[adSize].forEach((anim) => {
      if (anim) {
        if (
          anim.action &&
          anim.actionOn &&
          anim.action != "" &&
          anim.actionOn != ""
        ) {
          if (action && action[anim.actionOn]) {
            action[anim.actionOn].actions.push({
              id: element.id,
              type: anim.type,
              delay: anim.delay,
              duration: anim.duration,
            });
            //totalTime += (Number(anim.duration.replace('ms','')) + Number(anim.delay.replace('ms','')))
            // console.log(`totalTime 1`, totalTime)
          } else {
            action = {
              ...action,
              [anim.actionOn]: {
                event: anim.action,
                count: anim.count ?? 0,
                vrText: anim.vrText ?? "",
                tilt: anim.tilt ?? "",
                actions: [
                  {
                    id: element.id,
                    type: anim.type,
                    delay: anim.delay,
                    duration: anim.duration,
                    count: anim.count ?? 0,
                    vrText: anim.vrText ?? "",
                    tilt: anim.tilt ?? "",
                  },
                ],
              },
            };
            //totalTime += (Number(anim.duration && anim.duration.replace('ms','')) + Number(anim.delay && anim.delay.replace('ms','')))
            // console.log(`totalTime 2`, totalTime)
          }
        } else {
          var delay = 0;
          if (anim.delay && typeof anim.delay == "string") {
            delay = Number(anim.delay.replace("ms", ""));
            //totalTime += (Number(anim.delay.replace('ms','')) + Number(anim.duration.replace('ms','')));
            // console.log(`totalTime 3`, totalTime)
          }
          setTimeout(() => {
            eid.css({ zIndex: eid.attr("z-index") });
            eid.removeAttr("class");
            eid.addClass(`wow ${anim.type} animated`);
            eid.css({
              "animation-name": anim.type,
              "animation-duration": anim.duration,
            });

            setTimeout(() => {
              if (allOutAnim.includes(anim.type)) {
                eid.css({ zIndex: 0 });
                if (tp == "video") {
                  eid.find("video").get(0).pause();
                }
              } else {
                if (tp == "video") {
                  eid.find("video").get(0).play();
                  eid.find("video").prop("muted", true);
                }
              }
            }, Number(anim.duration.replace("ms", "")));
          }, delay);
        }
      }
    });
  }
}

function actMethod(act) {
  action[act].actions.forEach((obj) => {
    let delay = 0;
    if (obj.delay && typeof obj.delay == "string") {
      delay = Number(obj.delay.replace("ms", ""));
    }

    setTimeout(() => {
      $("#" + obj.id).css({ zIndex: $("#" + obj.id).attr("z-index") });
      $("#" + obj.id).removeAttr("class");
      $("#" + obj.id).addClass(`wow ${obj.type} animated`);
      $("#" + obj.id).css({
        "animation-name": obj.type,
        "animation-duration": obj.duration,
      });

      setTimeout(
        () => {
          if (allOutAnim.includes(obj.type)) {
            $("#" + obj.id).css({ zIndex: 0 });
            if ($("#" + obj.id).attr("ele-type") == "video") {
              Player.pause();
            }
          } else {
            if ($("#" + obj.id).attr("ele-type") == "video") {
              Player.play();
              //Player.unmute();
            }
          }
        },
        obj.duration ? Number(obj.duration.replace("ms", "")) : 0
      );
    }, delay);
  });
}

function loadAd() {
  if (adConfig && adConfig.cdn && Object.keys(adConfig.cdn).length) {
    Object.keys(adConfig.cdn).forEach((cdi) => {
      adConfig.cdn[cdi].forEach((cdnlink) => {
        if (cdnlink.key.indexOf(".js") != -1) {
          $("body").append('<script src="' + cdnlink.location + '"/>');
        } else if (cdnlink.key.indexOf(".css") != -1) {
          $("head").append(
            '<link rel="stylesheet" href="' + cdnlink.location + '"/>'
          );
        }
      });
    });
  }
  if (adConfig.fonts) {
    if (adConfig.fonts.type && adConfig.fonts.type == "cdn") {
      $("head").append(adConfig.fonts.fontLink);
    }
    $("head").append(
      `<style>body{font-family: ${adConfig.fonts.fontFamily}; font-size: ${
        adConfig.fonts.fontSize || "14px"
      };}</style>`
    );
  }
  if (adConfig && adConfig.design) {
    adConfig.design.forEach((element, idx) => {
      if (element.status[adSize]) {
        addElement(element, idx);
      }
    });
  }

  $("#bg1").css({
    height: "91%",
    transition: "all 0.2s",
    right: "0",
    left: "auto",
  });

  $("#bg1").children("img").css({
    height: "100%",
    width: "auto",
  });

  $("#characterImge").css({
    height: "91%",
    transition: "all 0.2s",
  });

  $("#characterImge").children("img").css({
    height: "100%",
    width: "auto",
  });

  $("#video-4").css({
    height: "91%",
  });

  $(".vdo-main-container").css({
    height: "100%",
  });

  $("img").on("dragstart", function (event) {
    event.preventDefault();
  });

  function parallexEffect() {
    let limit = 90;
    window.addEventListener(
      "deviceorientation",
      function (event) {
        let position = Math.round(event.gamma);
        console.log("position: ", position);
        // For BG Image
        let BGperDegreeMove = $("#bg1").width() / limit;
        let BGtotalMove = -position * BGperDegreeMove;
        let BGelement = this.document.getElementById("bg1");
        let BGstyle = "translateX(" + BGtotalMove + "px)";
        console.log(
          "BGperDegreeMove: ",
          BGperDegreeMove,
          "BGtotalMove: ",
          BGtotalMove
        );
        if (
          BGtotalMove >= 0 &&
          BGtotalMove <= $("#bg1").width() - this.window.innerWidth
        )
          BGelement.style.transform = BGstyle;

        // For Upper Image
        let imgPerDegreeMove = $("#characterImge").width() / limit;
        let imgTotalMove = position * imgPerDegreeMove;
        let imgStyle = "translateX(" + imgTotalMove + "px)";
        let imgElement = this.document.getElementById("characterImge");
        console.log(
          "imgPerDegreeMove: ",
          imgPerDegreeMove,
          "imgTotalMove: ",
          imgTotalMove
        );
        if (
          imgTotalMove >=
            -$("#characterImge").width() + this.window.innerWidth &&
          imgTotalMove <= 0
        )
          imgElement.style.transform = imgStyle;
      },
      true
    );
  }

  var initialTouch = 0;
  var mouseDown = false;

  addEventListener("mousedown", (event) => {
    console.log(event);
    initialTouch = Number(event.pageX);
    mouseDown = true;
  });

  addEventListener("mouseup", (event) => {
    mouseDown = false;
  });

  addEventListener("mousemove", (event) => {
    if (mouseDown) {
      var touch = event.pageX;
      // For BG
      let bgElement = this.document.getElementById("bg1");
      var bgStyle = window.getComputedStyle(bgElement);
      var bgMatrix = new WebKitCSSMatrix(bgStyle.transform);
      let bgTranslated = Number(bgMatrix.m41);

      let newBGTranslateX = bgTranslated + (initialTouch - Number(touch));
      let BGStyle = "translateX(" + newBGTranslateX + "px)";

      if (
        newBGTranslateX >= 0 &&
        newBGTranslateX <= $("#bg1").width() - this.window.innerWidth
      )
        bgElement.style.transform = BGStyle;

      // For Image
      let imgElement = this.document.getElementById("characterImge");

      var style = window.getComputedStyle(imgElement);
      var matrix = new WebKitCSSMatrix(style.transform);
      let translated = Number(matrix.m41);

      let newTranslateX = translated - (initialTouch - Number(touch));

      let imgStyle = "translateX(" + newTranslateX + "px)";
      // console.log(imgStyle);
      if (
        newTranslateX >=
          -$("#characterImge").width() + this.window.innerWidth &&
        newTranslateX <= 0
      )
        imgElement.style.transform = imgStyle;
    }
  });

  addEventListener("touchstart", (event) => {
    initialTouch = Number(event.touches[0].pageX);
  });

  addEventListener("touchmove", (event) => {
    console.log(event);
    var touch = event.touches[0];
    // For BG
    let bgElement = this.document.getElementById("bg1");
    var bgStyle = window.getComputedStyle(bgElement);
    var bgMatrix = new WebKitCSSMatrix(bgStyle.transform);
    let bgTranslated = Number(bgMatrix.m41);

    let newBGTranslateX = bgTranslated + (initialTouch - Number(touch.clientX));
    let BGStyle = "translateX(" + newBGTranslateX + "px)";

    if (
      newBGTranslateX >= 0 &&
      newBGTranslateX <= $("#bg1").width() - this.window.innerWidth
    )
      bgElement.style.transform = BGStyle;

    // For Image
    let imgElement = this.document.getElementById("characterImge");

    var style = window.getComputedStyle(imgElement);
    var matrix = new WebKitCSSMatrix(style.transform);
    let translated = Number(matrix.m41);

    let newTranslateX = translated - (initialTouch - Number(touch.clientX));

    let imgStyle = "translateX(" + newTranslateX + "px)";
    console.log(imgStyle);
    if (
      newTranslateX >= -$("#characterImge").width() + this.window.innerWidth &&
      newTranslateX <= 0
    )
      imgElement.style.transform = imgStyle;
  });

  function runParallexEffect() {
    if (typeof DeviceMotionEvent.requestPermission == "function") {
      // iOS 13+
      let popupElement = document.createElement("div");
      popupElement.id = "permission-popup";
      document.getElementById("wrapper").appendChild(popupElement);

      $("#permission-popup").css({
        width: "300px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 100,
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "10px",
      });

      let confirmTextElement = document.createElement("h4");
      confirmTextElement.innerText =
        "Grant Motion and Orientation Permissions.";
      popupElement.appendChild(confirmTextElement);

      let buttonContainer = document.createElement("div");
      buttonContainer.id = "btn-container";

      let allowButtonElement = document.createElement("button");
      allowButtonElement.id = "allow-btn";
      allowButtonElement.innerText = "Allow";

      let denyButtonElement = document.createElement("button");
      denyButtonElement.id = "deny-btn";
      denyButtonElement.innerText = "Deny";

      buttonContainer.appendChild(allowButtonElement);
      buttonContainer.appendChild(denyButtonElement);

      popupElement.appendChild(buttonContainer);

      $("#btn-container").css({
        display: "flex",
        gap: "10px",
        justifyContent: "end",
        padding: "0 10px",
      });

      $("#allow-btn").css({
        backgroundColor: "green",
        color: "white",
        padding: "5px 10px",
        borderRadius: "10px",
      });

      $("#deny-btn").css({
        backgroundColor: "red",
        color: "white",
        padding: "5px 10px",
        borderRadius: "10px",
      });

      allowButtonElement.addEventListener("click", () => {
        DeviceMotionEvent.requestPermission()
          .then((response) => {
            if (response == "granted") {
              // do something with e
              $("#permission-popup").remove();
              parallexEffect();
            }
          })
          .catch((error) => {
            $("#permission-popup").remove();
            alert("Cannot send request");
            console.log(error);
          });
      });

      denyButtonElement.addEventListener("click", () => {
        $("#permission-popup").remove();
      });
    } else {
      console.log("Could not found DeviceOrientationEvent");
      // non iOS 13+
      parallexEffect();
    }
  }

  if ($(".wow").length) {
    var wow = new WOW({ mobile: true });
    wow.init();
  }

  $(".center-logo").hide();

  if (adConfig && adConfig.features && adConfig.features.length) {
    adConfig.features.forEach((element, i) => {
      console.log({ name: element.tabName, target: element.container });
      buttons.push({ name: element.tabName, target: element.container });

      // $("#player").append(`<div id="content-wrapper" />`).append(`<div class="am-feature-container content-holder" id="feature-container-${i+1}" />`)
      if (element.files && element.files.length > 0) {
        setTimeout(() => {
          element.files.forEach((file) => {
            if (file.fileName.indexOf(".js") != -1) {
              $("body").append(
                '<script src="' + file.filePath + file.fileName + '"/>'
              );
            } else if (file.fileName.indexOf(".css") != -1) {
              $("head").append(
                '<link rel="stylesheet" href="' +
                  file.filePath +
                  file.fileName +
                  '"/>'
              );
            }
          });
        }, 500);
      }
    });
  }
  if (adConfig.design.length > 0) {
    adConfig.design.forEach((element, i) => {
      if (element.type == "video" && element.status && element.status[adSize]) {
        numofvideos = element.videos.length;
        videoPosition = element.style[adSize];
        jumpTo = element.jumpTo;
        console.log(element.style[adSize], adSize);
        element.videos.forEach((vd, idx) => {
          if (idx == 0) {
            $("video#myVideo source").attr(
              "src",
              baseUrl + "/videos/" + vd.fileName
            );
          }
          videos.push({
            id: vd.id,
            title: vd && vd.caption,
            fileName: vd.fileName,
          });
        });
      }
    });
  }

  if (numofvideos) {
    var PD = {
      vdoContainer: "#player",
      mobile: false,
      unmuteEngage: true,
      replay: true,
      numofvideos: numofvideos,
      rollover: false,
      // rollover: {
      //   text: ["ROLLOVER TO ENGAGE", "POWERED BY PRO.V 9"],
      //   mobText: ["TAP TO ENGAGE", "POWERED BY PRO.V 9"],
      // },
      videos: videos,
      buttons: false,
      jump: {
        external: function () {
          actMethod(jumpTo);
        },
      },
    };

    setTimeout(() => {
      Player.init("#player", PD);
    }, 0);
  }

  // var dsgstring = JSON.stringify(adConfig.design);
  var clapEnable = false;
  var clapcount = 1;
  var clapCallbacks = {};

  var shakeEnabe = false;
  var shakecount = 1;
  var shakeCallbacks = {};

  var eyeBlinkEnable = false;
  var eyeBlinkEleCount = 0;
  var eyeBlinkCount = 1;
  var eyeBlinkCallback = {};

  var vrEnable = false;
  var vrCount = {};
  var vrTexts = [];
  var vrCallback = {};

  var tiltEnable = false;
  var tiltCount = {};
  var tiltTexts = [];
  var tiltCallback = {};

  $.shake({
    callback: function () {
      for (var sk in shakeCallbacks) {
        if (shakeCallbacks[sk].count == shakecount) {
          shakeCallbacks[sk].callback();
        }
      }
      shakecount++;
    },
  });

  setTimeout(() => {
    for (const act in action) {
      var ele = $("#" + act);
      console.log(`action[ele].event`, action[act], act);
      if (action[act].event && action[act].event == "complete") {
        $.fn[act] = function () {
          actMethod(act);
        };
      } else if (action[act].event == "shake") {
        shakeEnabe = true;
        shakeCallbacks = {
          ...shakeCallbacks,
          [act]: {
            count: action[act].count,
            callback: function () {
              console.log("shake", action[act].count), actMethod(act);
            },
          },
        };
      } else if (action[act].event == "clap") {
        console.log(action[act].count, action[act].event);
        clapEnable = true;
        clapCallbacks = {
          ...clapCallbacks,
          [act]: {
            count: action[act].count,
            callback: function () {
              console.log("clap", action[act].count), actMethod(act);
            },
          },
        };
      } else if (action[act].event == "eyeBlink") {
        console.log("eyeBlinkCount", eyeBlinkCount);
        eyeBlinkEnable = true;
        eyeBlinkCallback = {
          ...eyeBlinkCallback,
          [act]: {
            count: action[act].count,
            callback: function () {
              console.log("clap", action[act].count), actMethod(act);
            },
          },
        };
      } else if (action[act].event == "voiceRecognition") {
        console.log("voiceRecognition");
        vrEnable = true;
        var vtxt = action[act].vrText.toLowerCase().replace(/[^a-zA-Z ]/g, "");
        vrTexts.push(vtxt);
        vrCount = {
          ...vrCount,
          [vtxt]: 1,
        };
        vrCallback = {
          ...vrCallback,
          [act]: {
            count: action[act].count,
            vrText: vtxt,
            callback: function () {
              console.log("clap", action[act].count), actMethod(act);
            },
          },
        };
      } else if (action[act].event == "tilt") {
        console.log("tilt");
        tiltEnable = true;
        tiltTexts.push(action[act].tilt);
        tiltCount = {
          ...vrCount,
          [action[act].tilt]: 1,
        };
        tiltCallback = {
          ...vrCallback,
          [act]: {
            count: action[act].count,
            tiltText: action[act].tilt,
            callback: function () {
              console.log("clap", action[act].count), actMethod(act);
            },
          },
        };
      } else {
        console.log("action[act]", action[act]);
        $(ele).on(action[act].event, function () {
          console.log(`click event inside`, act);
          actMethod(act);
        });
      }
    }
  }, 2000);

  if (clapEnable) {
    var lastClap = new Date().getTime();
    function detectClap(data) {
      var t = new Date().getTime();
      if (t - lastClap < 200) return false; // TWEAK HERE
      var zeroCrossings = 0,
        highAmp = 0;
      for (var i = 1; i < data.length; i++) {
        if (Math.abs(data[i]) > 0.25) highAmp++; // TWEAK HERE
        if (
          (data[i] > 0 && data[i - 1] < 0) ||
          (data[i] < 0 && data[i - 1] > 0)
        )
          zeroCrossings++;
      }
      if (highAmp > 20 && zeroCrossings > 30) {
        // TWEAK HERE
        //console.log(highAmp+' / '+zeroCrossings);
        lastClap = t;
        return true;
      }
      return false;
    }
    var rec = new Recording(function (data) {
      if (detectClap(data)) {
        console.log("clap!");
        for (var clp in clapCallbacks) {
          if (clapCallbacks[clp].count == clapcount) {
            clapCallbacks[clp].callback();
          }
        }
        clapcount++;
      }
    });
  }

  if (eyeBlinkEnable) {
    var eyehtm = `
  <div id="videoContainer" style="position: fixed; z-index:0 left: 0; top: 0; width: 0; height: 0; overflow: hidden;">
      <video id="inputVideo" autoplay></video>
      <canvas id="overlay"></canvas>
  </div>`;
    $("body").append(eyehtm);
    var videoInput = document.getElementById("inputVideo");
    var canvasOutput = document.getElementById("overlay");
    $("body").append(
      `<script data-main="js/eyeblink/eyePlayer.js" src="js/eyeblink/require.js"></script>`
    );
    require(["eyePlayer"], function (eyePlayer) {
      eyeplayer = new eyePlayer();
      eyeplayer.init(videoInput, canvasOutput);
      eyeplayer.start();
    });

    document.addEventListener("blinkEvent", function () {
      for (var eb in eyeBlinkCallback) {
        if (eyeBlinkCallback[eb].count == eyeBlinkCount) {
          eyeBlinkCallback[eb].callback();
        }
      }
      eyeBlinkCount++;
    });
  }

  if (vrEnable) {
    window.addEventListener("DOMContentLoaded", () => {
      console.log(`VR started`);
      window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.start();
      recognition.addEventListener("result", (e) => {
        console.log(`VR Next method`);
        //Get transcript of user speech & confidence percentage
        const transcript = e.results[0][0].transcript
            .toLowerCase()
            .replace(/[^a-zA-Z ]/g, ""),
          confidence = (e.results[0][0].confidence * 100).toFixed(1);

        console.log(
          `VR 0000`,
          vrTexts,
          transcript,
          vrTexts.includes(transcript)
        );
        //Check if transcript is valid color value
        if (vrTexts.includes(transcript)) {
          console.log(
            `VR Next method`,
            vrTexts,
            transcript,
            vrTexts.includes(transcript)
          );
          //Set cube color;
          // colorCube.style.setProperty('--cube-color', transcript);

          //Set color name text value
          // colorName.textContent = transcript;
          // console.log(`transcript`, transcript)
          for (var vr in vrCallback) {
            if (
              vrCallback[vr].vrText == transcript &&
              vrCount[vrCallback[vr].vrText] == vrCallback[vr].count
            ) {
              vrCallback[vr].callback();
            }
          }

          vrCount[transcript] += 1;
        }

        //Output transcript
        // heardOutput.textContent = `Heard: ${transcript}`;

        console.log(`Heard:`, transcript);
        console.log(`Confidence:`, confidence);
        //Output transcript confidence percentage
        // confidenceOutput.textContent = `Confidence: ${confidence}%`;
      });

      //Restart speech recognition after user has finished talking
      recognition.addEventListener("end", recognition.start);
    });
  }

  if (vrEnable) {
    let counter = 0;
    const updateRate = 10;
    const limit = 45;

    function updateNow() {
      return counter++ % updateRate === 0;
    }

    window.addEventListener("deviceorientation", function (event) {
      if (updateNow()) {
        let position = Math.round(event.gamma);
        if (Math.abs(position) > limit) {
          if (position > limit) {
            position = limit;
            for (var tilt in tiltCallback) {
              if (
                tiltCallback[tilt].tiltText == "left" &&
                tiltCount[tiltCallback[tilt].tiltText] ==
                  tiltCallback[tilt].count
              ) {
                tiltCallback[tilt].callback();
              }
            }
            tiltCount.left += 1;
          } else {
            position = -limit;
            for (var tilt in tiltCallback) {
              if (
                tiltCallback[tilt].tiltText == "right" &&
                tiltCount[tiltCallback[tilt].tiltText] ==
                  tiltCallback[tilt].count
              ) {
                tiltCallback[tilt].callback();
              }
            }
            tiltCount.right += 1;
          }
        }
        // position = position / -100;
        // let style = "rotateY(" + position + "deg)";
        // tiltable.style.transform = style;
      }
    });
  }
  // for(const vdAct in videoAction){
  //   var ele = $('#'+vdAct);
  //   console.log(`videoAction[ele].event`, videoAction[vdAct])
  //   $(ele).on(videoAction[vdAct].action,function(){
  //       $('#'+videoAction[vdAct].id).find('video').trigger(videoAction[vdAct].actionType);
  //       Player.unmute();
  //   });
  // }

  setTimeout(() => {
    hotspotstatus = true;
    hotspotEnable();

    if (document.readyState !== "loading") {
      console.log("document is already ready, just execute code here");
      runParallexEffect();
    } else {
      document.addEventListener("DOMContentLoaded", function () {
        console.log("document was not ready, place code here");
        runParallexEffect();
      });
    }
  }, 1);
}

const myInterval = setInterval(myTimer, 300);

function myTimer() {
  if (adConfig) {
    loadAd();
    clearInterval(myInterval);
  }
}
