const regex = require('../utils/regex');

exports.validateQuery = (req, res, next) => {
  const fields = ['x', 'y', 'mts', 'hr'];
  const errors = [];

  fields.forEach((field) => {
    if (req.query[field] === undefined || req.query[field].trim().length === 0) {
      errors.push(`${field} is required`);
    } else if (field === 'hr') {
      if (!regex.HOUR.test(req.query[field])) {
        errors.push(`${field} \`${req.query[field]}\` should be in format hh:mm`);
      }
    } else if (Number.isInteger(+req.query[field]) && Number.parseInt(+req.query[field]) > 0) {
      req.query[field] = Number.parseInt(+req.query[field]);
    } else {
      errors.push(`${field} \`${req.query[field]}\` is not a positive integer value`);
    }
  });

  if (errors.length > 0) {
    return res.status(400).send({
      message: `Query parameters validation failed: ${errors.join(', ')}.`,
    });
  }

  return next();
};
