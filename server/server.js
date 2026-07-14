import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/booking', async (req, res) => {
  try {
    const { name, email, phone, service, date, time, message } = req.body;

    const emailBody = `
New Booking Request - Prime Pillar Engineering

Client Details:
  Name: ${name}
  Email: ${email}
  Phone: ${phone}

Service Requested:
  ${service}

Preferred Date & Time:
  ${date} at ${time}

Additional Details:
  ${message || 'None provided'}
    `;

    await transporter.sendMail({
      from: `"Prime Pillar Booking" <${process.env.SMTP_USER}>`,
      to: 'info@primepillarengineering.com',
      subject: `New Booking: ${service} - ${name}`,
      text: emailBody,
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Email send failed:', err);
    res.status(500).json({ success: false, error: 'Failed to send booking request' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
