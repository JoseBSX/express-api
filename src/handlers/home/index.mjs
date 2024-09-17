export default function indexHandler(req, res) {

  res.json({
    author: {
      name: 'José Beltrán Solís',
      email: 'j.beltran@live.com.mx',
    },
    name: 'Express API',
    version: '1.0.0',
  });
}
