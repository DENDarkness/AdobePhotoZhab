const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');
const color = document.getElementById("color");
const range = document.getElementById("range");
console.log(ctx);
let tool = null;


canvas.addEventListener('mousedown', (e) => {
    if (tool) {
        if (tool == 'pencil') {
            drawPencil(e)
        }
        if (tool == 'clearCnv') {
            clearCnv(e)
        }
        if (tool == 'square') {
            square(e)
        }
        if (tool == 'circle') {
            circle(e)
        }
        if (tool == 'line') {
            lineTo(e)
        }
    }
})

document.querySelector('#tools').addEventListener('click', buttons)


function buttons(e) {
    if (e.target.dataset.tool == 'pencil') {
        tool = 'pencil';
    }
    if (e.target.dataset.tool == 'clearCnv') {
        tool = 'clearCnv';
    }
    if (e.target.dataset.tool == 'square') {
        tool = 'square';
    }
    if (e.target.dataset.tool == 'circle') {
        tool = 'circle';
    }
    if (e.target.dataset.tool == 'line') {
        tool = 'line';
    }
}

function circle(e) {
    ctx.strokeStyle = color.value;
    let x = e.offsetX;
    let y = e.offsetY;
    ctx.beginPath();
    ctx.arc(x, y, range.value, 0, 2 * Math.PI);
    ctx.fill();


}

function lineTo(e) {

}


function square(e) {
    ctx.strokeStyle = color.value;
    let x = e.offsetX;
    let y = e.offsetY;

    ctx.strokeRect(x, y, range.value, range.value);
}

function clearCnv(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function drawPencil(e) {
    ctx.fillStyle = color.value;

    let x = e.offsetX;
    let y = e.offsetY;
    ctx.fillRect(x, y, range.value, range.value)
}

// ctx.fillRect(100, 50, 300, 150)
// ctx.beginPath()
// ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI)
// ctx.fill()

// ctx.beginPath()
// ctx.ellipse(250, 100, 50, 50, Math.PI / 4, 0, 2 * Math.PI)
// ctx.stroke()