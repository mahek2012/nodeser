const userModel = require("../models/user.model");

// when create a service -- when you want to change into database

// thrid validation --> cheak all field are not blank

module.exports.createUser = async ({ username, email, password,role }) => {
  if (!username || !email || !password) {
    throw new Error("All Filed Are Required");
  }

  const user = await userModel.create({ username, email, password, role });

  return user;
};

// update data
module.exports.updateUser = async ({ userId, username, email }) => {
  const updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    { username, email },
    { new: true },
  );

  if (!updatedUser) {
    throw new Error("user not found");
  }

  return updatedUser;
};
