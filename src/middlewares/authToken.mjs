import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';


export default async function authToken(req, res, next) {
  const token = req.headers['x-token'];

  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: 'Token not found' });
  }

  const dbToken = await req.db.collection('tokens').findOne({ token });

  if (!dbToken) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: 'Invalid token' });
  }

  const { API_SECRET_KEY } = process.env;

  jwt.verify(token, API_SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ error: 'Invalid token' });
    }

    req.user = user;
    next();
  });
}
