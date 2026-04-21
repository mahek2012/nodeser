// show all user logic

const userModel = require("../models/user.model")


module.exports.getAllUser = async ()=>{
 const allUser = await userModel.find();

 return allUser;
}


module.exports.deleteUser = async (id) =>{
    const user = await userModel.findOneAndDelete({_id: id})

    return user;
}