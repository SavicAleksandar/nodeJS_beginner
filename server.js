// // hello world example
// const http = require("http");

// const HOSTNAME = process.env.HOSTNAME || "localhost";
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader("Content-Type", "text-plain");
//     response.end("Hello World");
// })

// server.listen(PORT, HOSTNAME, () => {
//     console.log("Server running at http://${HOSTNAME}:${PORT}/");
// });


// // global properties
// console.log(__filename);    // full path with filenam
// console.log(__dirname);     // full path

// // reading files
// const fs = require("fs")

// fs.readFile("hi.txt", "utf-8", (err, data) => {  // asynchronous verzija
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

// console.log("log from outside 1")     // izpis bo pred izpisom funkcij

// try {
//     const data = fs.readFileSync("hi.txt", "utf-8");  // synchronous verzija
//     console.log(data);
// }   catch (err) {
//     console.error(err);
// }
   
// console.log("log from outside 2")     // izpis bo za izpisom funkcije

// // write to file
// const {writeFile, writeFileSync} = require("fs");

// const newContent = "this is some new text"

// // adding text to file v1
// writeFile("hi.txt", newContent, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("content written 1")
// })

// // adding text to file v2
// try {
//     writeFileSync("hi.txt", newContent);
//     console.log("content written 2");
// } catch (err) {
//     console.error(err);
// }

// // adding text in new line
// const {appendFile} = require("fs");

// const newContent2 = "\nThis is some more new text"

// appendFile("hi.txt", newContent2, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("New content written")
// })

// const {rename} = require("fs");


// // rename file
// const {rename} = require("fs");

// rename("hi.txt", "hello_world.txt", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("File renamed")
// })

// // delete file
// const {unlink} = require("fs");

// unlink("hello_world.txt", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("File deleted")
// })

// // exporting & importing
// potrebno kreirati package.json in dodati "type": "module" v primeru uporabe modula in preimovati koncnice iz .js v .mjs
// import {addNums} from "./addNums.js";

// const sum = addNums(2, 2);
// console.log(sum);

// // HTML Document
// const http = require("http");

// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     res.write("<h1>Hello world</h1>");
//     res.end();
// });
// server.listen(PORT, () => console.log("Server is listening on a ${PORT}"));

// // HTML Files
// const http = require("http");
// const fs = require("fs");

// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     fs.readFile("./index.html", (err, data) => {
//         if (err) {
//             console.error(err);
//             res.end;
//         }   else {
//             res.end(data);
//         }
//     })
// });
// server.listen(PORT, () => console.log("Server is listening on a ${PORT}"));

// Basic routing
// const http = require("http");
// const fs = require("fs");

// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
    
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");

//     let path = "./";
//     switch (req.url) {
//         case "/":
//             path += "index.html";
//             break;
//         case "/about":
//             path += "about.html";
//             break;
//         default:
//             path += "404.html";
//             break;
//     }

//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.error(err);
//             res.end;
//         }   else {
//             res.end(data);
//         }
//     })
// });
// server.listen(PORT, () => console.log("Server is listening on a ${PORT}"));

// status codes
// const http = require("http");
// const fs = require("fs");

// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
    
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");

//     let path = "./";
//     switch (req.url) {
//         case "/":
//             path += "index.html";
//             res.statusCode = 200;
//             break;
//         case "/about":
//             path += "about.html";
//             res.statusCode = 200;
//             break;
//         default:
//             path += "404.html";
//             res.statusCode = 200;
//             break;
//     }

//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.error(err);
//             res.end;
//         }   else {
//             res.end(data);
//         }
//     })
// });
// server.listen(PORT, () => console.log("Server is listening on a ${PORT}"));

// redirects
// const http = require("http");
// const fs = require("fs");

// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
    
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");

//     let path = "./";
//     switch (req.url) {
//         case "/":
//             path += "index.html";
//             res.statusCode = 200;
//             break;
//         case "/about":
//             path += "about.html";
//             res.statusCode = 200;
//             break;
//         default:
//             res.setHeader("Location", "/");
//             res.statusCode = 301;
//             break;
//     }

//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.error(err);
//             res.end;
//         }   else {
//             res.end(data);
//         }
//     })
// });
// server.listen(PORT, () => console.log("Server is listening on a ${PORT}"));

// NPM
// const http = require("http");
// const fs = require("fs");

// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
    
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");

//     let path = "./";
//     switch (req.url) {
//         case "/":
//             path += "index.html";
//             res.statusCode = 200;
//             break;
//         case "/about":
//             path += "about.html";
//             res.statusCode = 200;
//             break;
//         default:
//             path += "404.html";
//             res.statusCode = 404;
//             break;
//     }

//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.error(err);
//             res.end;
//         }   else {
//             res.end(data);
//         }
//     })
// });
// server.listen(PORT, () => console.log("Server is listening on a ${PORT}"));

// Heroku
const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let path = "./";
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
            res.end;
        }   else {
            res.end(data);
        }
    })
});
server.listen(PORT, () => console.log("Server is listening on a ${PORT}"));