const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // "required" instead of "require"
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});


//post middlewar
fileSchema.post("save",async function(doc){
     try{
      console.log("DOC",doc)

      //transporter
      //shift this configuration under /config folder
      let transporter = nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
        },
      });        

      //send mail will not send no 2 step verification on my email account due to no sim for verification at time
      let info =await transporter.sendMail ({
      from:'Ghorpade - by arc',
      to:doc.email,
      subject: "New File Uploaded on Cloudinary",
      html:'<h2>Hello</h2> <p>File Uploaded</p>',

     })

     console.log("INFO",info);
    }
     catch(error) {
      console.error(error);

     }

})


const File = mongoose.model("file", fileSchema);
 module.exports = File;
