//shared
const john = "JOhn";
const peter = " peter";
//local
const secret = " SUper secret";

// console.log(module);

/// there is a export object inside module object , so now we can decide what we need to share whatever we do will be in export object and it is accesible everywhere

module.exports = {john,peter} // here we using js6 syntax since key name is exactly same as value
