const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => console.log("Database connected"))
        .catch((error) => {
            console.log("Database connection Issues:", error);
            process.exit(1);
        });
};

module.exports = connectWithDb;