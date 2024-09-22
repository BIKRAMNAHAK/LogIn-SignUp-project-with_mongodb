const authModule = require('../../Modules/Authontication')

const userprofileController = async(req , res )=>{
    const id = req.cookies.userID    
    const usersdata = await authModule.findById(id)
    res.render('profile-view' , {usersdata})
}

module.exports = {userprofileController}