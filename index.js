const express = require('express')
// require ==> node module을 어디선가 가져오는것 ,express란 폴더에서 찾을거임 
const app = express()
const port = 3000
const handleListening = () => {

    console.log(`Listening on: http://localhost:${port}"`)

}

const handleHome = (req, res) => {
    console.log('Hi from Home!')

    console.log(req ,res);

}
// problem, there must have responce, else infinite loading... etc).. ok ,error, http message ... 







app.get("/",handleHome)
//in get method, usually calls two object, request, responce  == who and what kind of data sent,,  
app.listen(port, handleListening)