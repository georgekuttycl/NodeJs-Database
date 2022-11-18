const mysql = require('mysql2');
const fs = require('fs');
const read = require('readline-Sync');
const connDetails = {
    host:'localhost',
    user:'root',
    password:'0000',
    database:'fms'

}
let no = read.question("Enter the flight Id :");
no = mysql.escape(no);
let name = read.question("Enter the flight name :");
name = mysql.escape(name);
let description = read.question("Enter the description :");
description = mysql.escape(description);
let capacity = read.question("Enter the flight capacity :");
capacity = mysql.escape(capacity);
const pool = mysql.createPool(connDetails);
// const q1 = `SELECT * FROM flight where flight_name=${number}`;
 //    pool.query(`SELECT * FROM flight where flight_name=${number}`, (err, data) => {
    pool.query(`insert into flight(flight_no,flight_name,flight_description,flight_total_capacity) values(${no},${name},${description},${capacity})`, (err, data) => {
    if (err) throw(err)
    console.table(data);
    // console.log(q1);
    const jsonString = JSON.stringify(data);
    console.log(jsonString);
    fs.writeFileSync(`data.json`,jsonString);

}
);
// pool.query(query,['UN6789'],(err,data)=>{
//     console.table(data);
// });
