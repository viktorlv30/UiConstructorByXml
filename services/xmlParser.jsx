/**
 * Created by v.litvak on 10.01.2017.
 */
let path = process.argv[2];
if (!path) throw new Error('path required');

let fs = require('fs');
let parse = require('./parseRule');
let xmlDoc = fs.readFileSync(path, 'utf8');
let inspect = require('util').inspect;

let doc = parse(xmlDoc);
console.log(inspect(doc, { colors: true, depth: Infinity }));