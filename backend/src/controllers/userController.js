const userModel = require('./models/userModel');

const getAll = async (request, response) => {
    const users = await userModel.getAll();
    return response.status(200).json(users);
}

module.exports = {
    getAll
}