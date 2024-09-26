let angle = 0;

function rotateLine() {
    angle += 2; // Increment the angle by 2 degrees
    const line = document.getElementById('line');
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}

// Call rotateLine every 20 milliseconds
setInterval(rotateLine, 20);
