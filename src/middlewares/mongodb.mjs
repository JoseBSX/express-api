import { StatusCodes } from 'http-status-codes';
import { MongoClient, ServerApiVersion } from 'mongodb';

let db;

export default async function mongodb(req, res, next) {
  if (!db) {
    try {
      const { MONGO_URI } = process.env;
      const client = new MongoClient(MONGO_URI, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });

      await client.connect();

      console.log('Successful connection to MongoDB');
      db = client.db('db-test');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);

      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  req.db = db;
  next();
}
