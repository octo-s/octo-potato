module.exports = {
    publicPath: '/',
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false
        }
    },
    configureWebpack: {
        devServer: {
            host: '0.0.0.0',
            disableHostCheck: true
        }
    }
};
