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
        id: 20,
        name: "clouds",
        location: `${dir}/clouds`,
        elements: getElements(`${dir}/clouds`),
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
    {
        id: 6,
        name: "medium-torso",
        location: `${dir}/medium-torso`,
        elements: getElements(`${dir}/medium-torso`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
    {
        id: 7,
        name: "medium-legs",
        location: `${dir}/medium-legs`,
        elements: getElements(`${dir}/medium-legs`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
    {
        id: 8,
        name: "medium-arm-l1",
        location: `${dir}/medium-arm-l1`,
        elements: getElements(`${dir}/medium-arm-l1`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
    {
        id: 9,
        name: "medium-arm-r1",
        location: `${dir}/medium-arm-r1`,
        elements: getElements(`${dir}/medium-arm-r1`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
        {
        id: 9,
        name: "medium-head",
        location: `${dir}/medium-head`,
        elements: getElements(`${dir}/medium-head`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
            {
        id: 10,
        name: "medium-face",
        location: `${dir}/medium-face`,
        elements: getElements(`${dir}/medium-face`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
                {
        id: 11,
        name: "medium-facial-feature",
        location: `${dir}/medium-facial-feature`,
        elements: getElements(`${dir}/medium-facial-feature`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
                    {
        id: 12,
        name: "human-ear",
        location: `${dir}/human-ear`,
        elements: getElements(`${dir}/human-ear`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
                        {
        id: 13,
        name: "medium-hair",
        location: `${dir}/medium-hair`,
        elements: getElements(`${dir}/medium-hair`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
                            {
        id: 14,
        name: "medium-armor",
        location: `${dir}/medium-armor`,
        elements: getElements(`${dir}/medium-armor`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
                                {
        id: 15,
        name: "medium-leg-armor",
        location: `${dir}/medium-leg-armor`,
        elements: getElements(`${dir}/medium-leg-armor`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
                                    {
        id: 16,
        name: "weapon-l1",
        location: `${dir}/weapon-l1`,
        elements: getElements(`${dir}/weapon-l1`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
                                        {
        id: 17,
        name: "medium-headgear",
        location: `${dir}/medium-headgear`,
        elements: getElements(`${dir}/medium-headgear`),
        position: {x: 0, y: 0},
        size: {width, height},
    },
    
];

module.exports = { layers, width, height };