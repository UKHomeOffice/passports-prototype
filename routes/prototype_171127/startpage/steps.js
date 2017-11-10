module.exports = {
    '/': {
      next: 'before-you-continue'
    },
    '/before-you-continue':{
      next: '/../filter'
    }
};
