const express=require('express')
const router=express.Router()
const {getContact,addContact,updateContact,deleteContact}=require("../Controllers/contactControllers")

router.get('/contacts',getContact)

router.post('/addcontact',addContact)

router.put('/updatecontact/:id',updateContact)

router.delete('/deletecontact/:id',deleteContact)

module.exports=router