function createTree (angle, k , n) {
    angle = angle * Math.PI / 180;
    let canv = document.createElement('canvas'); 
    document.body.style.margin = 0;
    let w = canv.width = window.innerWidth;
    let h = canv.height = window.innerHeight;
    canv.style.display = 'block';
    canv.style.background = 'black';
    document.body.appendChild(canv);
    canv = canv.getContext('2d');
    canv.translate(w / 2, h);
    canv.strokeStyle = 'white';
    canv.shadowBlur = 1;
    canv.shadowColor = 'rgba(0, 0, 0, .8)';

    function draw (k) {
        canv.beginPath();
        canv.moveTo(0, 0);
        canv.lineTo(0, -k);
        canv.stroke();
        canv.closePath();
        canv.translate(0, -k);
        if (k > 6) {
            canv.save();
            canv.rotate(angle);
            draw(k * n);
            canv.restore();
            canv.save();
            canv.rotate(-angle);
            draw(k * n);
            canv.restore();
        }
    }
    draw(k);
}

createTree(20, 125, .8);
