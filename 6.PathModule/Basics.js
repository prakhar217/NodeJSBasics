const path = require('path')

// platform seprator property

console.log(path.sep);

//PATH joinn method

const filePath = path.join('/content','subfolder','test.txt')
// Output -->
//content/subfolder/test.txt


//path.resolve --> returns absolute path

const resolvwe = path.resolve(__dirname ,'content','subfolder','test.txt');

