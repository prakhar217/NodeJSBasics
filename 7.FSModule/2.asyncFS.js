const { readFile, writeFile, write } = require("fs");

//readfilesync a method ,, which needs two arguments

//1.PAth
//2.what is the encoding -- genrally with UTF-8

// if we dont provide encoding value we will get buffer value

readFile("../6.1content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(result);
  // now we should assign the result to some kind of variable then read second file
  const first = result;

  readFile("../6.1content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    // console.log(result);
    const second = result;
    writeFile("../6.1content/readFileAsync.txt",` Here is the result ${first},${second}`,(err,result)=>{
        if(err){
            console.log(err);
        }
        console.log(result);
    });
  });
});

// we have to set up functionality inside call back functiomn wheer we are getting the result
