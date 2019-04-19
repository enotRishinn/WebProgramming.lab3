
function createQuoteHTML() {

  var canvas = document.createElement("canvas");
  canvas.width = "600";
  canvas.height = "400";
  document.body.appendChild(canvas);
  drawingImage(canvas);


  var saveButton = document.createElement("button");
  saveButton.textContent = "Сохранить коллаж";
  saveButton.style.margin = "2%"
  saveButton.style.padding = "1%";
  saveButton.style.display = "flex";
  saveButton.onclick = function() {

  }
  document.body.appendChild(saveButton);
}

function drawingImage(canvas) {

  var context = canvas.getContext("2d");
  var collections = [762960, 1538121, 162468, 357786, 1346770, 1075856, 162232];
  var index;
  var num;

  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {

      num = collections[Math.floor(Math.random() * collections.length)];
      index = collections.indexOf(num);
      collections.splice(index, 1);

      var img = new Image();
        img.onload = (function(i, j, img) {
            return function() {
            context.drawImage(img, i*300, j*200);
              }
          })(i, j, img);
          img.src = "https://source.unsplash.com/collection/"+ num + "/300x200";
      }
  }
}




createQuoteHTML();
