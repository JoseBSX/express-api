import { StatusCodes } from 'http-status-codes';

export default function errorHandler(err, req, res, next) {
  console.error(err.stack);

  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ error: err.message });
}
