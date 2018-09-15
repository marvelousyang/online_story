/**
 * http://usejsdoc.org/
 */
var mongo = require("./mongo-db");
mongo.connect();
function Hello(){
	console.log("hello");
}
module.exports = Hello;