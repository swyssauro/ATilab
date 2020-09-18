const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const orça_crypto = request.headers.authorization;
        const orçamentos = await connection('orçamentos')
        .where('orça_crypto', orça_crypto)
        .select('*');

        return response.json(orçamentos);
    }
}