"use strict";
var Recording = function (cb) {
    var recorder = null;
    var recording = true;
    var audioInput = null;
    var volume = null;
    var audioContext = null;
    var callback = cb;
    navigator.getUserMedia =
        navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;
    if (navigator.getUserMedia) {
        navigator.getUserMedia({ audio: true }, function (e) {
            //success
            var AudioContext = window.AudioContext || window.webkitAudioContext;
            audioContext = new AudioContext();
            volume = audioContext.createGain(); // creates a gain node
            audioInput = audioContext.createMediaStreamSource(e); // creates an audio node from the mic stream
            audioInput.connect(volume); // connect the stream to the gain node
            recorder = audioContext.createScriptProcessor(2048, 1, 1);
            recorder.onaudioprocess = function (e) {
                if (!recording)
                    return;
                var left = e.inputBuffer.getChannelData(0);
                //var right = e.inputBuffer.getChannelData(1);
                callback(new Float32Array(left));
            };
            volume.connect(recorder); // connect the recorder
            recorder.connect(audioContext.destination);
        }, function (e) {
            //failure
            alert("Error capturing audio.");
        });
    }
    else {
        alert("getUserMedia not supported in this browser.");
    }
};


