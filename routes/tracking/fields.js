var _ = require('underscore');

module.exports = {
  'pex-reference': {
      validate: 'required',
      legend: {
          className: 'form-label-bold'
      },
      className: 'inline',
      options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
      ]
  },




  'previous-names': {
      validate: [
          'required',
          { type: 'maxlength', arguments: 100 }
      ],
      dependent: {
          field: 'previous-name',
          value: true
      }
  },
  'town-of-birth': {
      validate: [
          'required'
        ]
  },
  'born-in-uk': {
      formatter: 'boolean',
      validate: 'required',
      legend: {
          className: 'form-label-bold'
      },
      options: [
          { value: true, label: 'Yes' },
          { value: false, label: 'No', toggle: 'birth-country' }
      ],
      className: 'inline'
  },
  'country-of-birth': {
      validate: 'required',
      dependent: {
          field: 'born-in-uk',
          value: false
      },
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
  'address1': {
      validate: [
          'required'
      ]
  },
  'address2': {
      labelClassName: 'visuallyhidden',
      formatter: 'removehyphens'
  },
  'town': {
      validate: [
          'required'
      ]
  },
  'postcode': {
      validate: [
          'required'
      ]
  },
  'email': {
      validate: [
          'required'
      ]
  },
  'country-code': {
    labelClassName: 'visuallyhidden',
    formatter: 'removehyphens',
    validate: [
        'required'
    ]
  },
  'mobile': {
    validate: [
        'numeric',
        'required'
    ]
  },
  'passport-options':{
    legend: {
      value: 'Select passport size'
    },
    options: [
      {value: '32', label: 'Standard adult 32-page passport (£72.50)'},
      {value: '48', label: 'Jumbo adult 48-page passport (£85.50)'}
    ],
    validate: [
      'required'
    ]
  },
  'passport-size': {
      formatter: 'boolean',
      validate: 'required',
      legend: {
          value: 'What size passport would you like?',
          className: 'form-label'
      },
      options: [
          { value: false, label: '32-page passport (free)' },
          { value: true, label: '48-page passport ({{#currency}}{{largePassportCost}}{{/currency}})' }
      ],
      dependent: {
          field: 'passport-size-dependent',
          value: 'true'
      }
  },
  braille: {
    formatter: 'boolean-strict',
    legend: {
      value: 'Add a Braille sticker'
    },
  },
  'return-passport':{
    legend: {
      value: 'How would you like us to return your ols passport?',
      className: 'visuallyhidden'
    },
    options: [
      {value: 'Special-delivery', label: 'Special delivery (£3 extra)'},
      {value: 'Standard', label: 'Standard post (free)'}
    ],
    validate: [
      'required'
    ]
  },
  'secure-return': {
      formatter: 'boolean',
      validate: 'required',
      legend: {
          value: 'How would you like us to send your old passport back to you?',
          className: 'form-label-bold'
      },
      options: [
          { value: true, label: 'Special delivery (&#163;3 extra)' },
          { value: false, label: 'Standard post (free)' }
      ]
  },
};
