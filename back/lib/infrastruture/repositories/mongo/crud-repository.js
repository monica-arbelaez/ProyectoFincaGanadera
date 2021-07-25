const { ObjectId } = require("mongodb");
const connect = require("./connect");

async function create(collection, pasture) {
  return connect()
    .then((db) => {
      return db.collection(collection).insertOne(pasture);
    })
    .then((result) => result.insertedId);
}
async function remove(collection, pastureId) {
  const exist = await this.getByPastureId(pastureId);
  if (!exist) {
    throw new Error("El potrero no existe");
  }
  return connect()
    .then((db) => {
      return db.collection(collection).deleteOne({ _id: ObjectId(pastureId) });
    })
    .then(() => pastureId);
}

async function getAll(collection) {
  return connect().then((db) => {
    return db.collection(collection).find().toArray();
  });
}
async function update(collection, pastureId, data) {
  return connect()
    .then((db) => {
      return db
        .collection(collection)
        .updateOne(
          { _id: ObjectId(pastureId) },
          { $set: data },
          { upsert: true }
        );
    })
    .then((result) => result.upsertedId || pastureId);
}
async function getById(collection, pastureId) {
  return connect().then((db) => {
    return db.collection(collection).findOne({ _id: ObjectId(pastureId) });
  });
}
module.exports = {
  create,
  remove,
  getAll,
  update,
  getById,
};
