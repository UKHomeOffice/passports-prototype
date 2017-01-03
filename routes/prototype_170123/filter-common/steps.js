module.exports = {
    '/':{
      controller: require('../../../controllers/application-country'),
      fields: ['apply-uk', 'application-country'],
      controller: require('../../../controllers/go-overseas'),
      backLink: '/../prototype_170123/startpage',
      next: '/what-do-you-want-to-do', /* if Yes is selected */
      nextAlt: 'what-do-you-want-to-do-overseas', /* if they are from Germany/France */
    },
    '/what-do-you-want-to-do': {
        fields: ['what-to-do'],
        backLink: './',
        next: '/dob'
    },
    '/what-do-you-want-to-do-overseas': {
        fields: ['what-to-do-overseas'],
        backLink: './',
        next: '/dob'
    },
    '/dob': {
      fields: ['age-day', 'age-year', 'age-month'],
      controller: require('../../../controllers/go-overseas'),
      backLink: './',
      next: '/../filter', /* if they are from the UK */
      nextAlt: '../overseas', /* if they are from Germany/France */
      nextAltAlt:'../overseas-not-eligible' /* if they are from Afganistan */
    }
};
