import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages () {
    // messages from files
    let locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json/i)
    const messages = {}
    locales.keys().forEach(key => {
        let matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1 && matched.index === 2) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }

        matched = key.match(/([A-Za-z0-9-_]+)\/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 2 && matched.index === 2) {
            const locale = matched[1]
            const component = matched[2]
            messages[locale][component] = locales(key)
        }
    })
    return messages
}

export default new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: loadLocaleMessages()
})
