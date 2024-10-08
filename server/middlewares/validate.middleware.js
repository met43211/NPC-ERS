const validateMiddleware = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body);


  if (error) {
    return res.status(400).json({
      message: 'Validation error',
      details: error.details,
    });
  }
  
  req.body = value;

  next();
};

module.exports = {validateMiddleware}