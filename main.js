Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
Webcam.attach('#camera')
function take_snapshot() {
     Webcam.snap(function(data_uri) {
          document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; }); }
          classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uKLwMaOdD/model.json',modelLoaded);
          function modelLoaded(){
               console.log("model Loaded")
               
                        }
        
          function check(){
img=document.getElementById("captured_image");
classifier.classify(img,gotResult)

         }
         
          function gotResult(error,results)
          {
document.getElementById("result_emotion_name").innerHTML=results[0].label;
document.getElementById("result_emotion_name2").innerHTML=results[1].label;
prediction1=results[0].label;
prediction2=results[1].label;
if(prediction1=="amazing")
{
     document.getElementById("update_emoji").innerHTML="&#128076;";

}
if(prediction1=="victory")
{
     document.getElementById("update_emoji").innerHTML="&#9996;";

          }
          if(prediction1=="best")
{
     document.getElementById("update_emoji").innerHTML="&#128077;";
}
if(prediction2=="amazing")
{
     document.getElementById("update_emoji2").innerHTML="&#128076;";
}
if(prediction2=="victory")
{
     document.getElementById("update_emoji2").innerHTML="&#9996;;";
}
if(prediction2=="best")
{
     document.getElementById("update_emoji2").innerHTML="&#128077;";
}
          }