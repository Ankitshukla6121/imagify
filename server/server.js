import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongoDB.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'
import path from 'path'
const PORT = process.env.PORT || 4000

const app= express()


const _dirname= path.resolve(); 

app.use(express.json())
app.use(cors())

await connectDB()


app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)
app.get('/',(req,res)=>
    res.send('api working fine')
)

app.use(express.static(path.join(_dirname,"/client/dist")))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"client","dist","index.html"))
})
app.listen(PORT , ()=> console.log(' server running of port '+ PORT))