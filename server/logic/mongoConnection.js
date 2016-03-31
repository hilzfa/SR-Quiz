/**
 * Created by fabi on 31.03.16.
 */

(function() {

    var MongoClient = require('mongodb').MongoClient;
    var assert = require('assert');

    var url = 'mongodb://localhost:27017/test';

    module.exports.connect = function() {
        return MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            console.log("Connected correctly to server.");
            var collection = db.collection('name');
            var cursor = collection.find();
            cursor.toArray(function(err,items){
                console.log(items);
            });
            
        });
    }

}());