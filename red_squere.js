var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Визначаємо розміри canvas
var width = canvas.width;
var height = canvas.height;

// Функція для малювання системи координат
function drawAxes() {
    // Встановлюємо початкові параметри для системи координат
    var centerX = width / 2;
    var centerY = height / 2;
    var unit = 50; // довжина одиничного відрізка

    // Малюємо осі координат
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.strokeStyle = "#000"; // колір осей
    ctx.stroke();

    // Позначаємо початок координат
    ctx.font = "10px Arial";
    ctx.fillText("(0,0)", centerX + 5, centerY - 5);

    // Позначаємо одиничний відрізок
    ctx.fillText("1", centerX + unit, centerY - 5);
}

// Функція для малювання квадрата та описаного кола
function drawSquareAndCircle(x1, y1, x2, y2, fillStyle) {
    // Малюємо квадрат
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x1, y1, x2 - x1, y2 - y1);

    // Знаходимо координати центра та радіус описаного кола
    var centerX = (x1 + x2) / 2;
    var centerY = (y1 + y2) / 2;
    var radius = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) / 2;

    // Малюємо описане коло
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#000"; // колір описаного кола
    ctx.stroke();
}

// Функція для обробки введених координат та малювання квадратів з описаними колами
function processInput() {
    var input = document.getElementById("coordinates").value;
    var coords = input.split(" ");

    for (var i = 0; i < coords.length; i += 4) {
        var x1 = parseFloat(coords[i]);
        var y1 = parseFloat(coords[i + 1]);
        var x2 = parseFloat(coords[i + 2]);
        var y2 = parseFloat(coords[i + 3]);

        drawSquareAndCircle(x1, y1, x2, y2, document.getElementById("fillStyle").value);
    }
}

// Викликаємо функції для малювання системи координат
drawAxes();