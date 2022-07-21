const mongoose=require("mongoose")
const FormData=new mongoose.Schema({
    DATE:{type:String},
    SB_NO:{type:String},
    BE_NO:{type:String},
    CHA:{type:String},
    LINER:{type:String},
    CARGO:{type:String},
    PACK_WEIGHT:{type:String},
    LABOUR:{type:String},
    TYPE_OF_OPERATION:{type:String},
    Import_export:{type:String},
    EXP_IMP_NAME:{type:String},
    OPERATION:{type:String},
    FROM:{type:String},
    TO:{type:String},
    FROM_CONTAINER:{type:String},
    TO_CONTAINER:{type:String},
    PACKS:{type:String},
    CONTAINER_SIZE:{type:String},
    FILLING_DETAILS:{type:String}

});
const Uploads= mongoose.model("UploadFormData",FormData)
module.exports=Uploads