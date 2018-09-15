/**
 * http://usejsdoc.org/
 */
var DB = "";
function connect(){
	//创建数据库
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/runoob";
	MongoClient.connect(url, function(err, db) {
		if (err){
			throw err;
		}
		console.log("数据库已创建!");
		DB = db.db("runoob");
		DB.createCollection('site', function (err, res) {
	        if (err){
	        	throw err;
	        }
	        console.log("创建集合!");
	    });
		//db.close();
	});
}
function insert(obj){
	DB.collection("site").insertOne(obj, function(err, res) {
        if (err){
        	throw err;
        }
        console.log("文档插入成功");
    });
}
exports.connect = connect;
exports.insert = insert;