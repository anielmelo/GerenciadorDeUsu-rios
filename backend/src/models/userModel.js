const connection = require('./connection');

const getAll = async () => {
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
}

const getUser = async (id) => {
    const query = 'SELECT * FROM users WHERE id = ?;';
    const [user] = await connection.execute(query, [id]);
    return user;
}

const createUser = async (user) => {
    const { name, email, number_cellphone, birth_date } = user;
    const query = 'INSERT INTO users(name, email, number_cellphone, birth_date) VALUES (?, ?, ? ,?);';
    const [createdUser] = await connection.execute(query, [name, email, number_cellphone, birth_date]);
    return {insertId: createdUser.insertId};
}

const updateUser = async (id, user) => {
    const { name, email, number_cellphone, birth_date } = user;
    const query = 'UPDATE users SET name = ?, email = ?, number_cellphone = ?, birth_date = ? WHERE id = ?;';
    return await connection.execute(query, [name, email, number_cellphone, birth_date, id]);
}

const deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE id = ?;';
    const deletedUser = await connection.execute(query, [id]);
    return deletedUser;
}

module.exports = {
    getAll,
    getUser,
    createUser,
    updateUser,
    deleteUser
}