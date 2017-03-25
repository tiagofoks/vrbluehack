var db = require('../db_config.js');

exports.list = function(callback){
   
   db.Photo.find({}, function(error, photos){
      
      if(error){
         
         callback({error:'Can not return the photos'});
      } else {

         callback(photos);
      }
   });
};


exports.photo = function(obstacle, callback){
   
   db.Photo.findByObstacle(obstacle, function(error, photo){
      
      if(error){
         
         callback({error:'Can not find photos'});
      } else {

         callback(photo);
      }
   });
};


exports.save = function(obstacle, callback){
   
   new db.Photo({

      'obstacle': obstacle,
      'created_at': new Date()
   }).save(function(error, photo){
      
      if(error){
         
         callback({error:'Can not save the poto'});
      } else {

         callback(photo);
      }
   })
};


exports.update = function(id, obstacle, callback){
   
   db.Photo.findByObstacle(obstacle, function(error, photo) {

      if(obstacle){
         
         product.obstacle = obstacle;
      }

      product.save(function(error, photo){
      
         if(error){
         
            callback({error:'Can not save the photo'});
         } else {

            callback(photo);
         }     
      });
   });
};