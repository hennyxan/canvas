const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const shapeSelect = document.getElementById('shapeSelect');
const settingsPanel = document.getElementById('settingsPanel');


shapeSelect.addEventListener('change', () => {
    const selectedShape = shapeSelect.value;
    showSettings(selectedShape);
});


function showSettings(shape) {
    settingsPanel.innerHTML = ''; 

    if (shape === 'circle') {
    
        settingsPanel.innerHTML = 'Радиус круга: <input type="number" id="circleRadius"><br>' +
            'Цвет круга: <input type="color" id="circleColor">';
    } else if (shape === 'rectangle') {
       
        settingsPanel.innerHTML = 'Ширина прямоугольника: <input type="number" id="rectWidth"><br>' +
            'Высота прямоугольника: <input type="number" id="rectHeight"><br>' +
            'Цвет прямоугольника: <input type="color" id="rectColor">';
    } else if (shape === 'triangle') {
       
        settingsPanel.innerHTML = 'Длина стороны A: <input type="number" id="triSideA"><br>' +
            'Длина стороны B: <input type="number" id="triSideB"><br>' +
            'Длина стороны C: <input type="number" id="triSideC"><br>' +
            'Цвет треугольника: <input type="color" id="triColor">';
    }

    settingsPanel.style.display = 'block';
}

settingsPanel.addEventListener('change', () => {
    drawShape(); 
});

function drawShape() {
    const selectedShape = shapeSelect.value;
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    ctx.strokeStyle = 'black'; 

    if (selectedShape === 'circle') {
        const radius = parseFloat(document.getElementById('circleRadius').value);
        const color = document.getElementById('circleColor').value;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.stroke();
    } else if (selectedShape === 'rectangle') {
        const width = parseFloat(document.getElementById('rectWidth').value);
        const height = parseFloat(document.getElementById('rectHeight').value);
        const color = document.getElementById('rectColor').value;
        ctx.strokeStyle = color;
        ctx.strokeRect((canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
    } else if (selectedShape === 'triangle') {
        const sideA = parseFloat(document.getElementById('triSideA').value);
        const sideB = parseFloat(document.getElementById('triSideB').value);
        const sideC = parseFloat(document.getElementById('triSideC').value);
        const color = document.getElementById('triColor').value;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, (canvas.height - sideA) / 2);
        ctx.lineTo((canvas.width - sideB) / 2, (canvas.height + sideA) / 2);
        ctx.lineTo((canvas.width + sideC) / 2, (canvas.height + sideA) / 2);
        ctx.closePath();
        ctx.stroke();
    }
}


showSettings('circle');