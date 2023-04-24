const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfShopping',

  exposes: {
    // './Component': './projects/mf-shopping/src/app/app.component.ts',
    './ProductsModule': './projects/mf-shopping/src/app/products/products.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings: ["@commons-lib"],

});
