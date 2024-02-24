import nodemailer from "nodemailer"
import {options} from "./options.config.js"

const adminEmail = options.nodemailer.userEmail
const adminPass = options.nodemailer.passwordEmail

const transporter = nodemailer.createTransport(
    {
        host:"smtp.gmail.com",
        port:465,
        auth:{
            user: adminEmail,
            pass: adminPass
        },
        secure:true,
    }
)

export {transporter}