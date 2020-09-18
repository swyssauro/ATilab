const crypt = require('crypto');
const { development } = require('../../knexfile');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const usuarios = await connection('orçamentos')
        .join('usuarios', 'crypto', '=', 'orça_crypto')
        .select([ 'orçamentos.*', 'usuarios.nome', 'usuarios.email' ]);

        return response.json(usuarios);
    },

    async create(request, response) {
        const { title, description, desenvolvedor, design, scrum_master, product_owner, project_days, project_total } = request.body;
        const orça_crypto = request.headers.authorization;

        const orçamento = await connection('orçamentos').insert({
            orça_crypto, 
            title, 
            description, 
            desenvolvedor, 
            design, 
            scrum_master,
            product_owner, 
            project_days,
            project_total
        });

        return response.json({ orçamento });
    },

    async delete(request, response) {
        const { id } = request.params;
        const orça_crypto = request.headers.authorization;

        const orçamentos = await connection('orçamentos')
        .where('id', id)
        .select('orça_crypto')
        .first();

        if (orçamentos.orça_crypto !== orça_crypto) {
            return response.status(401).json({ error: 'operação negada.'});
        }

        await connection('orçamentos').where('id', id).delete();
        return response.status(204).send();
    }
};