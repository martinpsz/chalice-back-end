module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f2b2b76f0e2907ae41aa3fdc6be04ce6'),
    },
  },
});
