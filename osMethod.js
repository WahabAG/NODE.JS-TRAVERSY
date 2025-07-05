// To practice the OS node module which gives information about the machine it is being run on
import os from "os";
// userInfo()

console.log(os.userInfo());


// userInfo with attributes

console.log(os.userInfo().username);

// totalmem()

console.log(os.totalmem());

//freemem

console.log(os.freemem());


//cpus

console.log(os.cpus());
