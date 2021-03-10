/**
 * postcss.config.js
 * @author wangbo
 * @since 2019-04-10
 */

module.exports = {
    plugins: [require('autoprefixer')({ overrideBrowserslist: ['Chrome > 56', 'Firefox > 59', 'Safari > 7'] })]
};
