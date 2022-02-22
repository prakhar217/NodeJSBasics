const {readFileSync , writeFileSync, readFile } = require('fs')

//readfilesync a method ,, which needs two arguments

//1.PAth
//2.what is the encoding -- genrally with UTF-8

const first = readFileSync('../6.1content/first.txt','utf8')
const second = readFileSync("../6.1content/second.txt", "utf8");

console.log(first , second);

writeFileSync("../6.1content/result-sync.txt",
`Here is the result: ${ first} , ${second}
`, 
{flag:'a'});

//since file is not there then it will create a file

 