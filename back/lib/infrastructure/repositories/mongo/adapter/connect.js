const { MongoClient } = require("mongodb");
const { config } = require("../../../config/index");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
const dbName = DB_NAME;

module.exports = async () => {
  if (!client.isConnected()) {
    await client.connect();
    console.log("Connected succesfully to MongoDB");
  }
  return client.db(dbName);
};
