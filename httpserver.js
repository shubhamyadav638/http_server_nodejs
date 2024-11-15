const http = require('http')


const server = http.createServer((req, res) => {
  
    switch (req.url) {
        case '/favicon.ico':
            return            
            break;
        case '/home':
            res.end("I am home")            
            break;
        case '/about':
            res.end("I am about")     
            break;
    
        default:
            res.end("Invalid URL")
            break;
    }
   
    
})



server.listen(3000)