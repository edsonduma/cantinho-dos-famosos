/**
 * PostsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Posts = require("../models/Posts");

module.exports = {
    find: function(req, res) {
        // Posts.find().exec(function(err, result) {
        sails.models.posts.find().exec(function(err, result) {
            if (err) {
                res.send(500, {error: 'Database error'});
            }

            res.view('posts/list', {
                pagina: {
                    titulo: 'As ultimas novidades',
                    fundo: '/images/shutterstock_209877532.jpg',
                    descricao: 'Veja aqui todas as novidades sobre famosos',
                },
                posts:result
            });
        });
    },
    update: function(req, res) {
        sails.models.posts.findOne({id: req.params.id}).exec(function(err, result) {
            if (err) {
                res.send(500, {error: 'Database error'});
            }

            res.view('posts/post', {
                pagina: {
                    titulo: result.titulo,
                    fundo: result.imagem_url,
                    descricao: result.descricao,
                },
                post:result
            });
        });
    }
};

