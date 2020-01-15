[![Jovo Framework](https://www.jovo.tech/img/github-logo.png)](https://www.jovo.tech)

<p align="center">
<a href="https://www.jovo.tech/framework/docs/"><strong>Documentation</strong></a> -
<a href="https://github.com/jovotech/jovo-cli"><strong>CLI </strong></a></p>
<br/>

## Deploy

Make sure the following is in bundle/index.js

```
// Google Assistant
exports.ghandler = async (req, res) => {
    await app.handle(new GoogleCloudFunction(req, res));
};
```

### Commands

Build lambda/cloud function via

```
jovo deploy --target zip
```

Build language models

```
jovo deploy -p googleAction
jovo build
```

### via `npm run deploy`

```
"deploy": "jovo deploy --target zip && jovo deploy -p googleAction && jovo build"
```

> Remember to remove ./platforms, ./bundle, and ./bundle.zip before building.

### Next steps

1. Update lambda function (https://aws.amazon.com/lambda/)
2. Update Amazon API Gateway (https://aws.amazon.com/api-gateway/)
3. Update Alexa ENDPOINTS (https://developer.amazon.com/alexa/console/ask?)

   > lambda function for Amazon must be hosted at Oregon option.

4. Update Google Cloud Function (https://cloud.google.com/functions/)
5. Update Dialogflow webhook (https://dialogflow.com/)

## Voice Commands

1. To get current user's information

   - "am I logged in",
   - "my current account",
   - "what is my current account"

2. To Sign In

   - "Sign in {participantId}"
   - "Sign in user {participantId}"

3. To Sign Out

   - "sign out"

4. To list commands available

   - "help"
   - "help me"
   - "options"
   - "commands"

5. To Journal Food

   - "Food journal log {foodInfo}"
   - "log {foodInfo}"

6. To Read Last Log

   - "read my last log"
   - "read"

7. To Delete Last Log

   - "delete my last log"
