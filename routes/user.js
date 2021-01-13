const { findByIdAndUpdate } = require('../Models/User')
const User = require('../Models/User')

const router = require('express').Router()

// get all users
router.get('/', async(req, res)=>{
    try{
        const users = await User.find()
        res.send(users)
    }
    catch(err){
        res.status(400).send(err)
    }
    
})

// create and save new user
router.post('/register', async(req, res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try{
        const userSaved = await user.save()
        res.send(userSaved)
    } 
    catch(err){
        res.status(400).send(err)
    }  
})

// Update a user
router.put('/update/:id', async(req, res)=>{
    try{
        await User.findOneAndUpdate({_id: req.params.id}, {$set: req.body},{new: true, upsert:true})
        res.send('successfuly updating')
    }
    
    catch(err){
        res.status(400).send(err)
    }
})

// Delete an user
router.delete('/delete/:id', async(req, res)=>{
    try{
        await User.findByIdAndRemove({_id: req.params.id})
        res.send('successfuly deleted user')
    }
    catch(err){
        res.status(400).send(err)
    }
})


module.exports = router