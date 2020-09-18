
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function ( table ) {
        table.string('crypto').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};
