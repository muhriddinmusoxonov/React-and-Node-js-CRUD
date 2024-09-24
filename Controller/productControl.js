const Product = require("../models/products");

const getProducts = async (req, res) => {
        try {
            const product = await Product.find();
            res.send(product);
        } catch (error) {
            console.log(error);
        }
}

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: 'Not found'
            })
        }

        return res.status(200).json({
            message: 'success',
            product
        })
    } catch (error) {
        console.log(error);
    }
}

const createProduct = async(req, res) => {
    try {
        const { type, brand, image, price, desc } = req.body;

        const newProduct = await Product.create({
            type,
            brand,
            image,
            price,
            desc
        });

        return res.status(201).json({
            message: "create",
            newProduct
        });
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async (req, res) => {
    try {
        const { type, brand, image, price, desc } = req.body;
        const product = await Product.findByIdAndUpdate(req.params.id,{
            type,
            brand,
            image,
            price,
            desc
        });

        return res.status(200).json({
            message: 'success',
            product
        });
    } catch (error) {
        console.log(error);
    }
}

const removeProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            message: 'Deleted',
            product
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    removeProduct
}