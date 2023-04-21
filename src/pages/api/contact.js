import { HTML_TEMPLATE, sendMail } from '@/utils/mailer'

// Just check if all required fields are provided
function formValid(body) {
  return body.email && body.name && body.reachOut && body.message
}

export default async function handler(req, res) {
  const body = req.body

  const parsedBody = JSON.parse(body)

  if (!formValid(parsedBody)) {
    res.status(422).end()
    return
  }

  try {
    const message = JSON.stringify(parsedBody)
    const options = {
      from: 'Andreas Siedler <sender@gmail.com>', // sender address
      to: parsedBody.email, // receiver email
      subject: 'Send email in Node.JS with Nodemailer using Gmail account', // Subject line
      text: message,
      html: HTML_TEMPLATE(message),
    }

    await sendMail(options, (info) => {
      console.log('Email sent successfully')
      console.log('MESSAGE ID: ', info.messageId)
    })

    res.status(201).end()
  } catch (error) {
    console.error(error)
    res.status(500).end()
  }
}
