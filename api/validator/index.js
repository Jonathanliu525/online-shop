const userSignupValidator = (req, res, next) => {
  req.check('name', 'please give the name').notEmpty();
  req
    .check('email', 'emial cannot have more than 32 charactors')
    .matches(/.+\@.+\..+/)
    .withMessage('emailAddress need a @')
    .isLength({
      min: 4,
      max: 32,
    });
  req.check('password', 'please give the password').notEmpty();
  req
    .check('password')
    .isLength({ min: 6 })
    .withMessage('password need more than 6 charactors')
    .matches(/\d/)
    .withMessage('at least one number in the password');
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};

module.exports = { userSignupValidator };
