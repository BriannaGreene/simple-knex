// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/{{YOUR NAME HERE}}'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
