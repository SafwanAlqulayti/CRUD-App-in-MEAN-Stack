var express = require('express');
var router = express.Router();
var Hero = require('../controllers/hero');

module.exports = function(router,Hero){
    router.get('/', function(request, response){
        response.send("Hero CRUD Api is on the Air");
    });

    router.post('/createHero', Hero.create);
    router.get('/getHeros', Hero.getAll);
    router.get('/getHero/:id', Hero.getHero);
    router.put('/updateHero/:id', Hero.updateHero);
    router.delete('/removeHero/:id', Hero.removeHero);
}