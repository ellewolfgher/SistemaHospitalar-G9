module.exports = {
  eUser: function (req, res, next) {
    if (global.tipoFunc == 'USER') {
      return next();
    } else {
      res.redirect('/');
    }
  }
};
