const _ = require('lodash');
const countries = require('../../../config/countries');

module.exports = {
  'what-to-do': {
    legend: {
      value: 'What to you want to do?',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'First', label: 'Apply for a first British passport'},
      {value: 'Change', label: 'Make a change to a current British passport (including a change of name)'},
      {value: 'Renew', label: 'Renew a British passport'},
      {value: 'Replace', label: 'Replace a lost or stolen British passport'}
    ],
    validate: [
      'required',
      {
        type:'equal',
        arguments:['Renew'], /* if the arguments are NOT selected */
        redirect:'https://passportapplication.service.gov.uk/ips-olc/'
      }
    ]
  },
'apply-uk': {
  legend: {
    value: 'Are you applying from the UK?',
    className: 'visuallyhidden'
  },
  options: [
    { value: true, label: 'Yes' },
    { value: false, label: 'No', toggle: 'application-country', child: 'select' }
  ],
  formatter: ['boolean'],
  validate: [
    'required'
  ],
  className: 'inline'
},
'application-country': {
  options: [{ value: '', label: ' ' }].concat(_.map(countries, function (c) {
    return {
      value: c.id,
      label: c.name,
      attributes: [
        {
          attribute: 'data-synonyms', value: Array.isArray(c.altName) ? c.altName.join(',') : c.altName
        }
      ]
    }
  })),
  validate: [
    'required'
  ],
  dependent: {
    field: 'apply-uk',
    value: false
  },
  className: 'typeahead'
},
  'age-day': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      validate: [
          'numeric',
          'required'
      ]
  },
  'age-year': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
      validate: [
          'numeric',
          'required'
      ]
  },
  'age-month': {
      labelClassName: 'form-label',
      formatter: 'removehyphens',
      validate: [
          'numeric',
          'required'
      ]
  },
'passport-damaged': {
  legend: {
    value: 'Is your passport damaged?',
    className: 'visuallyhidden'
  },
  options: [
    {value: 'Yes', label: 'Yes'},
    {value: 'No', label: 'No'}
  ],
  validate: [
    'required',
    {
      type:'equal',
      arguments:['No'], /* if Yes is selected */
      redirect:'https://passportapplication.service.gov.uk/ips-olc/'
    }
  ]
},
'expiry-year': {
  labelClassName: 'form-label',
  formatter: 'removehyphens',
    validate: [
        'numeric',
        'required'
    ]
},
'expiry-month': {
    labelClassName: 'form-label',
    formatter: 'removehyphens',
    validate: [
        'numeric',
        'required'
    ]
},
'uncancelled': {
legend: {
  value: 'Do you have any uncancelled passport from a different country?',
  className: 'visuallyhidden'
},
options: [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'}
],
validate: [
  'required',
  {
    type:'equal',
    arguments:['No'], /* if Yes is selected */
    redirect:'https://passportapplication.service.gov.uk/ips-olc/'
  }
]
},
  'british-citizen': {
    legend: {
      value: 'Are you a British citizen?',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'Yes', label: 'Yes'},
      {value: 'No', label: 'No'}
    ],
    validate: [
      'required',
      {
        type:'equal',
        arguments:['Yes'], /* if No is selected */
        redirect:'https://passportapplication.service.gov.uk/ips-olc/'
      }
    ]
  },
    'age-year': {
      labelClassName: 'form-label',
      formatter: 'removehyphens',
        validate: [
            'numeric',
            'required'
        ]
    },
    'age-month': {
        labelClassName: 'form-label',
        formatter: 'removehyphens',
        validate: [
            'numeric',
            'required'
        ]
    },
  'issuing-authority': {
    legend: {
      value: 'Which is your passport issuing authority?',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'UKPA', label: 'UKPA'},
      {value: 'UKPS', label: 'UKPS'},
      {value: 'IPS', label: 'IPS'},
      {value: 'Other', label: 'Other'}
    ],
    validate: [
      'required'
    ]
  }

};
