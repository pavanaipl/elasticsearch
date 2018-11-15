/**
 * TransactionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  create: function (req, res) {

    //Reading input from request object
    
    let entityId = req.param("entity_id");
    let entityUser = req.param("entityuser_id");
    let tranDescription = req.param("tranDescription");
    let transactionType = req.param("transactionType");
    let transactionDate = req.param("transactionDate");
    let transactionAmount = req.param("transactionAmount");
    

    //Inserting record in mongoDB
    Transaction.create({
        entity_id: entityId,
        entityuser_id: entityUser,
        tranDescription: tranDescription,
        transactionType: transactionType,
        transactionDate: transactionDate,
        transactionAmount: transactionAmount,
        

    }).then(function (information) {
        //Returning success response
        return res.send({
            "success": true,
            "message": "Record created successfully",
            "data": information
        });
    }).catch(function (err) {
        sails.log.debug(err);
        //Returning failure response
        return res.send({
            "success": false,
            "message": "Unable to create record"
        });
    });
},

};

