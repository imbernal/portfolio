const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var smtpTransport = require("nodemailer-smtp-transport");

var smtpTransport = nodemailer.createTransport(smtpTransport({
    host : "smtp.gmail.com",
    secureConnection : false,
    port: 587,
    auth : {
        user : `imbernal9203@gmail.com`,
        pass : "imbernal123"
    }
}));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://ibernal.fvi-grad.com:2998');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post("http://ibernal.fvi-grad.com/info" , function(req , res){

  var mailData = {
    from: req.body.email,
    to: "imbernal9203@gmail.com",
    text: req.body.message +"\n"+ req.body.email
  };

  smtpTransport.sendMail(mailData , function(err , info){
    if(err){
      console.log(err.toString());
    }else {
      console.log(mailData);
      console.log("Message sent: " + info.response);
    }
  })
  res.status(200).send(req.body.name);

});




app.listen(2998 , ()=>{
  console.log("Working");
})
