const functions = require('firebase-functions');
const admin = require('firebase-admin');
var app = admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

exports.sendWelcomeEmail = functions.auth.user().onCreate(user => {});
exports.sendByeEmail = functions.auth.user().onDelete(user => {});
exports.noteCreated = functions.firestore
  .document('notes/{noteId}')
  .onCreate((snap, context) => {
    const newNote = snap.data();
    console.log(newNote);
    return admin
      .auth()
      .verifyIdToken(snap.data().idToken)
      .then(decodedToken => {
        console.log('decoded');
        var uid = decodedToken.uid;
        return snap.ref.set(
          {
            createdOn: new Date().toISOString(),
            uid: uid
          },
          { merge: true }
        );
      });
  });
