
function createQuoteHTML() {

  var canvas = document.createElement("canvas");
  canvas.width = "600";
  canvas.height = "400";
  document.body.appendChild(canvas);
  drawingImage(canvas);


  var quoteButton = document.createElement("button");
  quoteButton.textContent = "Сгенерировать новый коллаж с цитатой";
  quoteButton.style.padding = "1%";
  quoteButton.style.margin = "2%";
  quoteButton.onclick = function() {

  }
  document.body.appendChild(quoteButton);

  var saveButton = document.createElement("button");
  saveButton.textContent = "Сохранить коллаж";
  saveButton.style.margin = "2%"
  saveButton.style.padding = "1%";
  saveButton.onclick = function() {

  }
  document.body.appendChild(saveButton);
}

function drawingImage(canvas) {

  var context = canvas.getContext("2d");
  var collections = [762960, 162326, 1538121, 162468, 357786, 463870];
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      var img = new Image();
      num = collections[Math.floor(Math.random() * collections.length)]
        img.onload = (function(i, j, img) {
            return function() {
            context.drawImage(img, i*300, j*200);
            num = collections[Math.floor(Math.random() * collections.length)];
              }
          })(i, j, img);

          img.src = "https://source.unsplash.com/collection/"+ num + "/300x200";
      }
  }
}




createQuoteHTML();
