import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "bellatrix",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};

// import mongoose from "mongoose";
// import { config } from "dotenv";

// dotenv.config(); // Load environment variables

// export const dbConnection = () => {
//   const uri = process.env.MONGO_URI;

//   if (!uri) {
//     console.error("Error: MONGO_URI is undefined. Check your .env file.");
//     process.exit(1); // Exit the app if no URI is found
//   }

//   mongoose
//     .connect(uri, {
//       dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
//     })
//     .then(() => console.log("Connected to database!"))
//     .catch((err) => console.error("Error connecting to database:", err));
// };
// import mongoose from "mongoose";
// import "./config/config.env"; // Import the config file to load environment variables

// export const dbConnection = () => {
//   const uri = process.env.MONGO_URI;

//   if (!uri) {
//     console.error("Error: MONGO_URI is undefined. Check your .env file.");
//     process.exit(1); // Exit the app if no URI is found
//   }

//   mongoose
//     .connect(uri, {
//       dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
//     })
//     .then(() => console.log("Connected to database!"))
//     .catch((err) => console.error("Error connecting to database:", err));
// };
