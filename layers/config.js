const fs = require('fs');
const dir = __dirname;
const width = 160;
const height = 144;


const getElements = (path) => {
    return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i, index) => {
        return {
            id: index + 1,
            name: i.slice(0, -4),
            fileName: i,
            // rarity: addRarity(i),
        }
    });
}

const layers = [
    {
        id: 1,
        name: "background",
        location: `${dir}/background`,
        elements: getElements(`${dir}/background`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
    {
        id: 2,
        name: "sky",
        location: `${dir}/sky`,
        elements: getElements(`${dir}/sky`),
        position: {x: 0, y: 0},
        size: {width, height},
    },    
    {
        id: 3,
        name: "backdrop",
        location: `${dir}/backdrop`,
        elements: getElements(`${dir}/backdrop`),
        position: {x: 0, y: 0},
        size: {width, height},
    },    
    {
        id: 4,
        name: "foreground",
        location: `${dir}/foreground`,
        elements: getElements(`${dir}/foreground`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
    {
        id: 5,
        name: "companion",
        location: `${dir}/companion`,
        elements: getElements(`${dir}/companion`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
];

module.exports = { layers, width, height };