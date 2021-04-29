/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/homepage',
    locals: {
      pagina: {
        titulo: 'Cantinho dos Famosos',
        fundo: '/images/shutterstock_209877532.jpg',
        descricao: 'Espaço onde você encontra novidades sobre famosos'
      }
    }
  },
  'GET /contacto': {
    action: 'view-contacto',
    locals: {
      pagina: {
        titulo: 'Fale Conosco',
        fundo: '/images/Famous_deaf_actors-scaled.jpg',
        descricao: 'Alguma curiosidade? Nós iremos responder'
      }
    }
  },
  // 'GET /posts/list' : {
  //   view: 'posts/list',
  //   locals: {
  //     pagina: {
  //       titulo: 'Listagem',
  //       fundo: '/images/Famous_deaf_actors-scaled.jpg',
  //       descricao: '...'
  //     }
  //   }
  // }


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
