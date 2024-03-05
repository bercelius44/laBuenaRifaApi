/**
 * La Buena Rifa API
 */

// Packages Imports
const express = require("express");
const cors = require("cors");

// Local Imports
const router = require("./routes/router");
const { errorHandler } = require("./utils/functions");
const { sequelize } = require("./database/database");
require("./models/user");
require("./models/rifas");
require("./models/num_rifas");

// API configuration
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler);

const { server } = require("./config/config.json");

sequelize.sync();

// Running API
app.listen(server.port, () => console.log(`Listening on port ${server.port}`));
