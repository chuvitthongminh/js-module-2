function upDate(previewPic){
    console.log("Sự kiện hover đẵ kích hoạt! ");

    console.log("Alt của ảnh: " + previewPic.alt);
    console.log("Src của ảnh: " + previewPic.src);

    var imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
       
}

function undo(){
    var imageDiv = document.getElementById("image");
     imageDiv.style.backgroundImage = "url('')";
      imageDiv.innerHTML = "Hover over an image below to display here.";
}