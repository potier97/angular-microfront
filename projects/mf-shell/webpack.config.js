const { environment } = require('./src/environments/environment');
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');


module.exports = withModuleFederationPlugin({

  remotes: {
    "mfPayments": `${environment.urlMf1}/remoteEntry.js`,
    "mfShopping": `${environment.urlMf1}/remoteEntry.js`,    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings: ["@commons-lib"],
});
