// Back-end server file

// Required NPM imports
const mongoose = require("mongoose");

// Required Express import
const app = require("./app");

const API_PORT = process.env.PORT || 8080;

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
};

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/MERNContactManager", mongoOptions)
    .then(() => {
        console.log(`Connected to MongoDB.`);
    })
    .catch(() => {
        console.error(`Could not connect to MongoDB.`);
    });

// Express Server Listener
app.listen(API_PORT, () => {
    console.log(`Express sever listening on port ${API_PORT}.`);
});
