/**
 * Address.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  

   attributes: {

    addressLine1: { type: 'string', required: true },
    addressLine2: { type: 'string', required: true },
    city: { type: 'string', required: true},
    state: { type: 'string', required: true},
    zip: { type: 'number', required: true},
    
  
  },

  

};

