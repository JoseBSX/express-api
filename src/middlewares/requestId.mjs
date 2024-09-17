import { v4 as uuid } from 'uuid';


export default function requestId(req, res, next) {
  const requestId = uuid();

  res.setHeader('X-Request-Id', requestId);
  req.requestId = requestId;

  next();
}
