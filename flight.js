const db = require('./db_handler')

function getAll(callback){
    var sql="select * from flight"
    db.executeQuery(sql,[],callback)
}

function getOne(flight_no,callback){
    var sql="select * from flight where flight_no=?"
    db.executeQuery(sql,[flight_no],callback)
}

function createOne(data,callback){
    var sql="insert into flight(flight_no,flight_name,flight_description,flight_total_capacity) values(?,?,?,?)";

    var values = [
        data.flight_no,
        data.flight_name,
        data.flight_description,
        data.flight_total_capacity
    ]
    db.executeQuery(sql,values,callback)
}

function UpadteData(data,callback){
    var sql="update flight set flight_name=? where flight_no=?";

    var values = [
        data.flight_name,
        data.flight_no
    ]
    db.executeQuery(sql,values,callback)
}

function deleteData(data,callback){
    var sql="delete from flight where flight_no=?";

    var values = [
        data.flight_no
    ]
    db.executeQuery(sql,values,callback)
}

module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.createOne = createOne;
module.exports.UpadteData = UpadteData;
module.exports.deleteData = deleteData;