const nodemailer = require("nodemailer");
const ejs=require('ejs');
const path=require('path');

const transporter = nodemailer.createTransport({
    service:'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'alchemy.cn18',
    pass: 'codinninja'
  }
});
let renderTemplate=(date,relativePath)=>{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers.ejs',relativePath),
        data,
        function(err,template){
            if(err){
                console.log('error in rendering template');
                return
            }
            mailHTML=template;

        }
    )
    return mailHTML;
}
module.exports={
    transporter:transporter,
    renderTemplate:renderTemplate
}

