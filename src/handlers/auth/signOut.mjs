export default async function signOutHandler(req, res, next) {
  const { db, headers } = req;

  try {
    const tokensCollection = db.collection('tokens');

    await tokensCollection.deleteOne({ token: headers['x-token'] });

    res.json();
  } catch (error) {
    next(error);
  }
}
