// 3-Modules.js
//Need of modules

const name = require('./3.1-Modules')
// console.log(name);
// const {john , peter} destructure
const sayHi = require('./3.2-MOdules')

require('./4.MindGrenade')  // when you import a module you actually invoke it
sayHi('susan')

sayHi(name.john)

sayHi(name.peter)


// now lets talk about modules

// modules - Encapsulated Code(Only sharing minimum)
//every file in js is a module by default


// the way modules works is simply create a new file 





