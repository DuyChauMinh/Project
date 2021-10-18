const Product = require('../models/productModel')
const ErrorHander = require('../utils/errorhander')
const catchAsyncError = require('../middleware/catchAsyncError')
//create product --admin
exports.createProduct = catchAsyncError(
    async (req, res, next) => {
        const product = await Product.create(req.body)
        res.status(201).json({
          success: true,
          product,
        })
      }
)

//get all product
exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
  res.status(200).json({ 
      success:true,
      products
   })
}

//get product details
exports.getProductDetails = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      product,
    });
  };
//update product --admin
exports.updateProduct = async (req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404));
      }
    
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators: true,
        useFindAndModify: false,

    })
    res.status(200).json({
        success:true,
        product
    })
}

//delete product --admin

exports.deleteProduct = async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404));
      }
    await product.remove();

    res.status(200).json({
        success:true,
        message:"Product deleted"
    })
}
