/**
 * Transaction.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

   entity_id: {
        model:'entity',
        required: true
    },
    entityuser_id: {
        model:'entityuser',
        required: true
    },
    tranDescription: {
        type:'string',
        required: true
    },

    transactionType: {
        type:'string',
        required: true,
        isIn: ['Tran Type 1', 'Tran Type 2', 'Tran Type 3'],
    },

    transactionDate: {
        type:'string',
        required: true
    },

    transactionAmount: {
        type:'number',
        required: true
    }

  },

};

