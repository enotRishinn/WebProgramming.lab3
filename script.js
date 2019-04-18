function createQuoteHTML() {

  var canvas = document.createElement("canvas");
  canvas.style.width = "500px";
  canvas.style.height = "500px";
  document.body.appendChild(canvas);


  var quoteButton = document.createElement("button");
  quoteButton.textContent = "Сгенерировать новый коллаж с цитатой";
  quoteButton.style.padding = "1%";
  quoteButton.style.margin = "2%";
  quoteButton.onclick = function() {

  }
  document.body.appendChild(quoteButton);

  var saveButton = document.createElement("button");
  saveButton.textContent = "Сохранить коллаж";
  quoteButton.style.margin = "2%"
  saveButton.style.padding = "1%";
  saveButton.onclick = function() {

  }
  document.body.appendChild(saveButton);
}

function drawingImage(canvas) {
  context = canvas.getContext("2d");
  var img = new Image();
}

createQuoteHTML();
