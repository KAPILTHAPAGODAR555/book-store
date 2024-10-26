const Order = require("./order_model")
const createAOrder = async(req , res) => {
try {
    const newOrder = await Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
} catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({message: "failed to create order"})
}
};
const getOrdersByEmail = async(req, res)=>{
try {
    const {email} = req.params;
    const orders = await Order.find({email}).sort({createdAt: -1});
    if(!orders){
        return res.status(404).json({message: "Order not found"})
    }
    res.status(200).json(orders);
} catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({message: "failed to fetch the order"})
}
}
module.exports = {
    createAOrder,
    getOrdersByEmail
}