//const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");
const { response } = require("express");
let port = process.env.PORT || 5001

const stripe = require("stripe")(
  "sk_test_51IKPYcFLO2mX4C6ZsCVj97O7wvunEhzWaLaukbl4An0R8znOz33YtqIkbeHohQtDBHRD9FpsnVuFTHx7G4NMWL7B00qs7nqfPg"
);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//Api

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (request, response) => response.status(200).send("Hello There"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
    console.log('Payment received for ', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  //OK Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);

})

//Listen Command
//exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-7a7a2/us-central1/api
