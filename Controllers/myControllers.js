const authModule = require('../Modules/Authontication')

const defaultController = async (req, res) => {
        const id =  req.cookies.userID
        
        if (req.cookies.userID) {
                const message =  await authModule.findById(id) 
               
                res.render('index' , {message});
        } else {
                res.redirect('/login');
        }
};


module.exports = { defaultController};
