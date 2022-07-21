const express=require("express")
require("./database/database")
const Uploads=require("./model/schema")
const app = express();
const port=process.env.PORT || 5000

var cors = require('cors');
app.use(cors());

app.use(express.json());
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",async(req,res)=>{
    const EachUpload=await Uploads.find()
    res.send(EachUpload)
})
app.post("/FormDetails",async(req,res)=>{
    console.log(req.body)
    const { DATE,SB_NO,BE_NO,CHA,LINER,CARGO,
            PACK_WEIGHT,LABOUR,TYPE_OF_OPERATION,
            Import_export,EXP_IMP_NAME,
            OPERATION,FROM,TO,FROM_CONTAINER,
            TO_CONTAINER,PACKS,CONTAINER_SIZE,FILLING_DETAILS} = req.body
    const UploadFormData=new Uploads({
        DATE,SB_NO,BE_NO,CHA,LINER,CARGO,
            PACK_WEIGHT,LABOUR,TYPE_OF_OPERATION,
            Import_export,EXP_IMP_NAME,
            OPERATION,FROM,TO,FROM_CONTAINER,
            TO_CONTAINER,PACKS,CONTAINER_SIZE,FILLING_DETAILS
    })
    const upload_data= await UploadFormData.save();
    console.log(upload_data)
   
    res.send(
        {
            status:"post created",
            data:upload_data        })
})
app.listen(port,()=>{console.log("server connected "+port)})