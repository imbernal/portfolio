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


app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post("/info" , function(req , res){

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
