//Autenticación de Translate
const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
    version: '2018-05-01',
    authenticator: new IamAuthenticator({
        apikey: 'pLwpQc6q42ANaOidv0oyFrGzIfKA313PH8oe1zll7bpr',
    }),
    serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/5c7180d1-e9c5-4a00-8a08-99eb7d308529',
});

let getTranslate =  async function () {
    const translateParams = {
        text: "You're adopting please write your id so we can register you on our database",
        modelId: 'en-es',
    };
     return await languageTranslator.translate(translateParams)
}

module.exports = {
    getTranslate: getTranslate
}