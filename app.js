const five = require('johnny-five')
const board = five.Board();

board.on('ready', () => {
    const led = five.Led(13);
    led.blink(500);
})