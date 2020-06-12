// Main file for Express Server and API

// Required Imports
const express = require("express");

// App Server Instance
const app = express();

// JSON Body Parser
app.use(express.json());

// TODO import and use routes here

module.exports = app;
