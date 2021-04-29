/**
 * Posts.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
   titulo: {
      type: 'string',
      columnType: 'varchar(200)'
    },
    imagem_url: {
      type: 'string',
      columnType: 'varchar(100)'
    },
    descricao: {
      type: 'string',
    },
    texto: {
      type: 'string'
    }
  },
  
  // datastore: 'postgresql'

};

