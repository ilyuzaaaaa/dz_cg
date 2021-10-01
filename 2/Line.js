
function bresenham_line(context, x_start, y_start, x_end, y_end, colour) {

    console.log(x_end, y_end);
    ctx.fillStyle = colour;
    let dx = x_end - x_start;
    let dy = y_end - y_start;

    let sign_x = Math.sign(dx);
    let sign_y = Math.sign(dy);


    let x = x_start;
    let y = y_start;
    let epsilon = 0;

    if (Math.abs(dx) > Math.abs(dy)) {
        while (x !== x_end) {
            epsilon += 2 * dy;
            if (Math.abs(epsilon) >= Math.abs(dx)) {
                y += sign_y;
                epsilon -= 2 * sign_x * sign_y * dx;
            }
            context.fillRect(x, y, 1, 1);
            x += sign_x;
        }
    } else {
        while (y !== y_end) {
            epsilon += 2 * dx;
            if (Math.abs(epsilon) >= Math.abs(dy)) {
                epsilon -= 2 * sign_x * sign_y * dy;
                x += sign_x;
            }
            context.fillRect(x, y, 1, 1);
            y += sign_y;
        }
    }
}
function rotation(context, x_start, y_start, radius) {
    let alpha = ((new Date()).getSeconds() * 6 - 90) % 361;
    console.log("alpha=" + alpha);
    let x_end = Math.abs(Math.trunc(x_start + radius * Math.cos(alpha * Math.PI / 180)));
    let y_end = Math.abs(Math.trunc(y_start + radius * Math.sin(alpha * Math.PI / 180)));
    bresenham_line(context, x_start, y_start, x_end, y_end, '#1fc731');
    setInterval(function () {
        bresenham_line(context, x_start, y_start, x_end, y_end, '#ffffff');
    }, 1000);
}
