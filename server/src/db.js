const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fy2mabq.mongodb.net/instantJobCoach?retryWrites=true&w=majority`;
const dbName = 'instantJobCoach';

async function connectToDb() {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db();

  setTimeout(() => client.close(), 1000);
  return db.collection('jobs');
};

async function getJobs() {
  const collection = await connectToDb()  
  return (await collection.find({})).toArray();
}

module.exports = { getJobs };
