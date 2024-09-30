const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  console.log("API route started");

  if (req.method !== "POST") {
    console.log(`Invalid method: ${req.method}`);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  console.log("Request body:", req.body);

  const { name, surname, email, message } = req.body;

  console.log("Environment variables:");
  console.log("EMAIL_HOST:", process.env.EMAIL_HOST);
  console.log("EMAIL_PORT:", process.env.EMAIL_PORT);
  console.log("EMAIL_SECURE:", process.env.EMAIL_SECURE);
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS defined:", !!process.env.EMAIL_PASS);

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  console.log("Transporter created");

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "perry@mandcconsult.co.za",
    subject: "New Contact Form Submission",
    text: `
      Name: ${name} ${surname}
      Email: ${email}
      Message: ${message}
    `,
  };

  console.log("Mail options:", mailOptions);

  try {
    console.log("Attempting to send email...");
    await transporter.verify();
    console.log("Transporter verified");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Detailed error:", error);
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    res.status(500).json({
      error: "Error sending email",
      details: error.message,
      stack: error.stack,
    });
  }
};
