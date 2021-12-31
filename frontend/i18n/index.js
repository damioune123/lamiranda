const en = require('./translations.en.json');
const es = require('./translations.es.json')
const fr = require('./translations.fr.json')

const i18n = {
    translations: {
        en,
        es,
        fr
    },
    defaultLang: 'en'
}

module.exports = i18n;