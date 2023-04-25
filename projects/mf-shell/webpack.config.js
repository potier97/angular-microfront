// const { environment } = require('./src/environments/environment');
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const mfPaymentsUrl = process.env.MF_PAYMENTS_URL || 'http://localhost:4208';
const mfShoppingUrl = process.env.MF_SHOPPING_URL || 'http://localhost:4210';

module.exports = withModuleFederationPlugin({

  remotes: {
    // "mfPayments": `http://localhost:4208/remoteEntry.js`,
    // "mfShopping": "http://localhost:4210/remoteEntry.js",    
    "mfPayments": `${mfPaymentsUrl}/remoteEntry.js`,
    "mfShopping": `${mfShoppingUrl}/remoteEntry.js`,
  },
  // remotes: {
  //   "mfPayments": `${environment.urlMf1}/remoteEntry.js`,
  //   "mfShopping": `${environment.urlMf1}/remoteEntry.js`,    
  // },


  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings: ["@commons-lib"],
});
