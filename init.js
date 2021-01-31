import app from  "./app";
import "./db";



const PORT = 4000;


const handleListening = () => console.log(`✅listening on localhost:${PORT}`);



app.listen(PORT,handleListening);

