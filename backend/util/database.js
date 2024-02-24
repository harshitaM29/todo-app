const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://harshita:hfBBamGFQiV8m0Va@todo-app.rtwu0cs.mongodb.net/todo?retryWrites=true&w=majority"
  )
    .then((result) => {
      console.log("connected");
      _db = result.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
