const express = require('express')
// require ==> node module을 어디선가 가져오는것 ,express란 폴더에서 찾을거임 
const app = express()
const port = 4000
const handleListening = () => {

    console.log("Listening on: http://localhost:4000")

}
app.listen(port, handleListening)