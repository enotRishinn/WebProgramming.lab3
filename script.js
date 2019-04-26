
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
    drawingImage(canvas);
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


  var collections = [762960, 1538121, 162468, 357786, 1346770, 1075856, 162232];
  var f = 0;
  var num = 0, index;
  var arr = new Array();

  for (var i = 0; i < 4; i++) {
    var img = new Image();

    while (num == 0) {
    num = collections[Math.floor(Math.random() * collections.length)];
    }

    index = collections.indexOf(num);
    collections[index] = 0;
    img.src = "https://source.unsplash.com/collection/"+ num + "/300x200";
    num = 0;

    img.onload = (function(img) {
      return function() {
        arr.push(img);
        f = f + 1;

        if (f == 4) {
          for (var k = 0; k < 4; k++) {
            var y = 0, x = (k % 2)*300;
            if (k == 1 || k == 2) {
              y = 200;
            }
            context.drawImage(arr[k], x, y);
          }
          drawingText(canvas);
        }
      }
    })(img);
  }
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
