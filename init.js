import app from  "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();
import "./models/Videos";
import "./models/Comments";
//now it Data base will work



const PORT = process.env.PORT || 4000;


const handleListening = () => console.log(`✅listening on localhost:${PORT}`);



app.listen(PORT,handleListening);

