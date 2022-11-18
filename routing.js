const http = require('http');
const url = require('url');
const db = require('./db_handler');
// const getAll = require('./flight');
// const getOne = require('./flight');
// const createOne = require('./flight');
// const UpadteData = require('./flight');
const flight = require('./flight');
const qs = require('querystring');

const server = new http.createServer((req,response)=>{
    var link = url.parse(req.url,true);
    var query = link.query;
    var path = link.pathname;

    if(path == "/api/users"){
        // const sql = "select * from flight";
        flight.getAll((err,res)=>{
            response.end(JSON.stringify(res));
        });
    }
    else if(path == "/api/user"){
        let flight_no = query.flight_no;
        console.log(flight_no);
        flight.getOne(flight_no,(err,res)=>{
            response.end(JSON.stringify(res));
        });
    }
    else if(path == "/api/user1" && req.method == "POST"){
       formData = '';
       req.on('data',(data)=>{
        formData += data.toString();
        });

        req.on('end', ()=>{
            var query = qs.parse(formData);
            flight.createOne(query, (err, result)=>{
                if(!err){
                    response.end(JSON.stringify({status: "OK"}))
                }
                else{
                    response.end(JSON.stringify({status: "FAILED"}))
                    console.log(err);
                }
            })
        });


    }

    else if(path == "/api/user2" && req.method == "PUT"){
        formData = '';
        req.on('data',(data)=>{
         formData += data.toString();
         });

         req.on('end', ()=>{
             var query = qs.parse(formData);
             flight.UpadteData(query, (err, result)=>{
                 if(!err){
                     response.end(JSON.stringify({status: "OK"}))
                 }
                 else{
                     response.end(JSON.stringify({status: "FAILED"}))
                     console.log(err);
                 }
             })
         });


     }
     else if(path == "/api/users4" && req.method == "DELETE"){
        formData = '';
        req.on('data',(data)=>{
         formData += data.toString();
         });

         req.on('end', ()=>{
             var query = qs.parse(formData);
             flight.deleteData(query, (err, result)=>{

                 if(!err){
                     response.end(JSON.stringify({status: "OK"}))

                 }
                 else{
                     response.end(JSON.stringify({status: "FAILED"}))
                     console.log(err);
                 }
             })
         });


     }

});
server.listen(80);

// db.executeQuery("select * from flight", null, (err, res)=>{
//     console.table(res);
//     console.log(err);
// });