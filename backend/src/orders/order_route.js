const express = require('express');
const router = express.Router();
const { createAOrder, getOrdersByEmail } =  require('./order_controller');

// create an order endpoint
router.post("/", createAOrder)
// get orders by email address

router.get("/email/:email", getOrdersByEmail )

module.exports = router;