export default {
  jwt: {
    secret: process.env.APP_SECRET || Date.now().toString(),
    expiresIn: '1d',
  },
};
