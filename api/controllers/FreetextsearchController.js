/**
 * FreetextsearchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	create: function (req, res) {

	var output_data = []
	let free_text = req.param("input_text");
	var elasticsearch = require('elasticsearch');
	var client = new elasticsearch.Client({
	host:'localhost:9200',
	log:'trace'
	
});
	 client.search({
    index: 'entity_index',
    type: 'posts',
    body: {
    "query": {
    "match": {
      "_all": free_text
    }
  },
            }
}).then(function(resp) {

		output_data.push(resp.hits)
}, function(err) {
    
    return res.send({
                "success": false,
                "message": "Unable to fetch records"
            });
});


client.search({
    index: 'entity_user_index',
    type: 'posts',
    body: {
    "query": {
    "match": {
      "_all": free_text
    }
  },
            }
}).then(function(resp) {

		output_data.push(resp.hits) 
    
}, function(err) {
    
    return res.send({
                "success": false,
                "message": "Unable to fetch records"
            });
});

client.search({
    index: 'transaction_index',
    type: 'posts',
    body: {
    "query": {
    "match": {
      "_all": free_text
    }
  },
            }
}).then(function(resp) {

		output_data.push(resp.hits)    
    return res.send({
                "success": true,
                "message": "Records fetched",
                "data": output_data
            });
}, function(err) {
    return res.send({
                "success": false,
                "message": "Unable to fetch records"
            });
});

  
 }
  

};

