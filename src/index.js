const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const app = express()
const port = 5000

// Rounter
const route = require('./routes');

// Thiết lập file tĩnh
app.use(express.static(path.join(__dirname, 'public')))
app.use(
    express.urlencoded({
        extended: true,
    }),
)

// Thiết lập kết nối đến db
const db=require('./config/db')
// Connect to db
db.connect()

app.use(cors())
app.use(methodOverride('_method'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({sayHi: 'Testing hello from server, nice to meet you!'})
})

// route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})