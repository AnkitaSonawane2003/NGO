require('dotenv').config();  // Load .env file

const app = require("./app");
const { ConnectDb } = require("./configs/db.config");
const cors = require('cors');


app.use(cors());  // Allow all origins, or configure it based on your needs

ConnectDb();

const port = process.env.PORT_NUM || 7000;
app.listen(port,()=>{
    console.log(`Server is Starting at ${port}`);
});
