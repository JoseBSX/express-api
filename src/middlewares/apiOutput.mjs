import { getReasonPhrase } from 'http-status-codes';


export default function apiOutput(req, res, next) {
  const { url, requestId } = req;
  const { json } = res;

  res.json = function (data) {
    return json.call(this, {
      code: res.statusCode,
      message: getReasonPhrase(res.statusCode),
      requestId,
      url,
      data,
    });
  };

  next();
}
