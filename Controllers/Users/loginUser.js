const authModule = require('../../Modules/Authontication')
const bcrypt = require('bcrypt')


const userLoginFormController = (req , res) =>{
    res.render('login')
}

const userLoginFormPostController =async (req , res) =>{
    const User = await authModule.find({email : req.body.email})
    console.log("login data" , User);
    if(User){
        bcrypt.compare(req.body.password ,User[0].password , async(err , result)=>{
            if(result){
                res.cookie("userID" , User[0]._id.toString())
                res.redirect('/')
            }else{
                res.redirect('/signup')
            }
        })
    }else{
        res.redirect('/signup')
    }
    
    
}

const userLogoutController =async (req , res) =>{
    res.clearCookie('userID')
    res.redirect('/login')
}

module.exports = {userLoginFormController ,userLoginFormPostController , userLogoutController}