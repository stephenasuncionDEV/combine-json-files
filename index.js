'use strict';

const fs = require('fs');
const dir = 'C:/Users/steph/OneDrive/Desktop/json/'; // Directory of JSON

let retArr = [];

// Count how many files
fs.readdir(dir, (err, files) => {
    const SIZE = files.length;
    console.log(`Size: ${SIZE}`);
    
    // Get JSON Files inside directory
    for (let i = 0; i < SIZE; i++) {
        const jsonData = fs.readFileSync(`${dir}${i}.json`);
        const parsedJson = JSON.parse(jsonData);
        retArr.push(parsedJson);
        console.log(`Added JSON #: ${i}`);
    }

    // Write metadata
    fs.writeFileSync(__dirname + '\\output\\metadata.json', JSON.stringify(retArr, null, 2));
});