"use strict";

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

// https://us-central1-my-project-1491684267235.cloudfunctions.net/foodJournal
// https://hd1n8y9430.execute-api.us-west-2.amazonaws.com/testStage/

const { App } = require("jovo-framework");
const { Alexa } = require("jovo-platform-alexa");
const { GoogleAssistant } = require("jovo-platform-googleassistant");
const { JovoDebugger } = require("jovo-plugin-debugger");
const { Firestore } = require("jovo-db-firestore");
const config = require("./config");

const app = new App();

const admin = require("firebase-admin");
const serviceAccount = config.db.Firestore.credential;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://food-journal-6d639.firebaseio.com"
});

const db = admin.firestore();

app.use(
  new Alexa(),
  new GoogleAssistant(),
  new JovoDebugger(),
  new Firestore({}, db)
);

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
  /**
   * Returns true if the  user is logged in, false otherwise.
   * @return {boolean} User status
   */
  isLoggedIn() {
    return this.$user.$data.userId !== undefined;
  },

  /**
   * Intent triggered when the app is launched.
   */
  LAUNCH() {
    this.$speech.addText(
      "Welcome to the Food Journal Application."
    );
    this.ask(this.$speech);
  },

  /**
   * Tell user whether he is currently logged in.
   */
  AccountInfoIntent() {
    if (this.isLoggedIn()) {
      this.ask(
        "You are logged in as user " + this.$user.$data.userId.toString()
      );
    } else {
      this.ask("You are not logged in!");
    }
  },

  /**
   * Prompts user to sign in with a user id.
   */
  HelloWorldIntent() {
    this.$speech.addText(
      "please login with a user first, you can say 'sign in' and then the name of your user"
    );
    this.ask(this.$speech);
  },

  /**
   * Provides user a list of commands.
   */
  HelpIntent() {
    this.$speech.addText("These are the available options");
    const commands = [
      "sign in",
      "journal",
      "read last entry",
      "delete today's last entry",
      "am I logged in",
      "sign out",
      "exit"
    ];
    commands.forEach((cmd, index) => {
      this.$speech.addBreak("750ms");
      if (index === commands.length - 1) {
        this.$speech.addText(" and ");
      }
      this.$speech.addText(cmd);
    });
    this.ask(this.$speech);
  },

  /**
   * Allows user to sign in with a user id.
   */
  SignInIntent() {
    if (!this.$inputs.participantId) {
      this.ask("Something went wrong, please try again!");
      return;
    }
    // userId is stored as string in the database.
    const userId = this.$inputs.participantId.value.toString();
    this.$user.$data.userId = userId;
    this.$speech.addText("You are logged in as user " + userId + ".");
    this.$speech.addText("What would you like to do today?");
    this.ask(this.$speech);
  },

  /**
   * Allows user to sign out.
   */
  async SignOutIntent() {
    await this.$user.delete();
    if (this.isLoggedIn()) {
      this.ask("Successfully signed out!");
    } else {
      this.ask("You are not signed in!");
    }
  },

  /**
   * Allows user to journal food.
   */
  async JournalIntent() {
    console.log(this.isLoggedIn());
    console.log(this.$user.$data.userId);
    if (!this.isLoggedIn()) {
      return this.toIntent("HelloWorldIntent");
    } else {
      if (!this.$inputs.foodInfo.value) {
        this.ask("Something went wrong, please try again!");
        return;
      }
      this.$session.$data.journalKeyword = this.$inputs.foodInfo.value;
      this.followUpState("JournalConfirmState").ask(
        "Are you sure about recording " + this.$inputs.foodInfo.value
      );
    }
  },

  /**
   * State information when user is attempting to journal food.
   */
  JournalConfirmState: {
    async YesIntent() {
      const username = "user" + this.$user.$data.userId;
      await db
        .runTransaction(t => {
          db.collection(username)
            .add({
              entries: [
                {
                  entry: this.$session.$data.journalKeyword,
                  modality: "voice"
                }
              ],
              date: admin.firestore.Timestamp.now(),
              platform: "GA/Alexa",
              contextLogged: false
            })
            .then(ref => {
              db.collection(username)
                .doc("--last--")
                .set({ id: ref.id });
            });
          return Promise.resolve("Write complete");
        })
        .then(doc => {
          const cpy = this.$session.$data.journalKeyword;
          this.$session.$data.journalKeyword = "";
          this.followUpState(null).ask(
            "Thank you. " + cpy + " has been recorded."
          );
        })
        .catch(e => {
          console.log(e);
          this.followUpState(null).ask(
            "Something went wrong while saving your data. Please try again later!"
          );
        });
    },
    NoIntent() {
      this.$session.$data.journalKeyword = "";
      this.followUpState(null).ask(
        "Thank you for confirming. Record another thing when you are ready"
      );
    },
    Unhandled() {
      this.followUpState("JournalConfirmState").ask(
        "Please answer with yes or no."
      );
    }
  },

  /**
   * Allows user to read the last record.
   */
  async ReadIntent() {
    if (!this.isLoggedIn()) {
      return this.toIntent("HelloWorldIntent");
    } else {
      const username = "user" + this.$user.$data.userId;

      const collection = db.collection(username);
      const idDoc = collection.doc("--last--");

      await idDoc
        .get()
        .then(id_doc => {
          if (!id_doc.exists) {
            this.ask("There is no last entry found.");
          } else {
            const doc_id = id_doc.data().id;
            return collection
              .doc(doc_id)
              .get()
              .then(doc => {
                if (!doc.exists) {
                  this.ask("No data was found for this account");
                } else {
                  var entries = doc.data().entries;
                  this.$speech.addText(
                    "Last time you logged the following information:"
                  );
                  for (var i = 0; i < entries.length; ++i) {
                    this.$speech.addBreak("750ms");
                    if (entries[i].modality === "foodImg") {
                      this.$speech.addText("an Image");
                    } else if (entries[i].modality === "url") {
                      this.$speech.addText("an url");
                    } else {
                      this.$speech.addText(entries[i].entry);
                    }
                  }
                }
                this.ask(this.$speech);
                return Promise.resolve("Read complete");
              })
              .catch(() => {
                this.ask(
                  "Something went wrong while reading the last document. Please try again!"
                );
              });
          }
        })
        .catch(e => {
          this.ask(
            "Something went wrong! We could not find your last recording. Please try again later!"
          );
        });
    }
  },

  /**
   * Allows user to delete the last record.
   * @todo needs to check whether the last record is from today.
   */
  async DeleteIntent() {
    this.followUpState("DeleteConfirmationState").ask(
      "Are you sure you want to delete your last log?"
    );
  },

  /**
   * State information when user is deleting a log.
   */
  DeleteConfirmationState: {
    async YesIntent() {
      const username = "user" + this.$user.$data.userId;
      var counter = 0;
      var deletedId = "";
      var targetId = "";
      await db
        .collection(username)
        .orderBy("date", "desc")
        .limit(3)
        .get()
        .then(documents => {
          documents.forEach(document => {
            if (counter == 0) {
              db.collection(username)
                .doc(document.id)
                .delete();
            } else if (counter == 1) {
              db.collection(username)
                .doc("--last--")
                .set({ id: document.id });
            }
            counter++;
          });
          this.followUpState(null).ask("Successfully deleted your last log");
        })
        .catch(e => {
          console.log(e);
          this.followUpState(null).ask("Something went wrong");
        });
    },
    NoIntent() {
      this.followUpState(null).ask("Successfully cancelled deletion");
    },
    Unhandled() {
      this.followUpState("DeleteConfirmationState").ask(
        "Please say yes or no."
      );
    }
  },

  Unhandled() {
    this.ask("I could not understand. Say help for available options.");
  },

  END() {
    this.tell("Goodbye!");
  }
});

module.exports.app = app;
