const nodemailer = require('nodemailer')
const Resend = require('resend')

const sendEmailEtherial = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'victor.schaefer@ethereal.email',
      pass: 'QMe2dQA41mQDSDhDZe',
    },
  })

  let info = await transporter.sendMail({
    from: '"Kariuki" <kariuki@gmail.com>',
    to: 'theguy@outlook.com',
    subject: 'Email Testing',
    html: '<h2>This is just me testing the email function.</h2>',
  })

  res.json(info)
}

const sendEmail = async (req, res) => {
  const resend = new Resend.Resend(process.env.RESEND_API_KEY)

  const msg = {
    from: 'Acme <onboarding@resend.dev>',
    to: 'nyamuj59@gmail.com',
    subject: 'Email testing',
    html: '<h2>This is an email test.</h2><p>Which apparently is working.</p>',
  }

  const info = await resend.emails.send(msg)

  res.json(info)
}

module.exports = sendEmail
