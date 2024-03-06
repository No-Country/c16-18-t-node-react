import nodemailer from "nodemailer"
import {options} from "./options.config.js"

const emailUser = options.nodemailer.emailUser
const emailPass = options.nodemailer.emailPass
const emailHost = options.nodemailer.emailHost
const emailPort = options.nodemailer.emailPort

const transporter = nodemailer.createTransport(
    {
        host:emailHost,
        port:emailPort,
        auth:{
            user: emailUser,
            pass: emailPass
        },
        secure:true,
    }
)

export {transporter}