'use strict';

const fetch = require('node-fetch');
const config = require('./config.js');

fetch(config.BASE_URL + '/all')
    .then((response) => response.json())
    .then((countries) => {

        console.log(`${countries.length} countries found`);
        if (countries.length) {
            let country = countries[randomInt(0, countries.length - 1)];
            console.log(`A country picked at random: ${country.name}`);
        }
    }
);

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
