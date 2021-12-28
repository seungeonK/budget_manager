const express = require('express');

const router = express.Router();
////https://localhost:5000/transaction

router.get('/', (req, res) => {
    try {
        res.status(200).send('transaction/')
    } catch (error) {
        console.log({ message: error.message });
    }
});

//export default router <=> import
module.exports = router;