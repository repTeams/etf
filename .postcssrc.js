/*
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 18:46:41
 */
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {},
        "postcss-px2rem-exclude": {
            remUnit: 75,
            exclude: /node_modules/i
        }
    }
}