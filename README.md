# Node.js Practice Playground 🛠️

This repository contains a collection of simple Node.js scripts created during my practice sessions. It's not a production-level or important project, but rather a space where I explored and tested core Node.js modules. I used ES Modules to practice modularity in writing codes.

---

## 🧠 Purpose

To get hands-on experience and build foundational understanding of:

- `http` – Creating basic servers
- `crypto` – Creating encryption and decryptions
- `fs` – Reading, writing, and appending files
- `url` – Parsing request URLs
- `path` – Working with file and folder paths
- `os` – Getting system-related info (e.g., memory, CPUs)
- `process` – Understanding environment variables and process control

---

##  Project Structure

node-practice/
├── controller
    ├──postcontroller.js
├── handllers
    ├──createUserHandler.js
    ├──errorHandler.js
    ├──userHandler.js
    ├──userIdHandler.js
├── middleware
    ├──jsonMiddleware.js
    ├──loggerMidleware.js
├── public
    ├──about.html
    ├──file.txt
    ├──index.html
    ├──users.js
├── .gitignore
├── app.js
├── cryptoMethods.js // crypto module practice
├── fsMethod.js // fs module practice
├── osMethods.js // os module practice
├── pathMethod.js // path module practice
├── processMethod.js // process module practice
├── README.md 
├──server.js 
├── urlMethod.js // url module practice
└── utils.js

---

## 🧪 How to Run

Make sure you have Node.js installed.

npm rum start  // entery point app.js

    or

node <filename.js>
For example:
node cryptoMethod.js
node server.js
💡 Notes
These files are meant for practice purposes only.

Each file is self-contained and demonstrates basic usage of one or more core modules.

Feel free to experiment or modify the code to learn further.

✅ What I Learned
How Node.js handles asynchronous file operations.

How to serve basic HTML pages using the http module.

How to create simple encryption and decryption logic.

How to parse URLs and manage file paths properly.

How to gather OS-level information for diagnostics.

How to interact with the Node.js process (e.g., process.argv, process.env).

How to make code modular and scallable.

🔒 License
This project is not under any license, and you are free to copy or modify anything for learning purposes.
