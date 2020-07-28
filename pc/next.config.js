/**
 * Create by fay on 4/27/20 11:59 下午
 */
const withNextConfig = require('@fay-next/config/next/config');
const assetPrefix = process.env.NODE_ENV === 'production' ? '/pc' : '';

module.exports = withNextConfig({
  assetPrefix,
  env: {
    PUBLIC_PATH: '/pc'
  },
})