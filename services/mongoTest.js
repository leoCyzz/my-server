const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'studyDB';

class MongoService {
    constructor() {}

    connect(callback) {
        try {
            MongoClient.connect(url, function(err, client){
                assert.equal(null, err);
                console.log("Connected correctly to server");

                const db = client.db(dbName);

                callback(db, function(){
                    client.close();
                });
            });
        } catch (error) {
            console.log(error);
        }
    }

    init() {
        this.connect(createCollated);
    }

    

    query() {

    }
}

function createCollated(db, callback) {
    db.createCollection('contacts',
        {
            'collation' :
            { 'locale': 'fr_CA' }
        },
    
        function(err, results) {
            console.log("Collection created.");
            callback();
        }
    );
}

module.exports = MongoService;