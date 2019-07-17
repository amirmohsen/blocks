module.exports = ({ envOptions = {} } = {}) => ({
  presets: [['@babel/preset-env', envOptions], '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: false
      }
    ]
  ]
});
