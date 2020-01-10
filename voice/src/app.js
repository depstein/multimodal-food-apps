'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

// https://us-central1-my-project-1491684267235.cloudfunctions.net/foodJournal
// https://hd1n8y9430.execute-api.us-west-2.amazonaws.com/testStage/

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
// const { FileDb } = require("jovo-db-filedb");
const { Firestore } = require('jovo-db-firestore');

const app = new App();

const admin = require('firebase-admin');
const serviceAccount = {
	type: 'service_account',
	project_id: 'food-journal-6d639',
	private_key_id: '1b64054cc63662ea2f5c651f91fee6c5282a97b3',
	private_key:
		'-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCX0yhiv6Vw2mV7\nVVuAjIw0PaFumzB0AkYvWCzgodc7QrhXJKEziH7VVKrxFlQRp1qfV+pc1jugxRUH\nEU9oRPrb7h+3L2niEU0IDTkJQ+5GQWADmZu4Q9jxoT/2cJdyKGKD9uHu9p2o2SMe\npEr+mNS8+NQzmA7aPMmMCAES8l4pZ/h4DnFVjXyFN/YZdz65i6iX7y6GOWW4Ez5Z\nVy5U4Sh0lLh3rD1XJhleDnogXBDHr9G5IBjMFY9zDAjeZitybt9RpuzXaCyBRMTM\nxGahZXX1Z4MGv1RQceqZweOhMNJ+W/Ajm6XOubgIbWbnvdxoNNIKldPiIO4iuHvh\ncGnG2t1BAgMBAAECggEAEsNQiCWlmUUQShXyLTiRYipkrzHkIs4eJN85iphNrF/y\nPqjC+Ear4Arq5kkLYjQjvbIEf20laNi6YMl5ngn6U6BB0KZ+KCdZtP9HV3cK9SlC\np6c96J+P6cqzCC6BdOT7SdJCuUDGmrWdAr4sm3rBPcpllSu7WCqvgMwDb/c+flDP\nl9tAlxkwF6Hf2W6kw89dGHDwZkhtM+klrUPqjMA/VN7wKQpZ/IByaPXHoC3reAIM\nX3FskPTRra8ImtaHipE5ZV36alB80nkz41YTt+Lj8syNYQCSGvO9dSj6EDTCzx/c\nN7viF6WfiZgAyEvW3ELPQ+97j+26TPo9MU3Jkf5aMQKBgQDG4lvEah6culuzXtYk\nnCDlyhufo4QM+VuW5OCE36xvLjL1DMT4l/F9t5ZHS2jqv+trUOHM1wmr7TzOb4z+\nzerN/pBHCD2gnOxIP29uBWXBjyiywHVIFGatlutCg6EF/cRQB7Xns5pNNyKwID5x\n19iMuP/76TC3S3iW61RhBUB1CQKBgQDDbRIoF6LErbYKGAXaj5Sg6SZ6f9gv13aU\nIyxNaRMvZ9SN4egY72TQEym4rz18TmkEfoR7T0BCPE58+sGdUlW/XMvKlWnuhISJ\nVhMXOQX12nGaDrVaZGVvKP28rf3TSSuiXa+en6HDI4zPWE4oijEHx0Dp02UTudRN\nwYG6hJYseQKBgQCaF52UM8heFEGiWxM9sD4I7Cu050MTrkvZQKH4MTjvt3LBzE/8\nb/UqO4jS2kmCwIoNTtB0HhQfQiM/qswqS67mRZrRfkAJZivn2kZijwoFCv80Z8s2\nup/HVUwX79Zdxv1IKIE28T/XHaXhoknfeKYOefPT4RvemDnpbJGmziPfyQKBgQCx\ne92Bi/XHqfwqLqciWEQj35uSpYkx6f1HjKovo75Iz4O7V+/ytXhZgQ3jLUQqIQw/\niKfJVbCGdz7RQuuUdbJqmVx8IDaU6MV19TZhYOiI4FtMDw+liIiW7COFuH9N5KY8\nT9mvtkqzbxXzOb/CEb910QCjW9nwkFTASX4IZ2H8AQKBgQCCerwM6ic4q09rzfxe\no/y7makLijM5LuaL8Fi1FilctJInztjWhakszgZWqc4oRfcsllcrLWi6V7PTjdbX\nU+MLfpP1hmf2JAkPfXKSQXaB9HaMaabUUR2pzAyzwohWBNib9VGu0comxcF4VHT1\nFVAfENtpMmY/fiooaNxcedVWag==\n-----END PRIVATE KEY-----\n',
	client_email: 'firebase-adminsdk-xr8lj@food-journal-6d639.iam.gserviceaccount.com',
	client_id: '109948254164943346554',
	auth_uri: 'https://accounts.google.com/o/oauth2/auth',
	token_uri: 'https://oauth2.googleapis.com/token',
	auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
	client_x509_cert_url:
		'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xr8lj%40food-journal-6d639.iam.gserviceaccount.com'
};

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://food-journal-6d639.firebaseio.com'
});

const db = admin.firestore();

