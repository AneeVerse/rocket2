import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return NextResponse.json({ message: 'Contact API is working' });
}

export async function POST(request: Request) {
  console.log('API route called');
  try {
    const body = await request.json();
    console.log('Form data received:', body);

    // Handle different form structures
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      phone,
      subject,
      message,
      // Birth certificate specific fields
      name,
      state,
      certificateType,
      birthYear
    } = body;

    // Determine form type and extract relevant data
    const isNameChangeForm = firstName && lastName;
    const isBirthCertificateForm = name && !firstName;

    let formData;
    if (isNameChangeForm) {
      formData = {
        name: `${firstName} ${lastName || ''}`.trim(),
        email,
        phone: phoneNumber || phone,
        subject: subject || 'Name Change Inquiry',
        message: message || 'Name change consultation request'
      };
    } else if (isBirthCertificateForm) {
      formData = {
        name,
        email,
        phone,
        subject: `Birth Certificate - ${certificateType || 'General Inquiry'}`,
        message: message || `Birth certificate request for ${state || 'unspecified state'}, birth year: ${birthYear || 'not provided'}`
      };
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid form data structure' },
        { status: 400 }
      );
    }

    // Basic validation
    if (!formData.name || !formData.email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Admin notification email
    const adminMailOptions = {
      from: `"Name Change Gazette" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact: ${formData.subject}`,
      text: `
        New Contact Form Submission
        --------------------------
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        Subject: ${formData.subject}
        
        ${isBirthCertificateForm ? `
        Certificate Type: ${certificateType || 'Not specified'}
        State: ${state || 'Not specified'}
        Birth Year: ${birthYear || 'Not specified'}
        ` : ''}
        
        Message:
        ${formData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          ${isBirthCertificateForm ? `
          <p><strong>Certificate Type:</strong> ${certificateType || 'Not specified'}</p>
          <p><strong>State:</strong> ${state || 'Not specified'}</p>
          <p><strong>Birth Year:</strong> ${birthYear || 'Not specified'}</p>
          ` : ''}
          <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    };

    // Thank you email to user
    const serviceType = isBirthCertificateForm ? 'Birth Certificate' : 'Name Change';
    const thankYouMailOptions = {
      from: `"Name Change Gazette" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: `Thank You for Contacting Name Change Gazette - ${serviceType}`,
      text: `
        Dear ${formData.name},

        Thank you for contacting Name Change Gazette! We have received your ${serviceType.toLowerCase()} inquiry and appreciate your interest in our services.

        Your Message Details:
        Subject: ${formData.subject}
        Message: ${formData.message}

        Our team will review your inquiry and get back to you within 24-48 hours. If you have any urgent questions, please feel free to call us.

        Best regards,
        Name Change Gazette Team
        Email: ${process.env.EMAIL_USER}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin: 0;">Name Change Gazette</h1>
              <p style="color: #666; margin: 5px 0;">Your Trusted Legal Document Partner</p>
            </div>
            
            <h2 style="color: #2563eb;">Thank You for Contacting Us!</h2>
            
            <p>Dear <strong>${formData.name}</strong>,</p>
            
            <p>Thank you for reaching out to Name Change Gazette! We have successfully received your <strong>${serviceType.toLowerCase()}</strong> inquiry and appreciate your interest in our services.</p>
            
            <div style="background: #f8f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
              <h3 style="color: #2563eb; margin-top: 0;">Your Message Details:</h3>
              <p><strong>Subject:</strong> ${formData.subject}</p>
              ${isBirthCertificateForm ? `
              <p><strong>Certificate Type:</strong> ${certificateType || 'Not specified'}</p>
              <p><strong>State:</strong> ${state || 'Not specified'}</p>
              <p><strong>Birth Year:</strong> ${birthYear || 'Not specified'}</p>
              ` : ''}
              <p><strong>Message:</strong></p>
              <p style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0;">${formData.message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #059669; margin-top: 0;">What Happens Next?</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Our team will review your inquiry carefully</li>
                <li>We'll get back to you within <strong>24-48 hours</strong></li>
                <li>You'll receive a personalized response addressing your needs</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; margin: 5px 0;">Best regards,</p>
              <p style="font-weight: bold; color: #2563eb; margin: 5px 0;">Name Change Gazette Team</p>
              <p style="color: #666; font-size: 14px; margin: 5px 0;">Email: ${process.env.EMAIL_USER}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(thankYouMailOptions)
    ]);

    console.log('Emails sent successfully');
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}