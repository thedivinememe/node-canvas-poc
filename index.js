const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(160, 144);
const ctx = canvas.getContext('2d');
const {layers, width, height} = require('./layers/config.js');
const fileName = 'awesome-wizard';

const saveLayer = (_canvas, _fileName) => {
    fs.writeFileSync(`./output/${_fileName}.png`, _canvas.toBuffer('image/png'));
    console.log('image created');
}

const drawLayer = async (_layer) => {
    let element = _layer.elements[Math.floor(Math.random() * _layer.elements.length)];
    const image = await loadImage(`${_layer.location}/${element.fileName}`);
    ctx.drawImage(image, _layer.position.x, _layer.position.y, _layer.size.width, _layer.size.height);
    console.log(`created ${_layer.name} layer, and chose element ${element.name}`);
    saveLayer(canvas, fileName);
}

layers.forEach(layer => {
    drawLayer(layer);
})

