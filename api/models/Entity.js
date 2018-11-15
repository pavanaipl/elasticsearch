/**
 * Entity.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    entityName: { type: 'string', required: true },
   
    entityTypes: {
        type: 'string',
        isIn: ['type 1', 'type 2', 'type 3'],
        required: true
    }
    


  },

};


