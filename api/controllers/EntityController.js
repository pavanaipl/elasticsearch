/**
 * EntityController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  create: function (req, res) {

    //Reading input from request object
    
    let entityName = req.param("entityName");
    let entityTypes = req.param("entityTypes");
    

    //Inserting record in mongoDB
    Entity.create({
        entityName: entityName,
        entityTypes: entityTypes,
        

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

