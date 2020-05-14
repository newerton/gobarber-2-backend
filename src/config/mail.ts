interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: process.env.AWS_SES_FROM_EMAIL,
      name: process.env.AWS_SES_FROM_NAME,
    },
  },
} as IMailConfig;
