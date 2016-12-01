var router = require('express').Router();

router.use('/users', require('./users/userRoutes'));
router.use('/sculptors', require('./sculptors/sculptorRoutes'));
router.use('/products', require('./products/productRoutes'));

module.exports = router;
