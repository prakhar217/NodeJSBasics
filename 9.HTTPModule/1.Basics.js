const http = require('http')

const server = http.createServer((req, res)=>{
    // 2 object parameters
    // 1st parameter -- req  -- represents the incoming request from the client -- so for eg a client is requesting your page from the bowser the you will have information about the methods  etc in this req object
    //2nd parameter -- res -- is what we are sending
    // console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our HOme page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Opps!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="">Back to home</a>
    `)

})

server.listen(5000)
// we wont exit in terminal now // usually we uuse to get the exit line after running the code
