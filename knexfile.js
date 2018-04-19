module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres:///drill1'
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
};
