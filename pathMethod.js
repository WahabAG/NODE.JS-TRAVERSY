// thi file is used tp practice ome of the methods of tha path module

import path, { basename } from "path";
import url from "url";

// when uing ESM the path can be accessed by 

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`This is the file name: ${__filename} and this is the directory ${__dirname}`)

const filePath = "./mainDir/subDir/test.txt";

// parse() method

console.log(path.parse(filePath));


// basename() method

console.log(path.basename(filePath));

//dirname() method

console.log(path.dirname(filePath));

//extname() method

console.log(path.extname(filePath));

//join() method
const filePath2 = path.join(__dirname, "mainDir", "subDir", "text.txt");
console.log(filePath2);
 //resolve() mehtod
const filePath3 = path.resolve(__dirname, "mainDir", "subDir", "text.txt");
console.log(filePath3);