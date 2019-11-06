// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    alexaSkill: {
       nlu: 'alexa',
    },
    googleAction: {
       nlu: 'dialogflow',
       dialogflow: {
          projectId: 'food-journal-v2-hfyxjr',
          keyFile: './db/serviceAccount.json'
       }
    },
    endpoint: '${JOVO_WEBHOOK_URL}',
};
 