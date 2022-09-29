var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function startCapturing() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    if (content == "take my selfie") {
        console.log("Taking your selfie in 5 seconds.");
        document.getElementById("textbox").innerHTML = content
        speak();
    }

}

function speak() {
    var synth = window.speechSynthesis;
    //speakData = document.getElementById("textbox").value;
    speakData = "Taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function () {
        takeSnapshot();
        save();
    }, 5000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_img" src="' + data_uri + '">';
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();

}
