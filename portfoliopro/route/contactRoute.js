const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (request, response) => {
  let data = request.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return response.json({ msg: "Please Fill All The Fields!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "shtaiweeomair@gmail.com",
      pass: "21851296Mn!"
    }
  });
  let mailOptions = {
    from: data.email,
    to: "shtaiweeomair@gmail.com",
    subject: `message from ${data.name}`,
    html: `
            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return response.status(400).json({ msg: "Please Fill All The Fields!" });
      return response.status(200).json({ msg: "Thank You For Contacting Mohammad." });
    } catch (error) {
      if (error) return response.status(500).json({ msg: "There is server error" });
    }
  });
});
module.exports = router;