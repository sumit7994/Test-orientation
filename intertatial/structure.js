

var animResourcePath = "https://ads.prov9.studio/1683812660466-intertatial"
var animStructure = `<div id="wrapper"></div>`;
				

var animWrapper = document.createElement('div');
animWrapper.id = "anim-wrapper"
animWrapper.style.width = "100%"
animWrapper.style.height = "100%"
animWrapper.innerHTML = animStructure;
document.body.insertAdjacentElement('afterbegin', animWrapper);

var adcnfscr = document.createElement('script');
adcnfscr.src = animResourcePath+'/js/prov9-ad-config.js';
document.body.append(adcnfscr);

var animscript = ["https://cdn.prov9.studio/intertital/js/plugins/jquery.ios-shake.js","https://cdn.prov9.studio/intertital/js/plugins/jquery.ui.shake.js","https://cdn.prov9.studio/intertital/js/plugins/jquery.mobile.js","https://cdn.prov9.studio/intertital/js/plugins/jquery-ui.min.js","https://cdn.prov9.studio/intertital/js/plugins/jquery.ui.touch-punch.min.js",'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js','https://maps.google.com/maps/api/js?key=AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw',"https://cdn.prov9.studio/intertital/js/plugins/clap.js","https://cdn.prov9.studio/player.v2/player.js","https://cdn.prov9.studio/player.v2/browser-tab-visibility.js","https://cdn.prov9.studio/intertital/js/plugins/wow.js","https://cdn.prov9.studio/intertital/js/ad-script.js",animResourcePath+"/hotspots/js/hotspot-config.js","https://cdn.prov9.studio/hotspots/js/script.js"]

const findAdConfigInter = setInterval(findAdConfig, 300);

function findAdConfig() {
    if(adConfig){
        clearInterval(findAdConfigInter);
        animscript.forEach(function(callpath){
            var animStag = document.createElement('script');
            animStag.src = callpath;
            document.body.append(animStag);
        });
    }
}


