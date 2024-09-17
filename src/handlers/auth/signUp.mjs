import { StatusCodes } from 'http-status-codes';

import { hashPassword } from '../../utils/passwords.mjs';


export default async function signUpHandler(req, res, next) {
  const { body, db } = req;

  try {
    const usersCollection = db.collection('users');
    const user = await usersCollection.findOne({
      $or: [
        { phone_number: body.phone_number },
        { username: body.username },
      ],
    });

    if (user) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ error: 'An account with the username or phone number already exists' });
    }

    body.password = hashPassword(body.password);
    body.created_at = new Date();

    const { insertedId } = await usersCollection.insertOne(body);
    const data = await usersCollection.findOne({
      _id: insertedId,
    });

    res
      .status(StatusCodes.CREATED)
      .json(data);
  } catch (error) {
    next(error);
  }
}
