module.exports = {
  eAdmin: function (req, res, next) {
    if (global.tipoFunc == 'ADM') {
      return next();
    } else {
      res.redirect('/');
    }
  }
};
