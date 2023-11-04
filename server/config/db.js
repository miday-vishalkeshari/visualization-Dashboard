const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000, // Increase the timeout value
        });
        console.log(`CONNECTED TO mongodb host=${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in mongoconnect see in file(db.js): ${error}`);
    }
}

module.exports = connectDB; // Export using CommonJS syntax






