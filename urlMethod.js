// thi is used to practice the url node_module

import url from "url";

const urlString = "https://www.google.com/search?q=helloworld";

//url object

const urlObj = new URL(urlString);
console.log(urlObj);

// formart() this method just return the url as a string

console.log(url.format(urlObj));

// import.meta.url - this gets the file url

console.log(import.meta.url);

//fileURLToPath

console.log(url.fileURLToPath(import.meta.url));

// working on the query

console.log(urlObj.search);

// to get just the params 

const params = new URLSearchParams(urlObj.search);  
console.log(params.get("q")); //give thhe query and the value

console.log(params);

// the params can all so be added on 

params.append("limit", "5");

console.log(`this params has been appended with limit ${params}`);

params.delete("limit");

console.log(`this the the param with the appended limit deleted ${params}`);




