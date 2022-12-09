const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const fs = require("fs")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const PORT = process.env.port || 8000;
const bodyParser = require("body-parser");


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dmswls2832!",
  port: 8000,
  database: "darakdb",
})
app.use(express.json());
app.use(cors());
// app.use(express.json());
// app.use(cors());


// app.get('/members', async (req, res) => {
//   connection.query(
//     "select * from darak_members",
//     (err, rows, fields) => {
//       res.send(rows)
//       console.log(fields);
//     }
//   )
// })

app.post("/join", (req, res) => {
  let myPlaintextPass = req.body.pw;
    let myPass = "";
    if(myPlaintextPass !== '' && myPlaintextPass !== undefined) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(myPlaintextPass, salt, function(err, hash) {
                // Store hash in your password DB.
                myPass = hash;
                console.log(myPass);
                // 쿼리 작성
                const { userid, username, userphone, userisstaff } = req.body;
                // connection.query 인자 첫번째: 쿼리문, 두번째: 쿼리문에 들어갈 값, 세번째: 처리 되면 하는 애
                connection.query("insert into darak_members(userid, userpass, username, userphone, isstaff, regdate) values(?,?,?,?,?,DATE_FORMAT(now(),'%Y-%m-%d'))",
                    [userid, myPass, username, userphone, userisstaff],
                    (err, result, fields) => {
                        console.log(result)
                        console.log(err)
                        res.send("등록되었습니다.")
                    }
                )
            });
        });
    }
})

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});