export default function logger(req, res, next) {
  const { method, requestId, url } = req;

  console.info(`[${new Date().toISOString()} ${requestId}]:`, method, url);

  next();
}
