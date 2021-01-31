import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();



mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useFindAndModify : false,
    useUnifiedTopology: true,
    }
);
// connect to database on string format

const db = mongoose.connection;


const handleError = () => console.log(`❌ Error on connection '127.0.0.1: 27017' error = ${error}`);

const handleOpen = error => console.log("✅ Connected to DB '127.0.0.1: 27017'")
db.once("open", handleOpen);

db.on("error", handleError);


//dotenv hides information which developer doesn't want to show etc) db url..