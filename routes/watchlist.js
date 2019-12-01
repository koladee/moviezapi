var express = require('express');
var router = express.Router();

/* GET watchlist. */
router.get('/', function(req, res, next) {
	connection.query('SELECT * FROM watchlist', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});
/* POST watchlist. */
router.post('/', function(req, res, next) {
	var show_id = req.body.show_id;
	  		connection.query("INSERT INTO watchlist (id, show_id, date) VALUES ('', '"+show_id+"', '"+Date()+"')", function (error, results, fields) { 
	  			if(error){
	  				res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  			}else{
	  				res.send(JSON.stringify({"status": 200, "error": null, "response": {"resp": true, "msg": "Show successfully added to watchlist."} }));
	  			}
	  		});
	  	
});
/* DELETE watchlist. */
router.delete('/', function(req, res, next) {
	var show_id = req.body.show_id;
	  		connection.query("DELETE FROM watchlist WHERE show_id = '"+show_id+"'", function (error, results, fields) { 
	  			if(error){
	  				res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  			}else{
	  				res.send(JSON.stringify({"status": 200, "error": null, "response": {"resp": true, "msg": "Show successfully deleted from watchlist."} }));
	  			}
	  		});
	  	
});

module.exports = router;
