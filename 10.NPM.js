// NPM calls the reusable code as package
//node package manager

//local dependency
// npm i <packageName>

//global dependency - use it in any project\

// npm install -g <packageName>


//package.json - manifest files that stores important information about project / package

//manual approach (create package.json in the roots , create properties etc)
// npm init ( step by step , press enter to skip)
// npm init -y ( everything default)


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newitems = _.flattenDeep(items)

console.log(newitems);


