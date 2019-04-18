function createQuoteHTML() {
  
  var canvas = document.createElement("canvas");
  canvas.style.width = "80%";
  canvas.style.height = "80%";
  document.body.appendChild(canvas);

  var quoteButton = document.createElement("button");
  quoteButton.textContent = "Сгенерировать новый коллаж с цитатой";
  quoteButton.onclick = function() {

  }
  document.body.appendChild(quoteButton);

  var saveButton = document.createElement("button");
  saveButton.textContent = "Сохранить коллаж";
  saveButton.style.marginLeft = "3%";
  saveButton.onclick = function() {

  }
  document.body.appendChild(saveButton);
}

createQuoteHTML();
