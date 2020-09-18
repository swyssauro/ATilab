const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { email, password } = request.body;
        const usuarios = await connection('usuarios')
        .where('email', email).where('password', password)
        .select('crypto').select('nome')
        .first();

        if (!usuarios) {
            return response.status(400).json({ error: 'usuario não encontrado.'})
        }

        return response.json(usuarios);
    }
}