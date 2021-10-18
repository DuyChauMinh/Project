const ErrorHandler = require("../utils/errorhander");

module.exports = (err, req,res,  next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  res.status(err.statusCode).json({
      //display on postman
    success: false,
    message: err.message,
  });
};
//1.22.58