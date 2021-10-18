const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")



//handling uncaught exeption
process.on("uncaughtException", (err)=>{
    console.log(`error: ${err.message}`)
    console.log(`Shutting down the server due to  uncaught exeption`)
    process.exit(1)
})


//config
dotenv.config({path:"backend/config/config.env"})


//connect db
connectDatabase()

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

// unhandled promise rejection
process.on("unhandledRejection", (err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server due to unhanled promise rejection`)

     server.close(()=>{
         process.exit(1)
     })
})
//11850