var Player = (function() {
    var htmlObj;
    var $playerContainer;
    var mediaPlayer;
    var $progress;
    var progressBar;
    var $timer;
    var trackUrl;
    var not_watched_0 = true;
    var not_watched_25 = true;
    var not_watched_50 = true;
    var not_watched_75 = true;
    var $playContainer;
    var $replay;
    var $style;
    var innerContainerWidth;
    var isRollover = true;
    var rollOverText;
    var rollOverDone = false;
    var rollOverTimer;
    var $container;
    var $rollOverContainer;
    var $unmuteBtnContainer;
    var $replyBtnContainer;
    var $replayInheritance = false;
    var $buttonsWrapper;
    var $buttonPostion = false;
    var $buttonsContainer;
    var $vdoContainer = false;
    var counter = 0;
    var barWidth;
    var controlShown = false;
    var videos;
    var logo = false;
    var buttons = false;
    var mobile = true;
    var unmuteEngage = false;
    var sReplay = false;
    var numofvideos = 1;
    var jump = false; 
    var rollover = false;
    var $trigger;
    var mover = true;
    var currentTab;
    var tabPlayer = false;
    var muted = true;
  
    function rolloverInit(){
      if(rollover){
        console.log("uuuuuuuuuuuuuuuuu")
        $trigger.onmouseover = function(){
          $rollOverContainer.style.display = 'none';
          if (mover) {
              $unmuteBtnContainer.style.display = 'flex';
              mediaPlayer.pause();
              mediaPlayer.currentTime = "0";
              mediaPlayer.play();
              setTimeout(() => {
                  mediaPlayer.play();
              }, 100);
              mover = false;
          }
        };
      }
    }
    
    
      
    
  //   window.addEventListener("orientationchange", function() {
  //     if (screen.orientation.type == "landscape-primary") {
  //       let elem = document.documentElement;
  
  //       if (!document.fullscreenElement) {
  //         elem.requestFullscreen().catch(err => {
  //           alert(
  //             `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
  //           );
  //         });
  //       } else {
  //         document.exitFullscreen();
  //       }
  //     }
  
  //     console.log(
  //       "the orientation of the device is now " + screen.orientation.type
  //     );
  //   });
  
    window.mobileAndTabletcheck = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
  
    function $animmoovSelector(selector) {
      return document.querySelector(selector);
    }
  
    function resetTrackFlag() {
      not_watched_0 = true;
      not_watched_25 = true;
      not_watched_50 = true;
      not_watched_75 = true;
    }
	
	document.body.onmouseup = function() {
		mouseDown = 0;
	}  
    function addPlayButtonClick() {
      delegate($container, "click", ".am-play-button", function(event) {
        if($vdoContainer){
          tabPlayer = document.getElementById(`ace-btn-${$vdoContainer.replace('#','')}`) || false;
        }
        closeControls();
        rmActiveFromAllBtns();
        event.stopPropagation();
        var el = this.parentNode;
        el.style.width = "200px";
        addClass(".am-player-inner-container", "play-highlight");
        el.classList.remove("play-highlight");
  
        reSetProgress();
        
        el.querySelector(".am-play-button").style.display = "none";
        setTimeout(function() {
          el.querySelector(".am-pause").innerHTML = addPlayPauseBtn("pause");
          el.querySelector(".am-pause").style.display = "block";
          el.querySelector(".am-vol").style.display = "block";
          el.querySelector(".am-durration").style.display = "block";
          el.querySelector(".am-title").style.display = "block";
          el.querySelector(".am-play-button").innerHTML = addPlayPauseBtn("play");
          if (mediaPlayer.muted) {
            el.querySelector(".am-vol").innerHTML = addSpeakerBtn("mute");
          } else {
            el.querySelector(".am-vol").innerHTML = addSpeakerBtn("unmute");
          }
        }, 500);
        if(tabPlayer){
          tabPlayer.classList.add("active");
        }
        playVideo(el.getAttribute("data-count"));
        
      });
      delegate($container, "mousedown", ".am-play-button", function(event) {
		mediaPlayer.muted = false;
	  });
    }
  
    function reSetProgress() {
      var elem = document.querySelectorAll(".am-progress");
  
      elem.forEach(function(el, index) {
        el.style.width = "";
        //el.style.webkitTransform = "";
        //el.style.transform = "";
      });
    }
  
    function closeControls() {
      var elem = document.querySelectorAll(".am-player-inner-container");
  
      elem.forEach(function(userItem, index) {
        userItem.style.width = "25px";
        userItem.querySelector(".am-pause").style.display = "none";
        userItem.querySelector(".am-vol").style.display = "none";
        userItem.querySelector(".am-durration").style.display = "none";
        userItem.querySelector(".am-title").style.display = "none";
        userItem.querySelector(".am-play-button").style.display = "block";
      });
    }
  
    function delegate(el, evt, sel, handler) {
      el.addEventListener(evt, function(event) {
        var t = event.target;
        while (t && t !== this) {
          if (t.matches(sel)) {
            handler.call(t, event);
          }
          t = t.parentNode;
        }
      });
    }
  
    function addMuteUnmute() {
      delegate($container, "click", ".am-vol", function(event) {
        event.stopPropagation();
        var el = this;
        if (mediaPlayer.muted) {
          el.innerHTML = addSpeakerBtn("unmute");
        } else {
          el.innerHTML = addSpeakerBtn("mute");
        }
        mediaPlayer.muted = !mediaPlayer.muted;
        $unmuteBtnContainer.style.display = 'none';
      });
    }
  
    function addPlayPause() {
      delegate($container, "click", ".am-pause", function(event) {
        event.stopPropagation();
        mediaPlayer.muted = false;
        var el = document.querySelector(
          htmlObj + " #amimmoovplayer-" + counter + " .am-vol"
        );
        el.innerHTML = addSpeakerBtn("unmute");
        $unmuteBtnContainer.style.display = 'none';
        var el = this;
        if (mediaPlayer.paused) {
          mediaPlayer.play();
          el.innerHTML = addPlayPauseBtn("pause");
        } else {
          mediaPlayer.pause();
  
          videos[counter].duration = mediaPlayer.currentTime;
  
          el.innerHTML = addPlayPauseBtn("play");
        }
      });
    }
  
    function formatDuration(duration) {
      if (isNaN(duration)) {
        return "00:00";
      }
      var minutes = Math.floor(duration / 60);
      var seconds = Math.floor(duration - minutes * 60);
      var minuteValue = "";
      var secondValue = "";
  
      if (minutes < 10) {
        minuteValue = "0" + minutes;
      } else {
        minuteValue = minutes;
      }
  
      if (seconds < 10) {
        secondValue = "0" + seconds;
      } else {
        secondValue = seconds;
      }
      return minuteValue + ":" + secondValue;
    }
  
    function openFullscreen() {
      if (mediaPlayer.requestFullscreen) {
        mediaPlayer.requestFullscreen();
      } else if (mediaPlayer.mozRequestFullScreen) {
        /* Firefox */
        mediaPlayer.mozRequestFullScreen();
      } else if (mediaPlayer.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        mediaPlayer.webkitRequestFullscreen();
      } else if (mediaPlayer.msRequestFullscreen) {
        /* IE/Edge */
        mediaPlayer.msRequestFullscreen();
      }
    }
  
    function resetProgressbar() {
      $progress.style.transition = "none";
      $progress.style.visibility = "hidden";
      $progress.style.webkitTransform =
        "translateX(" + -innerContainerWidth + "px)";
      $progress.style.visibility = "visible";
      setTimeout(function() {
        $progress.style.transition = ".4s";
      }, 500);
    }
  
    function replay() {
      $replay.addEventListener("click", function() {
        resetProgressbar();
        $playContainer.style.visibility = "hidden";
        mediaPlayer.pause();
        mediaPlayer.currentTime = "0";
        mediaPlayer.play();
        $unmuteBtnContainer.style.display = 'none';
      });
    }
  
    function addTimeUpdate() {
      var duration = mediaPlayer.duration;
  
      var $currTimer;
  
      mediaPlayer.addEventListener("timeupdate", function() {
        duration = mediaPlayer.duration;
        $currTimer = $animmoovSelector(
          "#amimmoovplayer-" + counter + " .am-durration"
        );
        barWidth = $animmoovSelector(
          "#amimmoovplayer-" + counter + " .am-bar-container"
        ).offsetWidth;
  
        $currTimer.innerHTML =
          "-" + formatDuration(mediaPlayer.duration - mediaPlayer.currentTime);
  
        if (
          !controlShown &&
          Math.round(mediaPlayer.duration - mediaPlayer.currentTime) == 2
        ) {
          controlShown = true;
          menuHover(true, 4000);
        }
  
        $animmoovSelector(".am-progress").style.display = "none";
        // var test = barWidth / mediaPlayer.duration * mediaPlayer.currentTime - barWidth;
        var width = (100 / mediaPlayer.duration) * mediaPlayer.currentTime;
        $currentProgress = $animmoovSelector(
          "#amimmoovplayer-" + counter + " .am-progress"
        );
        $currentProgress.style.display = "block";
        $currentProgress.style.width = width + "%";
        // $currentProgress.style.webkitTransform = "translateX(" + test + "px)";
        // $currentProgress.style.transform = "translateX(" + test + "px)";
      });
      //Show replay button on video end
      mediaPlayer.onended = function() {
        controlShown = false;
        resetTrackFlag();
        if (!rollOverDone) {
          replayFirstVideo();
          return;
        }
        if (counter < videos.length - 1) {
          videos[counter].duration = 0;
          document.querySelector(
            "#amimmoovplayer-" + counter + " .am-play-button"
          ).innerHTML = addReplayBtn();
          counter++;
  
          document
            .querySelector("#amimmoovplayer-" + counter + " .am-play-button")
            .click();
          return;
        } else {
          document.querySelector(
            "#amimmoovplayer-" + counter + " .am-play-button"
          ).innerHTML = addReplayBtn();
          playCompleted();
        }
      };
    }
  
    function replayFirstVideo() {
      mediaPlayer.pause();
      mediaPlayer.currentTime = "0";
      mediaPlayer.play();
      var fbtn = document.getElementsByClassName("am-play-button")[0];
      fbtn.click();
    }
  
    function playCompleted() {
      closeControls();
      addClass(".am-player-inner-container", "play-highlight");
      reSetProgress();
      if(jump){
        jumpOnFeature();
      }
    }
  
    function playVideo(videoCount) {
      videoCount = parseInt(videoCount);
      let videoElement = mediaPlayer;
      if (videoElement.currentTime < videoElement.duration) {
        videos[counter].duration = videoElement.currentTime;
      } else {
        videos[counter].duration = 0;
      }
      //videoElement.setAttribute("data-title", videos[videoCount].title);
      counter = videoCount;
      barWidth = $animmoovSelector(
        "#amimmoovplayer-" + counter + " .am-bar-container"
      ).offsetWidth;
  
      let videoSrc = videoElement.querySelector("source") || videoElement;
      //videoSrc.src = `videos/video-${videoCount}.mp4`;     
	  videoSrc.src = baseUrl+`/videos/${videos[videoCount].fileName}`; 
	  console.log(baseUrl+'/videos/${videos[videoCount].fileName', videos, videoCount, videos[videoCount].fileName)
      videoElement.setAttribute("data-title", videos[videoCount].title);  
      videoElement.load();
     // videoElement.play();
      if (videos[videoCount].duration > 0) {
        videoElement.currentTime = videos[videoCount].duration;
      }
    }
  
    function addSpeakerBtn(val) {
      if (val == "mute") {
        return `<?xml version="1.0" encoding="utf-8"?>
              <!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 99.2 99.2" style="enable-background:new 0 0 99.2 99.2;" xml:space="preserve">
              <style type="text/css">
                  .st001{fill:none;}
                  .st101{fill:#FFFFFF;}
              </style>
              <g id="Layer_2">
                  <circle class="st001" cx="49.6" cy="49.6" r="49.6"/>
              </g>
              <g id="Layer_3">
                  <g>
                      <path class="st101" d="M31.3,38.4l19.8-14.5c0,0,4.5-3.3,5.8,2v46.3c0,0,0,6.3-5.3,3.5l-20.3-14h-12c0,0-3.3,0-3.3-3.5V41.6
                          c0,0,0-3,3-3.8L31.3,38.4z"/>
                  </g>
                  <g>
                      <path class="st101" d="M65.8,43.2l6.5,6.8l-6.8,6.8c0,0-2.1,2.2,0,4.5c0,0,2,2.6,4.1,0.5c2.2-2.1,7.3-7.3,7.3-7.3l7,7
                          c0,0,2.8,2.3,5-0.3c0,0,2.9-1.9-0.1-4.8l-6.5-6.5l7.3-7.3c0,0,2.2-2.8-0.4-4.6c0,0-2-3.2-5.6,0.7l-6.3,6.3l-7-7c0,0-2.3-2.5-4.3,0
                          C66.2,37.8,62.7,40.2,65.8,43.2z"/>
                  </g>
              </g>
              </svg>
              `;
      }
      if (val == "unmute") {
        return `<?xml version="1.0" encoding="utf-8"?>
              <!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 99.2 99.2" style="enable-background:new 0 0 99.2 99.2;" xml:space="preserve">
              <style type="text/css">
                  .st001{fill:none;}
                  .st101{fill:#FFFFFF;}
                  .st2{fill:none;stroke:#FFFFFF;stroke-width:4;stroke-miterlimit:10;}
              </style>
              <g id="Layer_2">
                  <circle class="st001" cx="49.6" cy="49.6" r="49.6"/>
              </g>
              <g id="Layer_3">
                  <g>
                      <path class="st101" d="M31.3,38.4l19.8-14.5c0,0,4.5-3.3,5.8,2v46.3c0,0,0,6.3-5.3,3.5l-20.3-14h-12c0,0-3.3,0-3.3-3.5V41.6
                          c0,0,0-3,3-3.8L31.3,38.4z"/>
                      <path class="st101" d="M65.9,38.1c6.1,0,11.1,4.9,11.1,11s-4.9,11-11.1,11"/>
                      <path class="st2" d="M65.8,31.9c9.6,0,17.3,7.7,17.3,17.3s-7.7,17.3-17.3,17.3"/>
                  </g>
              </g>
              </svg>
              `;
      }
    }
  
    function addPlayPauseBtn(val) {
      if (val == "pause") {
        return `<?xml version="1.0" encoding="utf-8"?>
              <!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 99.2 99.2" style="enable-background:new 0 0 99.2 99.2;" xml:space="preserve">
              <style type="text/css">
                  .st01{fill:#00000000 !important;}
                  .st11{fill:#FFFFFF;}
              </style>
              <g id="Layer_2">
                  <circle class="st01" cx="49.6" cy="49.6" r="49.6"/>
              </g>
              <g id="Layer_1">
                  <g>
                      <path class="st11" d="M38.6,76.9L38.6,76.9c-3.6,0-6.6-3-6.6-6.6V29c0-3.6,3-6.6,6.6-6.6c3.6,0,6.6,3,6.6,6.6v41.3
                          C45.2,73.9,42.3,76.9,38.6,76.9"/>
                      <path class="st11" d="M60.6,76.9L60.6,76.9c-3.6,0-6.6-3-6.6-6.6V29c0-3.6,3-6.6,6.6-6.6c3.6,0,6.6,3,6.6,6.6v41.3
                          C67.2,73.9,64.3,76.9,60.6,76.9"/>
                  </g>
              </g>
              </svg>`;
      }
      if (val == "play") {
        return `<?xml version="1.0" encoding="utf-8"?>
              <!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 99.2 99.2" style="enable-background:new 0 0 99.2 99.2;" xml:space="preserve">
              <style type="text/css">
                  .st01{fill:none;}
                  .st11{clip-path:url(#SVGID_2_);fill:#FFFFFF;}
              </style>
              <g id="Layer_2">
                  <circle class="st01" cx="49.6" cy="49.6" r="49.6"/>
              </g>
              <g id="Layer_1">
                  <g>
                      <defs>
                          <rect id="SVGID_1_" x="33.1" y="22.6" width="39" height="53.9"/>
                      </defs>
                      <clipPath id="SVGID_2_">
                          <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
                      </clipPath>
                      <path class="st11" d="M33.1,25.7v48.5c0,0,1,3.8,5.3,1.8l32.3-22.5c0,0,3.5-2.5-0.3-7L37.1,23C37.1,23,33.9,21.2,33.1,25.7"/>
                  </g>
              </g>
              </svg>`;
      }
    }
  
    
    function addUnmute(containerId) {
      var unmuteHtml =  `<div class="speaker-container">
          <div class="speaker-icon">
              <img src="${baseUrl}/player/icons/speaker-animated.gif" />
          </div>  
          <div class="unmute-svg">
              <?xml version="1.0" encoding="utf-8"?>
              <!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 362.7 100.2" style="enable-background:new 0 0 362.7 100.2;" xml:space="preserve">
              <style type="text/css">
                  .um0{opacity:0.75;fill:#A09F9F;}
                  .um1{fill:none;stroke:#E5E5E5;stroke-width:7;stroke-miterlimit:10;}
                  .um2{display:none;fill:#FFFFFF;}
                  .um3{font-family:'DINRoundOffc-Bold';}
                  .um4{font-size:55px;}
                  .um5{fill:#FFFFFF;}
              </style>
              <path class="um0" d="M316.2,92H46.5C24.3,92,6.1,73.8,6.1,51.6v-6.4C6.1,23,24.3,4.9,46.5,4.9h269.6c22.2,0,40.4,18.2,40.4,40.4v6.4
                  C356.5,73.8,338.4,92,316.2,92z"/>
              <path class="um1" d="M120.9,5.1c6.3,0,70.3,0,73.8,0c20.5,0,98.6,0.6,107.8-0.2c1.4-0.1,5.7-0.6,11.3,0c6.1,0.6,20.1,1.9,31.2,13
                  c8,8,13,19.1,13,31.2v1.7c0,24.3-19.9,44.2-44.2,44.2h-265C24.5,95,4.6,75.1,4.6,50.8v-1.7c0-24.3,19.9-44.2,44.2-44.2
                  c25.8,0,33.4-0.4,79.8,0"/>
              <text transform="matrix(1 0 0 1 115.8896 72.5918)" class="um2 um3 um4">unmute</text>
              <g>
                  <path class="um5" d="M130.2,69.9c-2,0-3.9-0.3-5.7-1c-1.8-0.7-3.3-1.6-4.6-2.8c-1.3-1.2-2.3-2.6-3.1-4.3c-0.8-1.7-1.1-3.6-1.1-5.7
                      V35.4c0-0.4,0-0.8,0-1.1c0-0.3,0-0.6,0.1-0.9c0-0.2,0.1-0.5,0.2-0.7c0.1-0.2,0.2-0.4,0.3-0.7c0.3-0.5,0.7-1,1.3-1.3
                      c0.6-0.3,1.3-0.5,2-0.5s1.4,0.2,2,0.5c0.6,0.3,1,0.8,1.3,1.3c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.2,0.1,0.4,0.2,0.7
                      c0,0.2,0.1,0.5,0.1,0.9c0,0.3,0,0.7,0,1.1v20.5c0,1.1,0.2,2.2,0.5,3c0.3,0.9,0.8,1.6,1.3,2.3s1.3,1.1,2.1,1.4
                      c0.8,0.3,1.8,0.5,2.8,0.5c1,0,2-0.2,2.8-0.5c0.8-0.3,1.5-0.8,2.1-1.4c0.6-0.6,1-1.4,1.3-2.3c0.3-0.9,0.5-1.9,0.5-3V35.4
                      c0-0.4,0-0.8,0-1.1c0-0.3,0-0.6,0.1-0.9c0-0.2,0.1-0.5,0.2-0.7c0.1-0.2,0.2-0.4,0.3-0.7c0.3-0.5,0.7-1,1.3-1.3
                      c0.6-0.3,1.3-0.5,2-0.5s1.4,0.2,2,0.5c0.6,0.3,1,0.8,1.3,1.3c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.2,0.1,0.4,0.2,0.7
                      c0,0.2,0.1,0.5,0.1,0.9c0,0.3,0,0.7,0,1.1v20.8c0,2.1-0.4,4-1.1,5.7c-0.8,1.7-1.8,3.1-3.1,4.3c-1.3,1.2-2.8,2.1-4.6,2.8
                      C134.1,69.6,132.2,69.9,130.2,69.9z"/>
                  <path class="um5" d="M183.1,65c0,0.8-0.1,1.5-0.2,2.1c-0.1,0.6-0.4,1.1-0.9,1.5c-0.8,0.8-1.8,1.2-2.9,1.2c-0.4,0-0.8-0.1-1.2-0.2
                      c-0.4-0.1-0.7-0.4-1.1-0.6c-0.3-0.3-0.7-0.7-1.1-1.1c-0.4-0.4-0.7-1-1.1-1.6l-13.9-20.6v18.9c0,0.4,0,0.8,0,1.1
                      c0,0.3,0,0.6-0.1,0.9c0,0.2-0.1,0.5-0.2,0.7c-0.1,0.2-0.2,0.4-0.3,0.7c-0.3,0.5-0.7,1-1.3,1.3s-1.3,0.5-2,0.5s-1.4-0.2-2-0.5
                      s-1-0.8-1.3-1.3c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.2-0.1-0.4-0.2-0.7c0-0.2-0.1-0.5-0.1-0.9c0-0.3,0-0.7,0-1.1V35
                      c0-0.8,0.1-1.5,0.2-2.1c0.1-0.6,0.4-1.1,0.8-1.5c0.8-0.8,1.8-1.2,2.9-1.2c0.4,0,0.8,0.1,1.2,0.2c0.4,0.1,0.7,0.4,1.1,0.6
                      s0.7,0.7,1,1.1c0.3,0.4,0.7,1,1.2,1.6l13.9,20.6V35.4c0-0.4,0-0.8,0-1.1c0-0.3,0-0.6,0.1-0.9c0-0.2,0.1-0.5,0.2-0.7
                      c0.1-0.2,0.2-0.4,0.3-0.7c0.3-0.5,0.7-1,1.3-1.3c0.6-0.3,1.3-0.5,2-0.5c0.8,0,1.4,0.2,2,0.5c0.6,0.3,1,0.8,1.3,1.3
                      c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.2,0.1,0.4,0.2,0.7c0,0.2,0.1,0.5,0.1,0.9c0,0.3,0,0.7,0,1.1V65z"/>
                  <path class="um5" d="M210,62.2c-0.5,0-0.9-0.1-1.2-0.2c-0.3-0.1-0.7-0.3-0.9-0.5s-0.5-0.5-0.8-0.8c-0.2-0.3-0.5-0.7-0.7-1.2
                      l-6.4-12.6v17.7c0,0.4,0,0.8,0,1.1c0,0.3,0,0.6-0.1,0.9c0,0.2-0.1,0.5-0.2,0.7s-0.2,0.4-0.3,0.7c-0.3,0.5-0.7,1-1.3,1.3
                      c-0.6,0.3-1.3,0.5-2,0.5c-0.8,0-1.4-0.2-2-0.5c-0.6-0.3-1-0.8-1.3-1.3c-0.1-0.2-0.2-0.5-0.3-0.7s-0.1-0.4-0.2-0.7
                      c0-0.2-0.1-0.5-0.1-0.9c0-0.3,0-0.7,0-1.1V35c0-0.8,0.1-1.6,0.2-2.1c0.1-0.6,0.5-1.1,0.9-1.6c0.7-0.7,1.6-1,2.6-1
                      c0.5,0,0.9,0,1.2,0.1c0.4,0.1,0.7,0.3,1.1,0.5c0.4,0.3,0.7,0.6,1.1,1c0.3,0.4,0.6,0.9,0.9,1.3l9.8,18.6l9.8-18.6
                      c0.3-0.5,0.5-0.9,0.9-1.3c0.3-0.4,0.7-0.8,1.1-1c0.3-0.2,0.7-0.4,1.1-0.5c0.4-0.1,0.8-0.1,1.2-0.1c1,0,1.9,0.3,2.6,1
                      c0.5,0.5,0.8,1,0.9,1.6c0.1,0.6,0.2,1.3,0.2,2.1v29.7c0,0.4,0,0.8,0,1.1c0,0.3,0,0.6-0.1,0.9c0,0.2-0.1,0.5-0.2,0.7
                      s-0.2,0.4-0.3,0.7c-0.3,0.5-0.7,1-1.3,1.3c-0.6,0.3-1.3,0.5-2,0.5c-0.8,0-1.4-0.2-2-0.5c-0.6-0.3-1-0.8-1.3-1.3
                      c-0.1-0.2-0.2-0.5-0.3-0.7s-0.1-0.4-0.2-0.7c0-0.2-0.1-0.5-0.1-0.9c0-0.3,0-0.7,0-1.1V46.9l-6.4,12.6c-0.5,1-1,1.6-1.5,2.1
                      C211.6,62,210.9,62.2,210,62.2z"/>
                  <path class="um5" d="M250.6,69.9c-2,0-3.9-0.3-5.7-1c-1.8-0.7-3.3-1.6-4.6-2.8c-1.3-1.2-2.3-2.6-3.1-4.3c-0.8-1.7-1.1-3.6-1.1-5.7
                      V35.4c0-0.4,0-0.8,0-1.1c0-0.3,0-0.6,0.1-0.9c0-0.2,0.1-0.5,0.2-0.7c0.1-0.2,0.2-0.4,0.3-0.7c0.3-0.5,0.7-1,1.3-1.3
                      c0.6-0.3,1.3-0.5,2-0.5c0.8,0,1.4,0.2,2,0.5s1,0.8,1.3,1.3c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.2,0.1,0.4,0.2,0.7c0,0.2,0.1,0.5,0.1,0.9
                      c0,0.3,0,0.7,0,1.1v20.5c0,1.1,0.2,2.2,0.5,3c0.3,0.9,0.8,1.6,1.3,2.3c0.6,0.6,1.3,1.1,2.1,1.4c0.8,0.3,1.8,0.5,2.8,0.5
                      c1,0,2-0.2,2.8-0.5s1.5-0.8,2.1-1.4c0.6-0.6,1-1.4,1.3-2.3c0.3-0.9,0.5-1.9,0.5-3V35.4c0-0.4,0-0.8,0-1.1c0-0.3,0-0.6,0.1-0.9
                      c0-0.2,0.1-0.5,0.2-0.7c0.1-0.2,0.2-0.4,0.3-0.7c0.3-0.5,0.7-1,1.3-1.3c0.6-0.3,1.3-0.5,2-0.5c0.8,0,1.4,0.2,2,0.5s1,0.8,1.3,1.3
                      c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.2,0.1,0.4,0.2,0.7c0,0.2,0.1,0.5,0.1,0.9c0,0.3,0,0.7,0,1.1v20.8c0,2.1-0.4,4-1.1,5.7
                      s-1.8,3.1-3.1,4.3c-1.3,1.2-2.8,2.1-4.6,2.8C254.4,69.6,252.6,69.9,250.6,69.9z"/>
                  <path class="um5" d="M288.4,37.3v27.4c0,0.4,0,0.8,0,1.1c0,0.3,0,0.6-0.1,0.9c0,0.2-0.1,0.5-0.2,0.7s-0.2,0.4-0.3,0.7
                      c-0.3,0.5-0.7,1-1.3,1.3c-0.6,0.3-1.3,0.5-2,0.5c-0.8,0-1.4-0.2-2-0.5s-1-0.8-1.3-1.3c-0.1-0.2-0.2-0.5-0.3-0.7s-0.1-0.4-0.2-0.7
                      c0-0.2-0.1-0.5-0.1-0.9c0-0.3,0-0.7,0-1.1V37.3h-5.8c-0.8,0-1.4,0-1.8-0.1c-0.4,0-0.8-0.2-1.2-0.4c-0.5-0.3-0.9-0.6-1.2-1.2
                      c-0.3-0.5-0.5-1.1-0.5-1.8c0-0.7,0.2-1.3,0.5-1.8c0.3-0.5,0.7-0.9,1.2-1.2c0.4-0.2,0.8-0.3,1.2-0.4c0.4-0.1,1-0.1,1.8-0.1h19.3
                      c0.8,0,1.4,0,1.8,0.1c0.4,0.1,0.8,0.2,1.2,0.4c0.5,0.3,0.9,0.6,1.2,1.2c0.3,0.5,0.5,1.1,0.5,1.8c0,0.7-0.2,1.3-0.5,1.8
                      c-0.3,0.5-0.7,0.9-1.2,1.2c-0.4,0.2-0.8,0.3-1.2,0.4c-0.4,0-1,0.1-1.8,0.1H288.4z"/>
                  <path class="um5" d="M309.4,69.6c-0.6,0-1.2,0-1.8-0.1c-0.7-0.1-1.2-0.4-1.8-0.9c-0.5-0.5-0.8-1.1-0.9-1.8
                      c-0.1-0.7-0.1-1.3-0.1-1.8V35.1c0-0.6,0-1.2,0.1-1.8s0.4-1.2,0.9-1.8c0.5-0.5,1.1-0.8,1.8-0.9c0.7-0.1,1.3-0.1,1.8-0.1h16.8
                      c0.8,0,1.4,0,1.8,0.1c0.4,0.1,0.8,0.2,1.2,0.4c0.5,0.3,0.9,0.6,1.2,1.2c0.3,0.5,0.5,1.1,0.5,1.8c0,0.7-0.2,1.3-0.5,1.8
                      c-0.3,0.5-0.7,0.9-1.2,1.2c-0.4,0.2-0.8,0.3-1.2,0.4c-0.4,0-1,0.1-1.8,0.1h-13.8v9.2h11.1c0.8,0,1.4,0,1.8,0.1
                      c0.4,0.1,0.8,0.2,1.2,0.4c0.5,0.3,0.9,0.6,1.2,1.2s0.5,1.1,0.5,1.8c0,0.7-0.2,1.3-0.5,1.8s-0.7,0.9-1.2,1.2
                      c-0.4,0.2-0.8,0.3-1.2,0.4c-0.4,0-1,0.1-1.8,0.1h-11.1v9.5h13.8c0.8,0,1.4,0,1.8,0.1c0.4,0.1,0.8,0.2,1.2,0.4
                      c0.5,0.3,0.9,0.6,1.2,1.2c0.3,0.5,0.5,1.1,0.5,1.8c0,0.7-0.2,1.3-0.5,1.8s-0.7,0.9-1.2,1.2c-0.4,0.2-0.8,0.3-1.2,0.4
                      c-0.4,0-1,0.1-1.8,0.1H309.4z"/>
              </g>
              </svg>
          </div>
      </div>
  `  ;
      $unmuteBtnContainer = document.createElement("div");
      $unmuteBtnContainer.setAttribute("id", "unmuteBtn");
      $unmuteBtnContainer.setAttribute("class", "animTkEngage");
      $unmuteBtnContainer.setAttribute("data-title", "engage");
      $unmuteBtnContainer.innerHTML = unmuteHtml;
      if(unmuteEngage){
        $unmuteBtnContainer.style.display = "flex";
        $unmuteBtnContainer.style.zIndex = 1003;
      }
      var containerObj = document.querySelector(containerId);
      containerObj.appendChild($unmuteBtnContainer);
      addUnmuteBtnOnClick();
    }
  
    var addUnmuteBtnOnClick = function(){
      $unmuteBtnContainer.addEventListener('click', function () {
        $unmuteBtnContainer.style.display = 'none';
        mediaPlayer.muted = false;
        var el = document.querySelector(
          htmlObj + " #amimmoovplayer-" + counter + " .am-vol"
        );
        el.innerHTML = addSpeakerBtn("unmute");
      });
    }
  
  
    function addReplyEBtn(containerId) {
      var replayHtml =  `<div class="replay-svg">
      <!--?xml version="1.0" encoding="utf-8"?-->
      <!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 362.7 120.7" style="enable-background:new 0 0 362.7 120.7;" xml:space="preserve">
      <style type="text/css">
          .re-st0{opacity:0.75;fill:#A09F9F;}
          .re-st1{fill:none;stroke:#E5E5E5;stroke-width:7;stroke-miterlimit:10;}
          .re-st2{fill:#E5E5E5;}
          .re-st3{opacity:0.95;}
          .re-st4{fill:#FFFFFF;}
      </style>
      <path class="re-st0" d="M316.2,112.5H46.5c-22.2,0-40.4-18.2-40.4-40.4v-6.4c0-22.2,18.2-40.4,40.4-40.4h269.6
          c22.2,0,40.4,18.2,40.4,40.4v6.4C356.5,94.3,338.4,112.5,316.2,112.5z"></path>
      <path class="re-st1" d="M180.9,25.6c6.3,0,10.3,0,13.8,0c20.5,0,98.6,0.6,107.8-0.2c1.4-0.1,5.7-0.6,11.3,0c6.1,0.6,20.1,1.9,31.2,13
          c8,8,13,19.1,13,31.2v1.7c0,24.3-19.9,44.2-44.2,44.2h-265c-24.3,0-44.2-19.9-44.2-44.2v-1.7c0-24.3,19.9-44.2,44.2-44.2
          c25.8,0,33.4-0.4,79.8,0"></path>
      <path class="re-st2" d="M196.3,6.9V44c0,0-0.8,2.9-4,1.3l-24.7-17.2c0,0-2.7-1.9,0.2-5.4l25.5-18C193.2,4.7,195.7,3.4,196.3,6.9z"></path>
      <g class="re-st3">
          <path class="re-st4" d="M87.8,87.9c0,0.4,0,0.8,0,1.1c0,0.3,0,0.6-0.1,0.9c0,0.2-0.1,0.5-0.2,0.7c-0.1,0.2-0.2,0.4-0.3,0.7
              c-0.3,0.5-0.7,1-1.3,1.3c-0.6,0.3-1.3,0.5-2,0.5c-0.8,0-1.4-0.2-2-0.5c-0.6-0.3-1-0.8-1.3-1.3c-0.1-0.2-0.2-0.5-0.3-0.7
              c-0.1-0.2-0.1-0.4-0.2-0.7c0-0.2-0.1-0.5-0.1-0.9c0-0.3,0-0.7,0-1.1V58.3c0-0.6,0-1.2,0.1-1.8c0.1-0.7,0.4-1.2,0.9-1.8
              c0.5-0.5,1.1-0.8,1.8-0.9c0.7-0.1,1.3-0.1,1.8-0.1h10.7c2,0,3.8,0.3,5.4,1c1.6,0.6,2.9,1.5,4,2.6c1.1,1.1,1.9,2.4,2.5,3.8
              c0.6,1.5,0.9,3,0.9,4.6c0,1.2-0.2,2.3-0.5,3.3c-0.3,1.1-0.8,2-1.4,2.9c-0.6,0.9-1.4,1.7-2.2,2.4c-0.9,0.7-1.9,1.3-3,1.7l5.9,10.2
              c0.2,0.4,0.4,0.7,0.6,1c0.1,0.3,0.3,0.5,0.4,0.8c0.1,0.2,0.2,0.4,0.2,0.7c0,0.2,0.1,0.4,0.1,0.6c0,0.6-0.1,1.2-0.4,1.8
              c-0.3,0.6-0.8,1.1-1.5,1.4c-0.7,0.4-1.4,0.6-2,0.6c-0.5,0-1-0.1-1.3-0.2c-0.4-0.2-0.7-0.4-1-0.7c-0.3-0.3-0.6-0.6-0.8-1
              c-0.2-0.4-0.5-0.8-0.7-1.2l-7.3-12.7h-5.4V87.9z M95,70.8c0.8,0,1.6-0.1,2.3-0.4c0.7-0.2,1.3-0.6,1.7-1.1c0.5-0.5,0.8-1,1.1-1.6
              c0.3-0.6,0.4-1.3,0.4-2.1c0-0.8-0.1-1.5-0.4-2.1c-0.3-0.6-0.6-1.2-1.1-1.6c-0.5-0.5-1.1-0.8-1.7-1.1c-0.7-0.2-1.4-0.4-2.3-0.4h-7.3
              v10.3H95z"></path>
          <path class="re-st4" d="M123.2,92.9c-0.6,0-1.2,0-1.8-0.1c-0.7-0.1-1.2-0.4-1.8-0.9c-0.5-0.5-0.8-1.1-0.9-1.8
              c-0.1-0.7-0.1-1.3-0.1-1.8V58.3c0-0.6,0-1.2,0.1-1.8c0.1-0.7,0.4-1.2,0.9-1.8c0.5-0.5,1.1-0.8,1.8-0.9c0.7-0.1,1.3-0.1,1.8-0.1H140
              c0.8,0,1.4,0,1.8,0.1c0.4,0.1,0.8,0.2,1.2,0.4c0.5,0.3,0.9,0.6,1.2,1.2c0.3,0.5,0.5,1.1,0.5,1.8c0,0.7-0.2,1.3-0.5,1.8
              c-0.3,0.5-0.7,0.9-1.2,1.2c-0.4,0.2-0.8,0.3-1.2,0.4c-0.4,0-1,0.1-1.8,0.1h-13.8v9.2h11.1c0.8,0,1.4,0,1.8,0.1
              c0.4,0.1,0.8,0.2,1.2,0.4c0.5,0.3,0.9,0.6,1.2,1.2c0.3,0.5,0.5,1.1,0.5,1.8c0,0.7-0.2,1.3-0.5,1.8c-0.3,0.5-0.7,0.9-1.2,1.2
              c-0.4,0.2-0.8,0.3-1.2,0.4c-0.4,0-1,0.1-1.8,0.1h-11.1V86H140c0.8,0,1.4,0,1.8,0.1c0.4,0.1,0.8,0.2,1.2,0.4
              c0.5,0.3,0.9,0.6,1.2,1.2c0.3,0.5,0.5,1.1,0.5,1.8c0,0.7-0.2,1.3-0.5,1.8c-0.3,0.5-0.7,0.9-1.2,1.2c-0.4,0.2-0.8,0.3-1.2,0.4
              c-0.4,0-1,0.1-1.8,0.1H123.2z"></path>
          <path class="re-st4" d="M154.6,91.3c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.2-0.1-0.4-0.2-0.7c0-0.2-0.1-0.5-0.1-0.9c0-0.3,0-0.7,0-1.1V58.3
              c0-0.6,0-1.2,0.1-1.8c0.1-0.7,0.4-1.2,0.9-1.8c0.5-0.5,1.1-0.8,1.8-0.9c0.7-0.1,1.3-0.1,1.8-0.1h10.6c2,0,3.9,0.3,5.5,1
              c1.6,0.7,3,1.5,4.1,2.6c1.1,1.1,1.9,2.4,2.5,3.9c0.6,1.5,0.9,3.1,0.9,4.7s-0.3,3.2-0.9,4.7c-0.6,1.5-1.4,2.8-2.5,3.9
              c-1.1,1.1-2.5,2-4.1,2.6c-1.6,0.7-3.4,1-5.5,1h-7.6v9.8c0,0.4,0,0.8,0,1.1c0,0.3,0,0.6-0.1,0.9c0,0.2-0.1,0.5-0.2,0.7
              s-0.2,0.4-0.3,0.7c-0.3,0.5-0.7,1-1.3,1.3c-0.6,0.3-1.3,0.5-2,0.5c-0.8,0-1.4-0.2-2-0.5C155.4,92.2,154.9,91.8,154.6,91.3z
              M168.9,71.3c0.9,0,1.6-0.1,2.3-0.4c0.7-0.3,1.3-0.6,1.8-1.1c0.5-0.5,0.9-1,1.1-1.7c0.3-0.7,0.4-1.4,0.4-2.2c0-0.8-0.1-1.5-0.4-2.2
              c-0.3-0.7-0.6-1.2-1.1-1.7c-0.5-0.5-1.1-0.8-1.8-1.1s-1.5-0.4-2.3-0.4h-7.1v10.8H168.9z"></path>
          <path class="re-st4" d="M195.8,92.9c-0.6,0-1.2,0-1.8-0.1c-0.7-0.1-1.2-0.4-1.8-0.9c-0.5-0.5-0.8-1.1-0.9-1.8
              c-0.1-0.7-0.1-1.3-0.1-1.8V58.6c0-0.4,0-0.8,0-1.1c0-0.3,0-0.6,0.1-0.9c0-0.2,0.1-0.5,0.2-0.7c0.1-0.2,0.2-0.4,0.3-0.7
              c0.3-0.5,0.7-1,1.3-1.3c0.6-0.3,1.3-0.5,2-0.5c0.8,0,1.4,0.2,2,0.5c0.6,0.3,1,0.8,1.3,1.3c0.1,0.2,0.2,0.5,0.3,0.7
              c0.1,0.2,0.1,0.4,0.2,0.7c0,0.2,0.1,0.5,0.1,0.9c0,0.3,0,0.7,0,1.1V86h13.4c0.8,0,1.4,0,1.8,0.1c0.4,0.1,0.8,0.2,1.2,0.4
              c0.5,0.3,0.9,0.6,1.2,1.2c0.3,0.5,0.5,1.1,0.5,1.8c0,0.7-0.2,1.3-0.5,1.8c-0.3,0.5-0.7,0.9-1.2,1.2c-0.4,0.2-0.8,0.3-1.2,0.4
              s-1,0.1-1.8,0.1H195.8z"></path>
          <path class="re-st4" d="M253.8,87c0.2,0.5,0.3,1,0.5,1.4c0.1,0.4,0.2,0.9,0.2,1.3c0,0.4-0.1,0.8-0.2,1.2s-0.4,0.7-0.7,1.1
              c-0.4,0.4-0.8,0.7-1.3,0.9c-0.5,0.2-1,0.3-1.5,0.3c-0.8,0-1.5-0.2-2.1-0.7c-0.2-0.1-0.3-0.3-0.4-0.4c-0.1-0.2-0.3-0.3-0.4-0.6
              c-0.1-0.2-0.2-0.5-0.4-0.8c-0.1-0.3-0.3-0.7-0.4-1.1l-1.3-3.6h-15.3l-1.3,3.6c-0.2,0.4-0.3,0.8-0.4,1.1c-0.1,0.3-0.3,0.6-0.4,0.8
              c-0.1,0.2-0.2,0.4-0.4,0.6c-0.1,0.2-0.3,0.3-0.4,0.4c-0.6,0.5-1.3,0.7-2.1,0.7c-0.5,0-1-0.1-1.5-0.3c-0.5-0.2-0.9-0.5-1.3-0.9
              c-0.3-0.4-0.6-0.7-0.7-1.1s-0.2-0.8-0.2-1.2c0-0.4,0.1-0.8,0.2-1.3c0.1-0.4,0.3-0.9,0.5-1.4l11.3-30c0.3-0.7,0.5-1.3,0.8-1.6
              s0.5-0.7,0.8-1c0.4-0.3,0.8-0.6,1.2-0.7c0.4-0.1,1-0.2,1.5-0.2c0.6,0,1.1,0.1,1.5,0.2c0.4,0.1,0.8,0.4,1.2,0.7
              c0.3,0.3,0.6,0.6,0.8,1s0.5,0.9,0.8,1.6L253.8,87z M232.9,79.5h10.5l-5.3-14.2L232.9,79.5z"></path>
          <path class="re-st4" d="M270,93.1c-0.8,0-1.4-0.2-2-0.5c-0.6-0.3-1-0.8-1.3-1.3c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.2-0.1-0.4-0.2-0.7
              c0-0.2-0.1-0.5-0.1-0.9c0-0.3,0-0.7,0-1.1V77.5l-8.9-17.7c-0.2-0.4-0.4-0.7-0.5-1c-0.1-0.3-0.2-0.5-0.3-0.8
              c-0.1-0.2-0.1-0.4-0.2-0.6c0-0.2,0-0.4,0-0.6c0-0.6,0.2-1.1,0.5-1.7c0.3-0.5,0.8-1,1.5-1.3c0.3-0.1,0.6-0.3,0.9-0.3
              c0.3-0.1,0.6-0.1,0.9-0.1c0.7,0,1.3,0.2,1.8,0.6c0.2,0.1,0.3,0.3,0.5,0.4c0.1,0.1,0.3,0.3,0.4,0.5c0.1,0.2,0.3,0.4,0.4,0.7
              c0.1,0.3,0.3,0.6,0.5,1l6.3,12.7l6.3-12.7c0.2-0.4,0.3-0.7,0.5-1c0.1-0.3,0.3-0.5,0.4-0.7c0.1-0.2,0.3-0.4,0.4-0.5
              c0.1-0.1,0.3-0.3,0.5-0.4c0.5-0.4,1.1-0.6,1.8-0.6c0.3,0,0.6,0,0.9,0.1c0.3,0.1,0.6,0.2,0.9,0.3c0.6,0.3,1.1,0.7,1.5,1.3
              c0.3,0.5,0.5,1.1,0.5,1.7c0,0.2,0,0.4,0,0.6c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.2-0.2,0.5-0.3,0.8c-0.1,0.3-0.3,0.6-0.5,1l-8.9,17.7
              v10.4c0,0.4,0,0.8,0,1.1c0,0.3,0,0.6-0.1,0.9c0,0.2-0.1,0.5-0.2,0.7c-0.1,0.2-0.2,0.4-0.3,0.7c-0.3,0.5-0.7,1-1.3,1.3
              C271.5,92.9,270.8,93.1,270,93.1z"></path>
      </g>
      </svg>
  </div>
  `  ;
      $replyBtnContainer = document.createElement("div");
      $replyBtnContainer.setAttribute("id", "replayBtn");
      $replyBtnContainer.setAttribute("class", "animTkEngage");
      $replyBtnContainer.setAttribute("data-title", "engage");
      $replyBtnContainer.innerHTML = replayHtml;
      var containerObj = document.querySelector(containerId);
      containerObj.appendChild($replyBtnContainer);
      
      $replyBtnContainer.addEventListener('click', function () {
        $replyBtnContainer.style.display = 'none';        
        $unmuteBtnContainer.style.visibility = 'none';
        replayFirstVideo();
        rmActiveFromAllBtns();
        $container.removeAttribute("style");
        if($replayInheritance){
          $replayInheritance();
        }
        mediaPlayer.muted = false;
      });
    }
  
    function addReplayBtn() {
      return `<?xml version="1.0" encoding="utf-8"?>
          <!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 99.2 99.2" style="enable-background:new 0 0 99.2 99.2;" xml:space="preserve">
          <style type="text/css">
              .st0{fill:#FFFFFF;}
              .st1{fill:#0099CC;}
          </style>
          <g id="Layer_2">
              <circle class="st0" cx="49.6" cy="49.6" r="49.6"/>
          </g>
          <g id="Layer_1">
              <path class="st1" d="M25.1,49.7l2.4-16.1c0,0,0.6-2.9,3.1-0.6l2.6,2.4c0,0,7.1-10.8,22.9-6.8c0,0,19.4,4.9,18,24
                  c0,0,0.5,19.3-20.6,23.5c0,0-10.6,1.6-18.1-5.1c0,0-2.5-1.5,0-3l4.8-4.8c0,0,2-1.9,3.4,0.3c0,0,10.8,5.3,16.8-2.6
                  c0,0,7.4-9.1-0.3-17.5c0,0-8.9-10-19.1-0.1l3,3.5c0,0,0.5,1.5-1.5,1.4l-15.3,2.8C27.1,50.8,25.3,51.8,25.1,49.7z"/>
          </g>
          </svg>`;
    }
  
    var addMainContainer = function(containerId) {
      $container = document.createElement("div");
      $container.setAttribute("class", "am-player-container");
      $playContainer = document.createElement("div");
      $playContainer.setAttribute("class", "play-container");
      $playContainer.innerHTML =
        "<i class='fa fa-repeat fa fa-repeat fa-3x' aria-hidden='true'></i>";
      var containerObj = document.querySelector(containerId);
      containerObj.appendChild($playContainer);
      if (!isRollover) {
        menuHover(true);
      }
    };
  
    var addButtons = function(containerId){
      if(buttons){
        if($buttonPostion){
          $buttonsWrapper = document.createElement("div");
          $buttonsWrapper.setAttribute("class", "ace-btn-wrapper sticky");
          document.body.appendChild($buttonsWrapper);
        }
        for(var btn of buttons){
          if(!btn.type){
            var button = document.createElement("div");
            button.setAttribute("class", "ace-btn");
            button.setAttribute("id", `${btn.target.replace('#','ace-btn-')}`);
            button.setAttribute("data-name", btn.name.replace(' ','-').toLowerCase());
            if(btn.default){
              button.classList.add("active");
            }
            button.setAttribute("data-target", btn.target);
            button.innerHTML = btn.name;
            if($buttonPostion){
              $buttonsWrapper.appendChild(button);
            }else{
              $container.appendChild(button);
            }
            if(!btn.default){
              document.querySelector(btn.target).style.visibility = "hidden";
            }
          }else{
            var button = document.createElement("div");
            $style = document.createElement("style");
            var hoverStyle = '';
            if(btn.style.hover){
              hoverStyle = `
              .ace-btn-${btn.name.replace(' ','-').toLowerCase()}:hover{
                background: ${btn.style.hover.background};
                color: ${btn.style.hover.color};
              }`
            }
            $style.innerHTML = `
              ${$style.innerHTML}
              .ace-btn-${btn.name.replace(' ','-').toLowerCase()}{
                background: ${btn.style.background};
                color: ${btn.style.color};
              }
              ${hoverStyle}
            `
            console.log(btn.name.replace(' ','-').toLowerCase())
            button.setAttribute("class", `ace-btn ace-btn-${btn.name.replace(' ','-').toLowerCase()}`);
            button.setAttribute("data-type", btn.type);
            button.setAttribute("data-link", btn.link);
            button.setAttribute("data-name", btn.name.replace(' ','-').toLowerCase());
            button.setAttribute("id", "clickThroughBtn");
            button.innerHTML = btn.name;
            if($buttonPostion){
              $buttonsWrapper.appendChild(button);
            }else{
              $container.appendChild(button);
            }
            document.body.appendChild($style);
          }
        }
      }
      // var $container = document.createElement("div");
      // $container.setAttribute("class", "am-player-container");
      // $container.
      addOnclickButton();
    }
  
    var rmActiveFromAllBtns = function(){
      var dataTargets = [];
      //$unmuteBtnContainer.click();
      Object.keys($buttonsContainer).forEach(function (key){
        if($buttonsContainer[key].getAttribute('data-target')){
          dataTargets.push($buttonsContainer[key].getAttribute('data-target'));
        }
        $buttonsContainer[key].classList.remove("active");
        dataTargets.forEach((trg, index)=>{
          if(trg != $vdoContainer){
            document.querySelector(trg).style.visibility = "hidden";
            document.querySelector(trg).style.zIndex = 0;
          }
        }) 
      });
    }
  
    function addOnclickButton(){
      $buttonsContainer = document.getElementsByClassName("ace-btn");
      Object.keys($buttonsContainer).forEach(function (key){
        $buttonsContainer[key].addEventListener('click', function () {
          currentTab = this;
          $unmuteBtnContainer.click();
          mediaPlayer.muted = false;
          if($buttonsContainer[key].getAttribute('data-type') != "link" ){
            setTimeout(function(){
              currentTab.classList.add("active");
            },0)
            rmActiveFromAllBtns();
            document.querySelector(this.getAttribute('data-target')).style.visibility = "visible";
            document.querySelector(this.getAttribute('data-target')).style.zIndex = 1;
            if($buttonsContainer[key].getAttribute('data-target') != $vdoContainer ){
              var el = document.querySelector(
                htmlObj + " #amimmoovplayer-" + counter + " .am-pause"
              );
              el.innerHTML = addPlayPauseBtn("play");
              mediaPlayer.pause();
              closeControls();
              addClass(".am-player-inner-container", "play-highlight");
              setTimeout(function(){
                if(document.getElementById(`ace-btn-${$vdoContainer.replace('#','')}`)){
                document.getElementById(`ace-btn-${$vdoContainer.replace('#','')}`).classList.remove('active');
                }
              },0)
            }else{
              replayFirstVideo();
            }
            //reSetProgress();
          }else{
            window.open($buttonsContainer[key].getAttribute('data-link'), '_blank');
          }
        }, false);
      });
    }
  
    function jumpOnFeature(){
      if(jump.internal){
        Object.keys($buttonsContainer).forEach(function (key){
          if($buttonsContainer[key].getAttribute('data-target') == jump.internal ){
            $buttonsContainer[key].click();
          }
        });
      }else{
        jump.external();
      }
    }

    function menuHover(autoHide = false, time = 1000) {
      if (rollOverDone) {
        if ($container.classList.contains("show-control")) {
          $container.classList.remove("show-control");
        } else {
          $container.classList.add("show-control");
        }
        if (autoHide) {
          setTimeout(function() {
            $container.classList.remove("show-control");
          }, time);
        }
      }
    }
  
    function addClass(selector, cls) {
      var elem = document.querySelectorAll(selector);
  
      elem.forEach(function(userItem, index) {
        userItem.classList.add(cls);
      });
    }
  
    function removeClass(selector, cls) {
      var elem = document.querySelectorAll(selector);
  
      elem.forEach(function(userItem, index) {
        userItem.classList.remove(cls);
      });
    }
  
    function addMenuOnHover() {
      var el = document.querySelector("video");
      var timer;
  
      el.addEventListener("mouseover", function(e) {
        rollOverDone = true;
        showMenu();
      });
      el.addEventListener("mouseout", function(e) {
        hideMenu();
      });
      el.addEventListener("click", function(e) {
        e.stopPropagation();
        menuHover();
      });
  
      $playerContainer.addEventListener("mouseover", function(e) {
        rollOverDone = true;
        showMenu();
      });

      $playerContainer.addEventListener("click", function(e) {
        rollOverDone = true;
        showMenu();
      });
  
      $playerContainer.addEventListener("mouseout", function(e) {
        hideMenu();
      });
      
      function showMenu() {
        if(rollover){
          document.querySelector(".anim-rollover-container").style.display = "none";
        }
        clearInterval(rollOverTimer);
        $container.classList.add("show-control");
        if (timer) {
          clearTimeout(timer);
        }
      }
  
      function hideMenu() {
        timer = setTimeout(function() {
          $container.classList.remove("show-control");
        }, 1000);
      }
    }
  

    
    
    function addRollOverEffect(mainContainer) {
      if(rollover){
          var spanStr = `<span class="txt">${mobileAndTabletcheck() ? rollover.mobText[0] : rollover.text[0]}</span><span class="txt">${mobileAndTabletcheck() ? rollover.mobText[1] : rollover.text[1]}</span>`;
  
          $rollOverContainer = createElement("div", ["anim-rollover-container"]);
  
          var rollInner = `<div class="rollover-inner am-bar-container animTkEngage" data-title="engage"><img src="${baseUrl}/player/icons/speaker-animated.gif"/>${spanStr}</div>`;
  
          $rollOverContainer.innerHTML = rollInner;
          document.querySelector(mainContainer).appendChild($rollOverContainer);

          var quotes = $(".txt");
          var quoteIndex = -1;
          function showNextQuote() {
              ++quoteIndex;
              quotes.eq(quoteIndex % quotes.length)
                  .fadeIn(1000)
                  .delay(1000)
                  .fadeOut(1000, showNextQuote);
          }

          showNextQuote();
          // if(mobileAndTabletcheck()){
          //   animateRolloverText(rollover.mobText, 1);
          // }else{
          //   animateRolloverText(rollover.text, 1);
          // }
      }
    }
  
    function animateRolloverText(rollOverText, textCount) {
      rollOverTimer = setInterval(function() {
        if (textCount >= rollOverText.length) {
          textCount = 0;
        }
        document.querySelector(
          ".txt"
        ).innerHTML = `${rollOverText[textCount]}`;
        textCount++;
      }, 3000);
    }
  
    function createElement(elemType, clsArr, txt) {
      var el = document.createElement(elemType);
      for (let index = 0; index < clsArr.length; index++) {
        el.classList.add(clsArr[index]);
      }
  
      if (txt) {
        el.textContent = txt;
      }
      return el;
    }
    var addControls = function(containerId, index) {
      var $innerContainer = document.createElement("div");
      $innerContainer.setAttribute("class", "am-player-inner-container");
      $innerContainer.setAttribute("id", "amimmoovplayer-" + index);
      $innerContainer.setAttribute("data-count", index);
  
      var $playButton = document.createElement("div");
      $playButton.setAttribute("class", "am-play-button");
  
      $playButton.innerHTML = addPlayPauseBtn("play");
  
      $timer = document.createElement("div");
      $timer.setAttribute("class", "am-durration");
      $timer.innerHTML = "00:00";
  
      var $title = document.createElement("div");
      $title.setAttribute("class", "am-title");
      $title.innerHTML = videos ? videos[index].title : "Video " + index;
  
      var $barContainer = document.createElement("div");
      $barContainer.setAttribute("class", "am-bar-container");
  
      $progress = document.createElement("div");
      $progress.setAttribute("class", "am-progress");
  
      $barContainer.appendChild($progress);
  
      var $pause = document.createElement("div");
      $pause.setAttribute("class", "am-pause");
      $pause.innerHTML = addPlayPauseBtn("pause");
  
      var $vol = document.createElement("div");
      $vol.setAttribute("class", "am-vol");
      $vol.innerHTML = addSpeakerBtn("mute");
  
      $innerContainer.appendChild($timer);
      $innerContainer.appendChild($title);
      $innerContainer.appendChild($barContainer);
      $innerContainer.appendChild($vol);
      $innerContainer.appendChild($pause);
      $innerContainer.appendChild($playButton);
  
      $container.appendChild($innerContainer);
  
      var containerObj = document.querySelector(containerId);
      containerObj.appendChild($container);
  
      $replay = document.querySelector(".fa-repeat");
      if (index == 0) {
        $animmoovSelector(".am-play-button").style.display = "none";
        $animmoovSelector("#amimmoovplayer-0").style.width = "200px";
        $animmoovSelector(".am-durration").style.display = "block";
        $animmoovSelector(".am-title").style.display = "block";
        $animmoovSelector(".am-vol").style.display = "block";
        $animmoovSelector(".am-pause").style.display = "block";
        innerContainerWidth = $innerContainer.offsetWidth;
      } else {
        $animmoovSelector("#amimmoovplayer-" + index).classList.add(
          "play-highlight"
        );
      }
      $progress.style.width = 0 + "px";
    };

    function getVideoId(){
      return videos[counter].id
    }
    
  
    return {
      init: function(playerDomObj, PD) {
        htmlObj = playerDomObj;
        mediaPlayer = document.querySelector(playerDomObj + " video");
        mediaPlayer.controls = false;
        trackUrl = mediaPlayer.getAttribute("data-track-url");
        $replayInheritance = PD.replayInheritance || false;
        $buttonPostion = PD.buttonPostion || false;
        $vdoContainer = PD.vdoContainer || false;
        videos = PD.videos;
        logo = PD.logo || false;
        buttons = PD.buttons || false;
        mobile = PD.mobile || true;
        unmuteEngage = PD.unmuteEngage || false;
        sReplay = PD.replay || false;
        numofvideos = PD.numofvideos || 1;
        jump = PD.jump || false; 
        rollover = PD.rollover || false;
        $trigger = document.getElementById("trigger") || false;

        

        // isRollover = mediaPlayer.getAttribute("data-rollover");
        // rollOverText = mediaPlayer.getAttribute("data-rollover-text");
        $playerContainer = document.querySelector(htmlObj);
        $playerContainer.style.backgroundColor = "#000000";
        $playerContainer.style.overflow = "hidden";
        addUnmute(playerDomObj);
        //playerContainer.append(addUnmute());
        addRollOverEffect(playerDomObj);
        addMainContainer(playerDomObj);
        for (let index = 0; index < numofvideos; index++) {
          addControls(playerDomObj, index);
        }
  
        //mediaPlayer.setAttribute("data-title", videos[0].title);
        addMuteUnmute(playerDomObj);
        addPlayPause(playerDomObj);
        addTimeUpdate();
        addPlayButtonClick();
        addMenuOnHover();
        replay();
        addButtons(playerDomObj);
        if(sReplay){
          addReplyEBtn(playerDomObj);
        }
        rolloverInit();
      },
      mute: function() {
        mediaPlayer.muted = true;
        var el = document.querySelector(
          htmlObj + " #amimmoovplayer-" + counter + " .am-vol"
        );
        el.innerHTML = addSpeakerBtn("mute");
      },
      unmute: function() {
        mediaPlayer.muted = false;
        var el = document.querySelector(
          htmlObj + " #amimmoovplayer-" + counter + " .am-vol"
        );
        el.innerHTML = addSpeakerBtn("unmute");
        $unmuteBtnContainer.style.display = 'none';
      },
      pause: function() {
        var el = document.querySelector(
          htmlObj + " #amimmoovplayer-" + counter + " .am-pause"
        );
        el.innerHTML = addPlayPauseBtn("play");
        mediaPlayer.pause();
      },
      play: function() {
        var el = document.querySelector(
          htmlObj + " #amimmoovplayer-" + counter + " .am-pause"
        );
        el.innerHTML = addPlayPauseBtn("pause");
        mediaPlayer.play();
      },
      replay: function() {
        mediaPlayer.pause();
        mediaPlayer.currentTime = "0";
        mediaPlayer.play();
      },
      reset: function(){
        rmActiveFromAllBtns();
        replayFirstVideo();
        $unmuteBtnContainer.click();
        $unmuteBtnContainer.style.display = 'none';
      },
      replayFirstVideo: function(){
        replayFirstVideo();
      },
      replayActive: function(){
        setTimeout(() => {          
          $replyBtnContainer.style.display = 'flex';
          $unmuteBtnContainer.style.display = 'none';
          $container.style.display = 'none';
          rmActiveFromAllBtns();
          mediaPlayer.pause();
        }, 0);
      },
      hideFeatures: function(){
        rmActiveFromAllBtns();
      },
      getVideoId: getVideoId
    };
  })();
  