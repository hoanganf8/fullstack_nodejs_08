import * as nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: 'hoangan@fullstack.edu.vn',
    pass: 'pieu vbpo lmzr shby',
  },
});

export const sendMail = async (
  to: string,
  subject: string,
  content: string,
) => {
  return transporter.sendMail({
    from: '"F8 Education 👻" <hoangan@fullstack.edu.vn>', // sender address
    to, // list of receivers
    subject, // Subject line
    html: content, // html body
  });
};
