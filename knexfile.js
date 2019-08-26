// Update with your config settings.

const localPg = {
  host: "localhost",
  database: "data",
  user: "dev",
  password: "pass"
};

const productionDBConnection = process.env.DATABASE_URL || localPg;

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/data.db3'
    },
    migrations:{
      directory: './database/migrations'
    },
    seeds:{
      directory: './database/seeds'
    }

  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: "pg",
    connection: productionDBConnection,
    migrations: {
      directory: "./database/migrations"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
