const mongoose = require('mongoose');
const { Schema } = mongoose;

const appSchema = new Schema({
    app_name: { type: String, require: true },
    google_play_url: { type: String, require: true },
    apk_file: { type: String, require: true, unique: true },
    apk_image: { type: String, require: true, unique: true },
    additn_info: String,
    date: String,
    user_id: String
});


module.exports = appSchema;