app.use(new Alexa(), new GoogleAssistant(), new JovoDebugger(), new Firestore({}, db));

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
	LAUNCH() {
		this.$speech.addText('Welcome to the Food Journal Application. Say help and I will list available options');
		if (this.$user.$data.userId === -1) {
			this.$session.$data.loggedIn = false;
		} else {
			this.$session.$data.loggedIn = true;
			this.$session.$data.userId = this.$user.$data.userId;
		}

		this.ask(this.$speech);
	},

	HelloWorldIntent() {
		this.$speech.addText('please login with a user first, you can say \'login\' and then the name of your user');
		this.ask(this.$speech);
	},
    HelpIntent() {
        this.$speech.addText('These are the available options');

        const commands = ['login', 'journal food', 'read last entry', 'delete today\'s last entry'];
        commands.forEach((cmd, index) => {
            this.$speech.addBreak('750ms');
            if(index === commands.length - 1) {
                this.$speech.addText(' and ');
            }
            this.$speech.addText(cmd);
        })
		this.ask(this.$speech);
    },
	LoginIntent() {
		this.$session.$data.loggedIn = true;
		if (this.$user.$data.userId && this.$user.$data.userId > 0) {
			this.$session.$data.userId = this.$user.$data.userId;
		} else {
			this.$session.$data.userId = this.$inputs.participantId.value;
			this.$user.$data.userId = this.$session.$data.userId;
		}

		this.$speech.addText('You are logged in as user ' + this.$session.$data.userId + '.');
		this.$speech.addText('What would you like to do today?');
		this.ask(this.$speech);
	},
	LogOutIntent() {
		this.$session.$data.loggedIn = false;
		this.$user.$data.userId = -1;
		return this.toIntent('HelloWorldIntent');
	},
	async JournalIntent() {
		if (!this.$session.$data.loggedIn) {
			return this.toIntent('HelloWorldIntent');
		} else {
			// this.$speech.addText('Successfully logged ' + this.$inputs.foodInfo.value);
			// this.ask(this.$speech);

			if(!this.$inputs.foodInfo.value) {
				this.ask('Something went wrong, please try again!');
				return;
			}

			const username = 'user' + this.$session.$data.userId;

			this.$session.$data.journalKeyword = this.$inputs.foodInfo.value;
			console.log(this.$inputs.foodInfo.value);
			console.log(this.$session.$data.journalKeyword);
			this.followUpState('JournalConfirmState').ask(
				'Are you sure about recording ' + this.$inputs.foodInfo.value
			);
		}
	},
	//TODO search intent (q)
	JournalConfirmState: {
		async YesIntent() {
			const username = 'user' + this.$session.$data.userId;
			await db
				.runTransaction(t => {
					db
						.collection(username)
						.add({
							entries: [
								{
									entry: this.$session.$data.journalKeyword,
									modality: 'voice'
								}
							],
							date: admin.firestore.Timestamp.now(),
							platform: 'GA/Alexa',
							contextLogged: false
						})
						.then(ref => {
							db.collection(username).doc('--last--').set({ id: ref.id });
						});
					return Promise.resolve('Write complete');
				})
				.then(doc => {
					const cpy = this.$session.$data.journalKeyword;
					this.$session.$data.journalKeyword = '';
					this.followUpState(null).ask('Thank you. ' + cpy + ' has been recorded.');
				})
				.catch(e => {
					console.log(e);
					this.followUpState(null).ask(
						'Something went wrong while saving your data. Please try again later!'
					);
				});
		},
		NoIntent() {
			this.$session.$data.journalKeyword = '';
			this.followUpState(null).ask('Thank you for confirming. Record another thing when you are ready');
		},
		Unhandled() {
			this.followUpState('JournalConfirmState').ask('Please answer with yes or no.');
		}
	},

	async ReadIntent() {
		if (!this.$session.$data.loggedIn) {
			return this.toIntent('HelloWorldIntent');
		} else {
			const username = 'user' + this.$session.$data.userId;

			const collection = db.collection(username);
			const idDoc = collection.doc('--last--');

			await idDoc
				.get()
				.then(id_doc => {
					if (!id_doc.exists) {
						this.ask('Read for this account is not properly installed yet.');
					} else {
						const doc_id = id_doc.data().id;
						return collection
							.doc(doc_id)
							.get()
							.then(doc => {
								if (!doc.exists) {
									this.ask('No data was found for this account');
								} else {
									var entries = doc.data().entries;
									this.$speech.addText('Last time you logged the following information:');
									for (var i = 0; i < entries.length; ++i) {
										this.$speech.addBreak('750ms');
										if (entries[i].modality === 'foodImg') {
											this.$speech.addText('an Image');
										} else if (entries[i].modality === 'url') {
											this.$speech.addText('an url');
										} else {
											this.$speech.addText(entries[i].entry);
										}
									}
								}
								this.ask(this.$speech);
								return Promise.resolve('Read complete');
							})
							.catch(() => {
								this.ask('Something went wrong while reading the last document. Please try again!');
							});
					}
				})
				.catch(e => {
					this.ask('Something went wrong! We could not find your last recording. Please try again later!');
				});
		}
	},

	async DeleteIntent() {
		this.followUpState('DeleteConfirmationState').ask('Are you sure you want to delete your last log?');
	},

	DeleteConfirmationState: {
		async YesIntent() {
			const username = 'user' + this.$session.$data.userId;
			var counter = 0;
			var deletedId = '';
			var targetId = '';
			await db
				.collection(username)
				.orderBy('date', 'desc')
				.limit(3)
				.get()
				.then(documents => {
					documents.forEach(document => {
						if (counter == 0) {
							db.collection(username).doc(document.id).delete();
						} else if (counter == 1) {
							db.collection(username).doc('--last--').set({ id: document.id });
						}
						counter++;
					});
					this.followUpState(null).ask('Succesfully deleted your last log');
				})
				.catch(e => {
					console.log(e);
					this.followUpState(null).ask('Something went wrong');
				});
		},
		NoIntent() {
			this.followUpState(null).ask('Successfully cancelled deletion');
		},
		Unhandled() {
			this.followUpState('DeleteConfirmationState').ask('Please say yes or no.');
		}
	},
	END() {
		this.tell('Goodbye!');
	}
});

module.exports.app = app;
