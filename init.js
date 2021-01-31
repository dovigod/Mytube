import app from  "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();
import "./models/Videos";




const PORT = process.env.PORT || 4000;





const handleListening = () => console.log(`✅listening on localhost:${PORT}`);



app.listen(PORT,handleListening);

