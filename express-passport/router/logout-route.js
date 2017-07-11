const router = require('express').Router();
const casLogoutUrl = 'https://cas.ucdavis.edu/cas/logout';

router.get('/', (req, res) => {
  req.logOut();
  req.session.destroy(() => {
    res.clearCookie('connect.sid', { path: '/' });
    res.redirect(casLogoutUrl);
  });
});

module.exports = router;
