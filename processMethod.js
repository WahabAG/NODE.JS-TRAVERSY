// the process modudule is a global nodule and does not need to be impported although importation can be done
//argv
console.log(process.argv);

// process.env 

console.log(process.env);
console.log(process.env.LOGNAME);

// pid  - getting the node js process id
console.log(process.pid);

// cwd() gettin the current directory

console.log(process.cwd());

//memoryUsage() and title

console.log(process.title);

console.log(process.memoryUsage());

//uptime()
console.log(process.uptime());

// using process as an event listener using on()
process.on("exit", (code) => {
    console.log(`About to exit with code: ${code}`)
});


// exit()
process.exit(0);