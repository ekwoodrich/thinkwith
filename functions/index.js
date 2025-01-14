const functions = require('firebase-functions');
const admin = require('firebase-admin');
var app = admin.initializeApp();

exports.sendWelcomeEmail = functions.auth.user().onCreate(user => {});
exports.sendByeEmail = functions.auth.user().onDelete(user => {});
exports.noteCreated = functions.firestore
  .document('notes/{noteId}')
  .onCreate((snap, context) => {
    const newNote = snap.data();
    return admin
      .auth()
      .verifyIdToken(snap.data().idToken)
      .then(decodedToken => {
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
