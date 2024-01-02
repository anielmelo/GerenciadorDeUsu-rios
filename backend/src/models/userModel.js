const connection = require('./connection');

const getAll = async () => {
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
}

/*
const createUser = async () => {}
const updateUser = async () => {}
const deleteUser = async () => {}
*/

module.exports = {
    getAll
}