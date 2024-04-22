import { T_Contact } from "@/types/contact";
import nodemailer from 'nodemailer'

let contactList = [];

export const sendMessage = async (data: T_Contact) => {
    try{
        sendEmail(data);
    }catch(e){
        console.log(e);
    }
}

export const sendEmail = async (data:T_Contact) => {
    // Create a SMTP transporter
    let transporter = nodemailer.createTransport({
        secure: true,
        service: 'gmail',
        auth: {
            user: 'sudip.official2000@gmail.com', // Your email address
            pass: 'rxbk spuc erzu zsgo' // Your password
        },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
        from: data.email, // sender address
        to: 'sudip.official2000@gmail.com', // list of receivers
        subject: `New message from ${data.firstname} ${data.lastname}`, // Subject line
        text: `You have received a new message:\n\nName: ${data.firstname} ${data.lastname}\nEmail: ${data.email}\nMessage: ${data.message}`, // plain text body
        html: `<p>You have received a new message:</p><p><strong>Name:</strong> ${data.firstname} ${data.lastname}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Message:</strong> ${data.message}</p>` // html body
    });

    console.log("Message sent: %s", info.messageId);
}