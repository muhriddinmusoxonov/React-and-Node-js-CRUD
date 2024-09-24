const { Router } = require('express');
const router = Router();
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    removeProduct
} = require('../Controller/productControl');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', removeProduct);

module.exports = router;