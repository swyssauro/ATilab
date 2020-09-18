const crypt = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const usuarios = await connection('usuarios').select('*');
        return response.json(usuarios);
    },

    async create(request, response) {
        const { nome, email, password } = request.body;
        const crypto = crypt.randomBytes(9).toString('HEX');
        await connection('usuarios').insert({
            crypto,
            nome,
            email,
            password,
        })

        return response.json({ crypto });
    }
};