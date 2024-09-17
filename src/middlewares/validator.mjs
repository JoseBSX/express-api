export default function (schema) {
  return (req, res, next) => {
    const { error, value } = schema.tailor(req.method).validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.details.map(({ message, path, type }) => ({ message, path, type })),
      });
    }

    req.body = value;

    next();
  };
}
