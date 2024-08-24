import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { fullName, email, topic, message } = await req.json();

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // E-posta gönderimi
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Form bilgilerini kendinize göndereceksiniz
      subject: `Yeni İletişim Formu Mesajı: ${topic}`,
      text: `Adı Soyadı: ${fullName}\nE-posta: ${email}\nKonu: ${topic}\n\nMesaj: ${message}`,
    });

    return new Response(JSON.stringify({ message: 'E-posta başarıyla gönderildi!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    return new Response(JSON.stringify({ message: 'E-posta gönderilemedi!' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
