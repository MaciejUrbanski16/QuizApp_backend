const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const  UserRouter = require('./routes/UserRoute')


mongoose.connect('mongodb://127.0.0.1:27017/klasa', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// mongoose.connect(
//     process.env.MONGO_URL
//   )
//   .then(()=>console.log('connected'))
//   .catch(e=>console.log(e));

const db = mongoose.connection

db.on('error', (err) => {
    console.log('Connection errored')
    console.log(err)
})

db.on('open', () => {
    console.log('Database conection estabished')
})


const app = express()

app.use(morgan())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=> {
    console.log('Application is running on port' + PORT)
})

app.use('/api/user', UserRouter)

// app.get('/', (req, resp) => {
//     resp.send("HELLO WORLD__");
// })

// // This responds a POST request for the homepage
// app.post('/', function (req, res) {
//     console.log("Got a POST request for the homepage");
//     res.send('Hello POST');
//  })

//  // This responds a DELETE request for the /del_user page.
// app.delete('/del_user', function (req, res) {
//     console.log("Got a DELETE request for /del_user");
//     res.send('Hello DELETE');
//  })

//  // This responds a GET request for the /list_user page.
// app.get('/list_user', function (req, res) {
//     console.log("Got a GET request for /list_user");
//     res.send('Page Listing');
//  })

// const server = app.listen(8081, () => {
//     let host = server.address().address
//     let port = server.address().port
    
//     console.log("Example app listening at http://%s:%s", host, port)
//  })