Webcam.set({
    width:400,
    height:350,
    image_format: 'jpg',
    jpg_quality:100
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{

Webcam.snap(function(data_uri){

    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});

}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2VlzfzTZo/model.json',modelLoaded);

function modelLoaded() {

    console.log('The model is loaded!!!');

}