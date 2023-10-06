window.frameElement.parentNode.style.width = window.top.document.documentElement.clientWidth+"px";
window.frameElement.parentNode.style.height = window.top.document.documentElement.clientHeight+"px";
window.frameElement.parentNode.style.border = "0px";
window.frameElement.style.width = window.top.document.documentElement.clientWidth+"px";
window.frameElement.style.height = window.top.document.documentElement.clientHeight+"px";
window.frameElement.style.position = "fixed";
window.frameElement.style.top = "0";
window.frameElement.style.left = "0";
window.frameElement.style.zIndex = "2777777";

setTimeout(function(){
	//window.frameElement.parentNode.remove();
}, 20000);

var animStructure = `<div id="wrapper"><div id="bg-exit"></div></div>`;		
var closeBtn = document.createElement('img');
closeBtn.id = "close-button";
closeBtn.style.width = "24px";
closeBtn.style.height = "24px";
closeBtn.style.position = "fixed";
closeBtn.style.top = "10px";
closeBtn.style.right = "10px";
closeBtn.style.zIndex = "2777777";
closeBtn.src = "https://cdn.prov9.studio/icons/close.svg";
closeBtn.addEventListener("click", function(){
	window.frameElement.parentNode.remove();
});
var animWrapper = document.createElement('div');
animWrapper.id = "anim-wrapper"
animWrapper.style.width = "100%"
animWrapper.style.height = "100vh"
animWrapper.innerHTML = animStructure;
document.body.insertAdjacentElement('afterbegin', animWrapper);
document.body.insertAdjacentElement('afterbegin', closeBtn);


var baseUrl = "https://ads.prov9.studio/1683812660466-intertatial"
// var baseUrl = ""
var forHeads = [
    {type:"css", link:baseUrl+"/css/jquery.mobile.css"},
    {type:"css", link:baseUrl+"/css/fonts.css"},
    {type:"css", link:baseUrl+"/css/style.css"},
    {type:"css", link:baseUrl+"/css/animate.css"},
    {type:"css", link:"https://cdn.prov9.studio/hotspot/desktop/style.css"},
    {type:"css", link:baseUrl+"/player/player.css?ver=1.1"},
    {type:"script", link:"https://s0.2mdn.net/ads/studio/Enabler.js"},
    {type:"script", link:baseUrl+"/js/jquery.min.js"},
]

var forBodys = [
    {type:"script", link:baseUrl+"/js/jquery.ios-shake.js"},
    {type:"script", link:baseUrl+"/js/jquery.ui.shake.js"},
    {type:"script", link:baseUrl+"/js/jquery.mobile.js"},
    {type:"script", link:baseUrl+"/js/jquery-ui.min.js"},
    {type:"script", link:baseUrl+"/js/jquery.ui.touch-punch.min.js"},
    {type:"script", link:baseUrl+"/js/clap.js"},
    {type:"script", link:baseUrl+"/player/player.js"},
    {type:"script", link:baseUrl+"/player/browser-tab-visibility.js"},
    {type:"script", link:baseUrl+"/js/wow.js"},
    {type:"script", link:baseUrl+"/js/prov9-ad-config.js"},
    {type:"script", link:baseUrl+"/js/ad-script.js"},
    {type:"script", link:"https://cdn.prov9.studio/rich-media/js/enabler.js"},
    {type:"script", link:"https://cdn.prov9.studio/track/anim.js"},
    {type:"script", link:baseUrl+"/hotspots/js/hotspot-config.js"},
    {type:"script", link:"https://cdn.prov9.studio/hotspot/desktop/script.js"},    
]

forHeads.forEach((element, idx) => {
    if(element.type == "script") {
        var script = document.createElement('script');
        script.id = 'id'+idx;
        script.src = element.link;
        document.head.appendChild(script);
    }
    if(element.type == "css") {
        var link = document.createElement('link');
        link.id = 'id'+idx;
        link.rel = 'stylesheet';
        link.href = element.link;
        document.head.appendChild(link);
    }
});



forBodys.forEach((element, idx) => {
    var script = document.createElement('script');
    script.id = 'id'+idx;
    script.src = element.link;
    document.body.appendChild(script);
});