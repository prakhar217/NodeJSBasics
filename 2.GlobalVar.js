//GLOBALS - NO WINDOW

//globals are the variables which can be acccessed anywhere in the application no matter how nested 

//few usefull global variables

//

//__dirname - path to current directory
//__filename - file name 
// require -- function to use modules

// module - info about the current module(file)

//process - info about environmnet where the program is being executed 


console.log(__dirname);
console.log(process);

setInterval(()=>{
    console.log('Hello World');
},1000)

