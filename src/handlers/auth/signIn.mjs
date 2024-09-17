import jwt from 'jsonwebtoken';
import { verifyPassword } from '../../utils/passwords.mjs';
import { StatusCodes } from 'http-status-codes';

export default async function signInHandler(req, res, next) {
  const { body, db } = req;

  try {
    const user = await db.collection('users').findOne({
      $or: [
        { phone_number: body.phone_number },
        { username: body.username },
      ],
    });

    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: 'User not found' });
    }

    if (!verifyPassword(body.password, user.password)) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: 'Invalid password' });
    }

    const { API_SECRET_KEY } = process.env;
    const token = jwt.sign({ user }, API_SECRET_KEY, { expiresIn: '1h' });

    await db.collection('tokens').insertOne({
      client: req.headers['user-agent'],
      created_at: new Date(),
      token,
    });

    res
      .status(StatusCodes.CREATED)
      .json({ user, token });
  } catch (error) {
    next(error);
  }
}
