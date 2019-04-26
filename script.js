
function createQuoteHTML() {

  var canvas = document.createElement("canvas");
  canvas.width = "600";
  canvas.height = "400";
  canvas.style.float = "left";
  document.body.appendChild(canvas);
  drawingImage(canvas);

  var quoteButton = document.createElement("button");
  quoteButton.textContent = "Сгенерировать новый коллаж с цитатой";
  quoteButton.style.padding = "1%";
  quoteButton.style.margin = "2%";
  quoteButton.style.float = "left";
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
  context.fillStyle = "rgba(0, 0, 0, 0.9)";
  var collections = [762960, 1538121, 162468, 357786, 1346770, 1075856, 162232];
  var index;
  var num;



      var img1, img2, img3, img4;
      img1 = new Image();

      img2 = new Image();

      img3 = new Image();

      img4 = new Image();

      window.onload = (function(img1, img2, img3, img4) {
            return function() {
              context.drawImage(img1, 0, 0);
              context.drawImage(img2, 0, 200);
              context.drawImage(img3, 300, 0);
              context.drawImage(img4, 300, 200);
              drawingText(canvas);
              }
          })(img1, img2, img3, img4);
      img1.src = "https://source.unsplash.com/collection/"+ collections[0] + "/300x200";
      img2.src = "https://source.unsplash.com/collection/"+ collections[1] + "/300x200";
      img3.src = "https://source.unsplash.com/collection/"+ collections[2] + "/300x200";
      img4.src = "https://source.unsplash.com/collection/"+ collections[3] + "/300x200";

}

var quote;

function parseQuote(response) {
  quote = response.quoteText;
  canvas = createQuoteHTML();
}

function getQuote() {
  var request = document.createElement("script");
  request.src = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=ru&jsonp=parseQuote";
  request.async = true;
  document.body.appendChild(request);
}

getQuote();

function drawingText(canvas) {

  var context = canvas.getContext("2d");
  context.font = "30px Arial";
  context.fillStyle = "rgba(0, 0, 0, 0.5)";
  context.fillStyle = "black";


  var separator = ' ';
  var text = quote.split(separator);
  var ourQuotes = "";
  var citate = [];
  var margin = 20;
  var interval = 30;

  for (var i = 0; i < text.length; i++) {
    var quotes = ourQuotes + text[i] + " ";
    if (context.measureText(quotes).width > 600 - margin) {
      citate.push(ourQuotes);
      ourQuotes = text[i] + " ";
    } else {
      ourQuotes = quotes;
    }

  }
  citate.push(ourQuotes);


  for (var i = 0; i < citate.length; i++) {
  var first = (600 - context.measureText(citate[i]).width) / 2 ;
  var second = (400 - citate.length * i + interval*i + (i+1)* margin) / 2;
  context.fillText(citate[i], first, second);

  first += interval;
  }

}
