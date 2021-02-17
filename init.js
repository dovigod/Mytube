import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import './db';
import './models/Videos';
import './models/Comments';
import './models/user';

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✅listening on localhost:${PORT}`);
console.log(typeof process.env.GH_ID);
app.listen(PORT, handleListening);
