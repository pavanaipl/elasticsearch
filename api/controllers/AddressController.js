/**
 * AddressController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	create: function (req, res) {

    //Reading input from request object
    
    let addressLine1 = req.param("addressLine1");
    let addressLine2 = req.param("addressLine2");
    let city = req.param("city");
    let state = req.param("state");
    let zip = req.param("zip");
    

    //Inserting record in mongoDB
    Address.create({
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        city: city,
        state: state,
        zip: zip,
        

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

