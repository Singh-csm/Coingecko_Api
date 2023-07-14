const mongoose = require('mongoose');

const connectDB = async () => {
    let connectToDB  = await mongoose.connect("mongodb+srv://singh-csm:GIUPM5681K@singh-csm.nmfw5jk.mongodb.net/coingecko_api", { useNewUrlParser: true})
    console.log("connected to mongodb")
}

module.exports.connectDB = connectDB