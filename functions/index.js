const functions = require('firebase-functions');

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
    return snap.ref.set(
      {
        createdOn: new Date().toISOString()
      },
      { merge: true }
    );
  });
