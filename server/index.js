const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require("mysql2");

const app = express();

const db=mysql.createPool({
    host: "localhost",
    user:"root",
    password:"ritikAbes$2662",
    database: "Note_keeper"
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/get", (req, res) => {
    const sqlSelect = "select * from note_keeper.notes;"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post("/api/insert", (req, res) => {
    const title = req.body.title
    const description = req.body.description

    const sqlInsert = "INSERT INTO note_keeper.notes (title, description) values(?, ?);"
    db.query(sqlInsert, [title, description], (err, result) => {
        console.log(err)
        // console.log(result)
    })
})

app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id
    const sqlDelete = "DELETE FROM note_keeper.notes WHERE id = ?;"
    db.query(sqlDelete, id, (err, result) => {
        if(err) console.log(err)
    })
})

app.put('/api/update', (req, res) => {
    const id = req.body.id
    const description = req.body.description
    const sqlUpdate = "UPDATE note_keeper.notes SET description = ? WHERE id = ?;"

    db.query(sqlUpdate, [description, id], (err, result) => {
        if(err) console.log(err)
        else console.log(result)
    })
})

// app.get('/', (req, res) => {
//     const sqlInsert = "INSERT INTO note_keeper.notes (title, description) values ('third', 'this is the third note');"
//     const sqlSelect= "select * from note_keeper.notes;"
//     db.query(sqlSelect, (err, result) => {
//         if(err) console.log(err)
//         else console.log("no error")
//         return console.log(result)
//     })
//     res.send("hello world!")
// })



app.listen(3008, () => {
    console.log("running on port 3008")
})