function withErrorStack(error, stack) {
  return { error, stack };
}
function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}
function errorHandler(err, req, res, next) {
  res.status(err.status || 402);
  res.json(withErrorStack(err.message, err.stack));
}

module.exports = {
  logErrors,
  errorHandler,
};
