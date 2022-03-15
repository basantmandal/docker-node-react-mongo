const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;

require('dotenv').config();

const { HOST_NAME, PORT } = process.env;
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } = process.env;
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

app.get('/', async (request, response) => {
    let mongoConnectionStatus = await connect();
    await insert_data();
    response.status(201).json({ 'status': 'NodeJs Working Fine', 'MongoDB Status': mongoConnectionStatus.status, 'MongoDB URL': mongoConnectionStatus.url });
});

app.listen(PORT, () => {
    console.log(`Node App Listening At ${HOST_NAME}:${PORT}`);
});

const connect = async () => {
    console.log('Attempting to connect to MongoDB...');
    const MONGO_OPTIONS = {
        useNewUrlParser: true
    };

    try {
        await mongoose.connect(MONGO_URL, MONGO_OPTIONS);
        console.log('Connection Established...');
        return { status: 'MongoDB Connection Established', url };
    } catch (error) {
        console.log('MongoDB Connection Error - ', error.message);
        return { status: 'MongoDB Connection Error' + error.message, url };
    }
};

const insert_data = async () => {
    const user_schema = new Schema({
        Name: String,
        Email: String
    });
    const Users = mongoose.model('Users', user_schema);

    // New Users Instance
    var data1 = new Users({ Name: 'Basant Mandal', Email: 'basantmandal@gmail.com' });

    // Save Model - Database
    data1.save(function (err, response) {
        if (err) {
            return console.error(err);
        } else {
            console.log('Entry for ' + response.Name + ' saved to users collection & id is : ' + response._id);
        }
    });
};
