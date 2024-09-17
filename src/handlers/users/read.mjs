import { StatusCodes } from 'http-status-codes';
import { ObjectId } from 'mongodb';

export default async function readHandler(req, res, next) {
  const { db, params } = req;

  try {
    const usersCollection = db.collection('users');
    let data, code = StatusCodes.OK;

    if (params.id) {
      data = await usersCollection.findOne({
        _id: ObjectId.createFromHexString(params.id),
      });
      if (!data) code = StatusCodes.NOT_FOUND;
    } else {
      data = await usersCollection.find({}).toArray();
    }

    res.status(code).json(data);
  } catch (error) {
    next(error);
  }
}
