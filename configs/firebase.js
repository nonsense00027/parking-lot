const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");
var admin = require("firebase-admin");

initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "parking-lot-7bf88",
    private_key_id: "db91faedde6381692b03749c7bb6f4bf2f1c22c1",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDAkBNIUOhOAfpS\nBTNlB+eTryCS9F7SrDmce+ApggULwRlqbKThNjuTBD4oOxE8cgSSQ5yKXqfwkaQc\npY1QlNIpJRRLEEtWtvQTxX8W1E2aLOK13x5yi40ai2OGxkF6S6k+44no5480uTMM\nJMhNSRW9G0rI7pELhpLNBjbELHwlwD716iio29uQvcPG/cY/8XmKyeG0IG08RE1n\nKR7pS0JbXVUC3FHOD5hdSyGsiJQvsdb8vQ0sM3iaLImnvhdw3I+RULgqw1Rz8dA1\nidMvxep57uPEOz8HLliMPnUNDlGtyqhGY4th4Z85rLlHiaX3XKpPThI7OL/puFgj\niiVVlDxPAgMBAAECggEAWk/4SzVvDo8M6QT5asv/R5ueSm4EPwh5aLQMmUsatL2W\n/vv/hITcAgK+aD3zwoazMCo3tAna+BBGiQz4Ly/tNVDnqKD2xK+/37oD9iASWVnt\n5mDDtfNPdYCkaCR5tzLfKNis6KgZ2R93Gp3xt5WsdWnkdEK3klFGbpQYgX9fppAo\nTLTGyekkDMU7fiU10Ukh3swosDzRcWWZ9J9Yde6rcooqkvAgPZKJinb+/9dPvcvD\nnNByYn3DZm8gKqPsZEueh2o3bTGr/Z9KT+NZi7rLvX+kQ6abaILH5955oTvcd6rb\nRKqRFlBymZYQC+0kGF3XJcM76se/2RD3lwSwDoI8GQKBgQDmoqCnMq4rECh8vXbL\nPsZZz7ff/tCjiesqUi+s5aUfcfL/26L8/PnJEmc/mgmSeitkfyLpdstH/N+xzNo/\n7yXF/nl18xpeZRc9xevZ0VWUIZAxsp60R6zq3ba8sL7Px8a9wAW7CFGchDw/y/cq\naCTpdmpMNW3ScSP+yxiwVZJTPQKBgQDVvYtbV/qmwAVJzrqcTYbQRnntrsT3pPrv\nrNifBTa0BXphkgrWwXQ7RkFCyWiyj3Ep97WDrDX6F82RI0YyCcFbpptmxM5bCHR6\no6ynbiTZowI9igd9mrdNsazcs4Q9MuMAZElk1dj+88QZFg1DuC3SOWh8cC/EPtAg\nizATb4sWewKBgBkB1S2L3zqoG9u6p2DOQ6+FSEivVmwFDkyecLDsjYTlVBXN+NQ5\nkdPtfOh2iUcqm/3fkyeBS/VYQ+EBd0Cra4sWVpEldNx7VZPLHBGYExFmuj3JQlAF\n3Yfx1liLSYU6AiCc64ImGsM/y1CXiws8E5SE1G3C9U92GRMNbnXgMWd5AoGAQrsb\nwBf2tIrs279EObpmpa3rMU7IRfznL18KfpNVId03+TBsW+IoFL15cI2LN3xbO1wP\n+p0QeRVnY7Hcn5C2IpQgnnRBbOB15Tgmlltn+97Nu0LV1dww8HvRWVJerfCuOJgW\n5flx9x9KEP72gzcEb0bnHTq1XxKxTgfGqbrAdPMCgYBeiS2K+2LEe/pJjdkDYLF+\nNHi87FMhbeqMfx3vscGmGB4TE97tgyZhfxa5TPggkOe7RD2hyz+iQ53eMJXxJxTe\n6NhaFplwRH1ZVbTJ5gOez6e7K1ZG/DeqouC+vQhwo2hmvneGF+WnHfSbKz0DlSeN\npY3pRwdaIQJiJOG2oUwB7Q==\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-vqh3n@parking-lot-7bf88.iam.gserviceaccount.com",
    client_id: "114680292063079182327",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vqh3n%40parking-lot-7bf88.iam.gserviceaccount.com",
  }),
  databaseURL: "https://parking-lot.firebaseio.com",
});

const db = getFirestore();

module.exports = { db };
