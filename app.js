import express from 'express'
import path from 'path'
import fileUpload from 'express-fileupload'


const app = express()

app.use(express.json())
app.use(fileUpload())



app.post('/uploadfile',async(req,res)=>{


  try {

    const file = req.files.content

    const newpath =  path.join(process.cwd(),"content",file.name)
    await file.mv(newpath)

    return res.status(201).json({
        message:"file uploaded succesfully"
    })
    
  } catch (error) {
    return res.status(500).json({
        message:"error "+error
    })
  }

})



app.listen(9999,()=>{
    console.log("running")
})