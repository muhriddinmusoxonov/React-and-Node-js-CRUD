const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

const mongodbConnect = async () => {
    try {
        await mongoose.connect(uri);

        console.log('MonngoDb connected');
    } catch (err) {
        console.log(err);
    }
}

module.exports = {mongodbConnect};