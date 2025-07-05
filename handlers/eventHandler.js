import { EventEmitter } from "events";

export const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log("HELLO WORLD" + name);
}

function goodbyeHandler(name){
    console.log("GOODBYE WORLD" + name);
}

// registering event

myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// myEmitter.on("error", (err) =>){
//     console.log("An error occured: ", err);
// };
// //simulating error
// myEmitter.emit("error", new Error("Something went Wrong"));
