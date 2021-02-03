import dotenv from "dotenv";
import app from  "./app";
import "./db";
import "./models/Videos";
import "./models/Comments";


dotenv.config();


const PORT = process.env.PORT || 4000;


const handleListening = () => console.log(`✅listening on localhost:${PORT}`);



app.listen(PORT,handleListening);

