// Chunk 1
//require('dotenv').config();
const express = require("express");
const path = require("path");
const sendMail = require("./mail");
const { log } = console;
const app = express();
const port = process.env.PORT || 5000; //post that host
//const port = 5000;
const cors = require("cors");
const { Route } = require("react-router-dom");
//const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Data parsing (from the form to the backend)
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

if (process.env.NODE_ENV !== "production") require("dotenv").config();

app.use(cors()); //allows cross origin request

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build"))); //allows us to serve a certain file inside a path

  app.get("*", function (req, res) {
    //
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// Start server
app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

// email, subject, text (receiving data from the client)
app.post("/email", (req, res) => {
  const {
    customerName,
    phoneNumber,
    subject,
    email,
    message,
    recipient,
    totalCost,
  } = req.body;
  var emailBody = "";

  if (subject == "Service Inquiry") {
    emailBody =
      "Gooday Shoko Team" +
      "\n\n" +
      "Would like to make an inquiry the below message: " +
      "\n\n\t" +
      "Inquiry : " +
      message +
      "\n\n" +
      "Yours faithfully" +
      "\n\n" +
      customerName +
      "\n" +
      phoneNumber;
  }

  if (subject == "Shoko Enterprise Order") {
    emailBody =
      "Gooday Shoko Team" +
      "\n\n" +
      "I would like to have the following order of total cost of : R" +
      totalCost +
      "\n\n\t" +
      message +
      "\n\n" +
      "Delivered to the following details : " +
      "\n\n\t" +
      recipient +
      "\n\n" +
      "Yours faithfully" +
      "\n\n" +
      customerName;
  }

  //console.log(emailBody);
  sendMail(email, subject, emailBody, function (err, data) {
    if (err) {
      log("ERROR: ", err);
      return res.status(500).json({ message: err.message || "Internal Error" });
    }
    log("Email sent!!!");
    return res.json({ message: "Email sent!!!!!" });
  });
});

// Render home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Error page
app.get("/error", (req, res) => {
  res.sendFile(path.join(__dirname, "EmailResponse", "error.html"));
});

// Email sent page
app.get("/email/sent", (req, res) => {
  res.sendFile(path.join(__dirname, "EmailResponse", "emailMessage.html"));
});

/*  try {
    const data = fs.writeFileSync(
      "C:/Users/Takudzwa/Documents/Projects/ShokoEnterprisePlatform/test.txt",
      emailBody
    );
    //file written successfully
  } catch (err) {
    console.error(err);
  }*/
