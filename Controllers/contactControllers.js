const Contact=require("../models/contactSchema")
const addContact=async(req,res) =>{
try{
    const newContact=new Contact(req.body)
    await newContact.save()
    res.status(101).json({message:"contact added successfully",newContact})
    }
catch(error){
    res.status(500).json({message:error.message})
    }
}

const getContact=async(req,res)=>{
    try{
        const contact=await Contact.find()
        res.status(200).json({message:"find all contacts",contact})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const updateContact=async(req,res)=>{
    try{
        const id=req.params.id
        const cont=req.body
        const updatecontact=await Contact.findByIdAndUpdate(id,cont,{new:true})
        
        res.status(200).json({message:"contact updated successfully",updatecontact})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const deleteContact=async(req,res)=>{
    try{
        const id=req.params.id

        const removecontact= await Contact.findByIdAndDelete(id)
        res.status(200).json({message:"contact deleted successfully",removecontact})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
module.exports={addContact,getContact,updateContact,deleteContact};
