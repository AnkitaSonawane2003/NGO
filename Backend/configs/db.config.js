const DB_URL = 'mongodb+srv://rajaturanvir3154:Stog2EGlqvjSl4qx@ngoconnector.u1qq8.mongodb.net/';

const mongoose = require('mongoose');

exports.ConnectDb = () => {

    mongoose.connect(DB_URL,{dbName:"NgoConnect"})
    .then((con) => {
        console.log(`Database Connected : ${con.connection.host}`)
    
    })
    .catch((err) =>{
        console.log(err);
    })
};