import nodemailer from "nodemailer";

const email = process.env.EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});
