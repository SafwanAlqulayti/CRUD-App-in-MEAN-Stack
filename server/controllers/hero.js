var Hero = require('../models/hero').Hero;

module.exports = {
    create : function(request, response){
            var data = new Hero({
                name : request.body.name,
                description : request.body.description
            }).save(function(err, hero){
                if(err){
                    console.log("Error in create new hero", err);
                    throw err
                }

                response.json(hero);
            })
    },

    getAll : function(request,response){
            Hero.find({}, function(err, heros){
                if(err){
                    console.log("Error in fetching the list of heros ", err);
                    throw err;
                }

                response.json(heros)
            })
    },

    getHero : function(request, response){
        Hero.findById({ _id : request.params.id}, function(err, hero){
            if(err){
                console.log("Error in fetching single item of hero ", err);
                    throw err;
            }

            response.json(hero);
        })
    },

    updateHero : function(request, response){
            Hero.findByIdAndUpdate({ _id : request.params.id},{$set: request.body},{new : true} , function(err, hero){
                if(err){
                console.log("Error in updating single item of hero ", err);
                    throw err;
            }

            response.json(hero);
            })
    },

    removeHero : function(request, response){
            Hero.findByIdAndRemove({ _id : request.params.id}, function(err, hero){
                if(err){
                console.log("Error in removing single item of hero ", err);
                    throw err;
            }


            Hero.find({},function(err, heros){
                if(err){
                    console.log("Error in fetching the list of heros ", err);
                    throw err;
                }

                response.json(heros)
            })


            })
    }
}