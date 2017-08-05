function determineHeightAndThenDrawPyramid() {

    heightStr = document.getElementById("height").value;
    height = parseInt(heightStr);
    drawPyramid(height);
}

var drawButton = document.getElementById("drawButton")
drawButton.addEventListener("click", function(event) {
  determineHeightAndThenDrawPyramid()
});

function drawPyramid(height) {

     var pyramid = document.getElementById("pyramid");
     pyramid.innerHTML = "";

     for (var row = 0; row < height; row++) {
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += ".";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += "#";
         }

        textElem = document.createTextNode(rowStr);
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        document.getElementById("pyramid").appendChild(rowElem);
    }
}
