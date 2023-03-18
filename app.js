const express = require('express')
const app = express()

app.get('/', (req, resp) => {
    resp.send("HELLO WORLD__");
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
 })

 // This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
 })

 // This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
 })

const server = app.listen(8081, () => {
    let host = server.address().address
    let port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })