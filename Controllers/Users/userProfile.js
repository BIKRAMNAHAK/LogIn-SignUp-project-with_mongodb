const authModule = require('../../Modules/Authontication')

const userprofileController = async(req , res )=>{
    const id = req.cookies.userID
    console.log("profile id " , id);
    
    const usersdata = await authModule.findById(id)
    res.render('profile-view' , {usersdata})
}

module.exports = {userprofileController}