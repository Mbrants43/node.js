/*
Descriptions:
As our company grows rapidly and nature is important to us, 
our new signature system needs to be moved to server, 
which can handle username and signature as texts, save those data in a file and return a message, 
that those data are saved, this is needed so we don't need to print out actual paged which reduces tree population.

Acceptance criteria:
* Create NodeJS server which works on 3001 port - DONE
* Server should be able to handle three paths: "/",
 "/save-signature", "/get-last-signature" - DONE
* "/" path responds whith HTML from, which consists 
of two input fields (username and signature) - DONE
* "/save-signature" path is used to send form 
data using POST method
* Add logic on server side which can receive data
 from "/save-signature" path and save those data into file "signature.txt".
* "/get-last-signature" path read data from saved 
file and responds those data to browser
* To reduce code in main js file, move routes logic to a separate 
.js file and export code as method, which would be used in main javascript file - 38. video
*/

//console.log("Sveiks!")

const http = require('http');
const fs = require ('fs');
const server = http.createServer((req,res) => {
    const url = req.url;
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/save-signature" method="POST"><input type="text" name="username" placeholder="username"><br><input type="text" name="signature" placeholder="signature"><button type="submit"> Send </button></form></body>');
        res.write('</html>');
        res.end();
        return res.end();
    }
    if (url === '/save-signature' && method ==='POST'){
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode= 302;
        res.setHeader('Location','/');
        return res.end();
    }
    if (url === '/get-last-signature'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit"> Send </button></form></body>');
        res.write('</html>');
        res.end();
        return res.end();
    }
//process.exit();
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
res.write('</html>');
res.end();
});

server.listen(3001);