/* Thi file is meant to be used for practice the HTTP FS module and methods */


import fs  from "fs/promises";

//using the readFile -- callback method
// fs.readFile("./public/file.txt", "utf8", (err, data) =>{
//     if (err) throw err;
//     console.log(data);
// });

// using the readFile ..... synchronus method

// const data = readFileSync("./public/file.txt", "utf8");
// console.log(data);

//readFile using the promise method
// fs.readFile("./public/file.txt", "utf8").then((data) => console.log(data))
// .catch((error) => console.log(error));

// readFile ..... using the async await method

const readFile = async () => {
    try {
        const data = await fs.readFile("./public/file.txt", "utf8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

// writeFile
const writeFile = async () => {
    try {
        await fs.writeFile("./public/file.txt", "I am overwriting the content of thi file");
        console.log("file ritten into");
    } catch (error) {
        console.log(error);
    }

};

//appending file
const appendFile = async () => {
    try {
        await fs.appendFile("./public/file.txt", "\nI just wanna keep adding stuffs to this file");
    console.log("file appended")
    } catch (error) {
        console.log(error);
    }

};
writeFile();
appendFile();
readFile();



