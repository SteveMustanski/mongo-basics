const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learning_mongo';

const findDocuments = (db, callback) => {
  const collection = db.collection('tours');

  collection.find({ tourPackage: 'Snowboard Cali' }).toArray((err, docs) => {
    console.log(docs);
    callback;
  });
};

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  console.log(`Connected to db server on ${url}.`);
  const db = client.db('learning_mongo');
  findDocuments(db, () => {});
  client.close();
});
