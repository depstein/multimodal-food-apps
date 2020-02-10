"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var axios_1 = __importDefault(require("axios"));
var moment_1 = __importDefault(require("moment"));
var assert_1 = require("assert");
var APIGATEWAY_ENDPOINT = 'https://hd1n8y9430.execute-api.us-west-2.amazonaws.com/testStage/';
var SLACK_HOOK = 'https://hooks.slack.com/services/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';
var REQUEST_INTERVAL = 60 * 60 * 1000;
var SEND_TO_SLACK = true;
var startTest = {
    version: '1.0',
    session: {
        "new": true,
        sessionId: 'amzn1.echo-api.session.123456789012',
        application: {
            applicationId: 'amzn1.ask.skill.987654321'
        },
        user: {
            userId: 'amzn1.ask.account.testUser'
        },
        attributes: {}
    },
    context: {
        AudioPlayer: {
            playerActivity: 'IDLE'
        },
        System: {
            application: {
                applicationId: 'amzn1.ask.skill.987654321'
            },
            user: {
                userId: 'amzn1.ask.account.testUser'
            },
            device: {
                supportedInterfaces: {
                    AudioPlayer: {}
                }
            }
        }
    },
    request: {
        type: 'LaunchRequest',
        requestId: 'amzn1.echo-api.request.1234',
        timestamp: '2016-10-27T18:21:44Z',
        locale: 'en-US'
    }
};
var notifySlack = function (message) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Slack: ' + message);
                if (!SEND_TO_SLACK) return [3 /*break*/, 2];
                return [4 /*yield*/, axios_1["default"].post(SLACK_HOOK, { text: message })["catch"](function (reason) {
                        console.log(reason);
                        console.log('error:notifySlack');
                    })];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); };
var requestLambda = function () { return __awaiter(void 0, void 0, void 0, function () {
    var startDate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                startDate = Date.now();
                return [4 /*yield*/, axios_1["default"]
                        .post(APIGATEWAY_ENDPOINT, startTest)
                        .then(function (response) { return __awaiter(void 0, void 0, void 0, function () {
                        var responseDate, logMessage;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (response.data.response.outputSpeech.ssml !==
                                        '<speak>Welcome to the Food Journal Application.</speak>') {
                                        throw assert_1.AssertionError;
                                    }
                                    responseDate = Date.now();
                                    logMessage = "lambda invoked at " + moment_1["default"]().format('MMM DD HH:mm:ss') + " - response time " + (responseDate - startDate) + "ms";
                                    return [4 /*yield*/, notifySlack(logMessage)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })["catch"](function (reason) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, notifySlack('Something went wrong!')];
                                case 1:
                                    _a.sent();
                                    process.exit();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var onExit = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, notifySlack('*lambda warmer exited*')];
            case 1:
                _a.sent();
                process.exit();
                return [2 /*return*/];
        }
    });
}); };
process.on('exit', onExit);
process.on('SIGINT', onExit);
var startApp = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, notifySlack('*lambda warmer started*')];
            case 1:
                _a.sent();
                return [4 /*yield*/, requestLambda()];
            case 2:
                _a.sent();
                setInterval(requestLambda, REQUEST_INTERVAL);
                return [2 /*return*/];
        }
    });
}); };
startApp();
