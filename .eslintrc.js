module.exports = {
  extends: ['airbnb'],
  env:{
      'browser':true,
      'node':true,
      'jasmine':true,
    },
  parser: 'babel-eslint',
  plugins: [
    'babel',
  ],
  rules:{
    'max-len':[
      2,
      {
        code:80,
        ignoreUrls:true,
        ignoreStrings:true,
      }
    ],
    'arrow-parens':[
      2,
      'as-needed',
    ],
    'react/jsx-curly-spacing': [
      2,
      'always',
    ],
    'jsx-quotes': [
      2,
      'prefer-single',
    ],
    'react/jsx-equals-spacing': [
      2,
      'always',
    ],
    'comma-dangle':[
      2,
      'always-multiline',
    ],
    'react/jsx-boolean-value': [
      2,
      'always',
    ],
    'no-underscore-dangle': [2, { allow: ['__', '_id', ] }],
    'no-mixed-operators': [0],

    'consistent-return':0,

    camelcase:0,
    'react/forbid-prop-types':0,
  },
};
