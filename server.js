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
data using POST method - DONE
* Add logic on server side which can receive data
 from "/save-signature" path and save those data into file "signature.txt". - DONE
* "/get-last-signature" path read data from saved 
file and responds those data to browser - DONE
* To reduce code in main js file, move routes logic to a separate 
.js file and export code as method, which would be used in main javascript file - 38. video - DONE
*/

//console.log("Sveiks!")

const http = require('http');

const rt = require('./routes');


const server = http.createServer(rt);

server.listen(3001);