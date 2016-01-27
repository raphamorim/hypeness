'use strict';

var commands = process.argv,
    list = [];

list = [
    'angular.js',
    'gulp.js',
];

var randomItem = list[Math.floor(Math.random() * list.length)];

if (process.argv)
    process.stdout.write(randomItem.concat('\n'), 'utf-8');

module.exports = randomItem;
