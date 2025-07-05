// this is to practice the crypto node_module - it provide cryptogarphic funtion like hashing, encrypt and decrypt etc.
import crypto from "crypto";


// craeteHash()

const hash = crypto.createHash("sha256");
hash.update("Tunji@123");
console.log(hash.digest("hex"));

// to generate random crypto graphically strong hexidecimal string randomBytes()

crypto.randomBytes(20, (err, buf) => { // the 20 the limit to the number of random crypto gerated
    if (err) throw err;
    console.log(buf.toString("hex"));
});

// encrypting and decrypting data using cipher text by crypto algorithms and key
// combined with the use of iv that generate difftent encryption for a the same text using the same key   
// ransom cyphers textt can only be dectyptred by a key provided

//createCipheriv && createDecipheriv
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
// encryption
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("hello this is a coded message", "utf8", "hex");
encrypted += cipher.final("hex");

console.log(`this is the encrypted text: ${encrypted}`);

// decryption
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted,  "hex", "utf8");
decrypted += decipher.final("utf8");

console.log(`This is the decrypted text: ${decrypted}`);

