import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//  orders from cod method

const placeOrder = async (req, res) => {
    try {
        const {
            userId,
            items,
            amount,
            address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Cash on Delivery",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData:{}})
        res.json({
            success: true,
            message: "Order placed!"
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

// displaying all the order data in admin pannel

const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({
            success: true,
            orders
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Oderdata in client-side

const userOrders = async (req, res) => {
    try {
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({
            success: true,
            orders
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

// update order status from Admin pannel
const updateStatus = async (req, res) => {
    try {
        const {orderId, status} = req.body
        const orders = await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({
            success: true,
            message: 'Status updated!'
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

export { placeOrder, allOrders, userOrders, updateStatus }