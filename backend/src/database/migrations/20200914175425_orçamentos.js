
exports.up = function(knex) {
    return knex.schema.createTable('orçamentos', function ( table ) {
        table.increments();
        table.string('orça_crypto').notNullable();
        table.foreign('orça_crypto').references('crypto').inTable('usuarios');
        table.string('title').notNullable();
        table.string('description').notNullable();

        table.decimal('desenvolvedor').defaultTo('1150');
        table.decimal('design').defaultTo('1050');
        table.decimal('scrum_master').defaultTo('900');
        table.decimal('product_owner').defaultTo('1500');
        table.decimal('project_days').defaultTo('200');

        table.decimal('project_total');

        table.string('status').notNullable().defaultTo('pendente');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('orçamentos');
};
