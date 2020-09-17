const fs = require ('fs');

const requestHandler = (req,res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/save-signature" method="POST"><input type="text" name="username" placeholder="username"><br><input type="text" name="signature" placeholder="signature"><br><button type="submit"> Send </button></form></body>');
        res.write('<a href="/get-last-signature">Get data</a>');
        res.write('</html>');
        res.end();
        return res.end();
    }
    if (url === '/save-signature' && method ==='POST'){
        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',() =>{
            const parsedBody = Buffer.concat(body).toString();
            const parsed = parsedBody.split('=');
            const username = parsed[1].split('&')[0];
            const signature = parsed[2];
            fs.writeFileSync('signature.txt',`${username} ${signature}`);
        });
        res.statusCode= 302;
        res.setHeader('Location','/');
        return res.end();
    }
    if (url === '/get-last-signature'){
        fs.readFile('signature.txt', function(err,data){
            const text = data.toString(); 
            res.write('<html>');
            res.write('<head><title>Enter message</title></head>');
            res.write(`<body><h1>${text}</h1></body>`);
            res.write('</html>');
        return res.end();
        });
    }

};

module.exports = requestHandler;
