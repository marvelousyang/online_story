/**
 * http://usejsdoc.org/
 */
var business = require("./business");
function route(pathname) {
  console.log("About to route a request for " + pathname);
}
 
exports.route = route;