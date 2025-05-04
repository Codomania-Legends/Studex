const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../Security/secure.env") });

const { Sequelize } = require("sequelize");

// Validate environment variables
if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_HOST) {
    throw new Error("Missing required environment variables for database connection");
}

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        logging: false, // Disable logging for cleaner output
    }
);

// Test the connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        process.exit(1); // Exit the process if the connection fails
    }
})();

module.exports = {
    sequelize
};
