const mongoose = require("mongoose")
//const db = "mongodb+srv://suhani:XK9Q9A0T5SSTO2eH@cluster0.luen6yz.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true)
    await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas");
    })
  }
  catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
