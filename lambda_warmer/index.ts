import axios from 'axios';
import moment from 'moment';
import { AssertionError } from 'assert';

const APIGATEWAY_ENDPOINT =
  'https://hd1n8y9430.execute-api.us-west-2.amazonaws.com/testStage/';
const SLACK_HOOK =
  'https://hooks.slack.com/services/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';
const REQUEST_INTERVAL = 60 * 60 * 1000;
const SEND_TO_SLACK = true;

const startTest = {
  version: '1.0',
  session: {
    new: true,
    sessionId: 'amzn1.echo-api.session.123456789012',
    application: {
      applicationId: 'amzn1.ask.skill.987654321',
    },
    user: {
      userId: 'amzn1.ask.account.testUser',
    },
    attributes: {},
  },
  context: {
    AudioPlayer: {
      playerActivity: 'IDLE',
    },
    System: {
      application: {
        applicationId: 'amzn1.ask.skill.987654321',
      },
      user: {
        userId: 'amzn1.ask.account.testUser',
      },
      device: {
        supportedInterfaces: {
          AudioPlayer: {},
        },
      },
    },
  },
  request: {
    type: 'LaunchRequest',
    requestId: 'amzn1.echo-api.request.1234',
    timestamp: '2016-10-27T18:21:44Z',
    locale: 'en-US',
  },
};

const notifySlack = async (message: string) => {
  console.log('Slack: ' + message);
  if (SEND_TO_SLACK) {
    await axios.post(SLACK_HOOK, { text: message }).catch((reason) => {
      console.log(reason);
      console.log('error:notifySlack');
    });
  }
};

interface MyResponse {
  version: string;
  response: {
    shouldEndSession: boolean;
    outputSpeech: {
      type: string;
      ssml: string;
    };
    reprompt: any;
  };
  sessionAttributes: any;
}

const requestLambda = async () => {
  const startDate: number = Date.now();
  await axios
    .post(APIGATEWAY_ENDPOINT, startTest)
    .then(async (response) => {
      if (
        (response.data as MyResponse).response.outputSpeech.ssml !==
        '<speak>Welcome to the Food Journal Application.</speak>'
      ) {
        throw AssertionError;
      }

      const responseDate: number = Date.now();
      const logMessage = `lambda invoked at ${moment().format(
        'MMM DD HH:mm:ss'
      )} - response time ${responseDate - startDate}ms`;
      await notifySlack(logMessage);
    })
    .catch(async (reason) => {
      await notifySlack('Something went wrong!');
      process.exit();
    });
};

const onExit = async () => {
  await notifySlack('*lambda warmer exited*');
  process.exit();
};

process.on('exit', onExit);
process.on('SIGINT', onExit);

const startApp = async () => {
  await notifySlack('*lambda warmer started*');
  await requestLambda();
  setInterval(requestLambda, REQUEST_INTERVAL);
};

startApp();
