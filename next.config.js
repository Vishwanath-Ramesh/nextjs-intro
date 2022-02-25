const withPlugins = require("next-compose-plugins");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
const { PHASE_PRODUCTION_SERVER } = require("next/constants");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

dotenvLoad();

const withNextEnv = nextEnv();

const config = {
  webpack: {
    // webpack config properties
  },
  env: {
    BASE_URL: process.env.BASE_URL, // expose .env to client scripts
  },
};

module.exports = withPlugins([withNextEnv], config);

/*  This can also be used
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      ...defaultConfig,
      webpack: {
        plugins: [new BundleAnalyzerPlugin()],
      },
    };
  }

  return defaultConfig;
};
*/
