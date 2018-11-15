/**
 * EntityUserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	create: function (req, res) {

    //Reading input from request object
    
    let firstName = req.param("firstName");
    let LastName = req.param("LastName");
    let entityId = req.param("entityId_id");
    let addresses = req.param("addresses_id")
    
    

    //Inserting record in mongoDB
    EntityUser.create({
        firstName: firstName,
        LastName: LastName,
        entity_id: entityId,
        address_id: addresses
        
        

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

