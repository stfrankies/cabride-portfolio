const mongoose = require('mongoose');

const dbConn = async () =>{
    try {
        mongoose.set('strictQuery', true)
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        
        console.log(`Mongo database connected: ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = dbConn;