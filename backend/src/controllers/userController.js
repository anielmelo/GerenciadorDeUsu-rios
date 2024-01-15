const userModel = require('../models/userModel');

const getAll = async (request, response) => {
    const users = await userModel.getAll();
    return response.status(200).json(users);
}

const getUser = async (request, response) => {
    const { id } = request.params;
    const user = await userModel.getUser(id);
    return response.status(200).json(user);
}

const createUser = async (request, response) => {
    const user = request.body;
    const createdUser = await userModel.createUser(user);
    return response.status(201).json(createdUser);
}

const updateUser = async (request, response) => {
    const { id } = request.params;
    await userModel.updateUser(id, request.body);
    return response.status(204).json();
}

const deleteUser = async (request, response) => {
    const { id } = request.params;
    await userModel.deleteUser(id);
    return response.status(204).json();
}

module.exports = {
    getAll,
    getUser,
    createUser,
    updateUser,
    deleteUser
}