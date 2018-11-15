/**
 * EntityUser.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    firstName: { type: 'string', required: true },
    LastName: { type: 'string', required: true },
    entity_id: {model:'entity', required: true},
    address_id:{
        model:'address',
        required: true
    },
  
  },

};

