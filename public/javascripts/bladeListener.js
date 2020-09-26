import { renderData } from './bladeRenderer.js' 

var socket = io.connect('http://localhost:3000');

console.log('listener module active.')

socket.on('bladeData', (data) => {
    renderData(data)
})