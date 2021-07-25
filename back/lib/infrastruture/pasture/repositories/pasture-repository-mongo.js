const {MongoClient, ObjectId} = require("mongodb") 
const {config} = require("../../config/index")
const Pasture = require("../../../domain/pasture/model/pasture")
const PastureRepository = require("../../../domain/pasture/pasture-repository")


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
const dbName = DB_NAME;
const collection = "pastures";

async function connect() {
    if (!client.isConnected()) {
      await client.connect();
      console.log('Connected succesfully to MongoDB');
    }
    return client.db(dbName);
} 

class PastureRepositoryMongo extends PastureRepository{
    constructor(){
        super();
    }
    async createPasture(pasture){
        return connect()
            .then((db) => {
                return db.collection(collection).insertOne(pasture);
            })
            .then((result) =>{
                console.log(result.insertedId)
                return result.insertedId
            });
    }
    async deletePasture(pastureId){
        const exist = await this.getByPastureId(collection, pastureId);
        if (!exist) {
            throw new Error("El potrero no existe");
        }
        return connect()
            .then((db) => {
            return db.collection(collection).deleteOne({ _id: ObjectId(pastureId) });
            })
            .then(() => pastureId);
    }

    async getAllPastures(){
        return connect().then((db) => {
            return db.collection(collection).find(query).toArray();
          });
    }
    async updatePasture(pastureId, data){
        return connect()
            .then((db) => {
                return db
                .collection(collection)
                .updateOne({ _id: ObjectId(pastureId) }, { $set: data }, { upsert: true });
        })
        .then((result) => result.upsertedId || pastureId);
    }
    async getByPastureId(pastureId){
        return connect().then((db) => {
            return db.collection(collection).findOne({ _id: ObjectId(pastureId) });
          });
    }
}
module.exports = PastureRepositoryMongo;
   
