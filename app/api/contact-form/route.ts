import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, businessEmail, businessName } = body

    if (!name || !email || !message || !businessEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!resend || !process.env.RESEND_API_KEY) {
      console.log('Resend not configured - would send email to:', businessEmail)
      return NextResponse.json({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      })
    }

    try {
      const businessEmailResult = await resend.emails.send({
        from: 'AutoTaco <noreply@autotaco.io>',
        to: [businessEmail],
        subject: `New contact form submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <div style="margin-bottom: 20px;">
                <h3 style="color: #333; margin-bottom: 10px;">Contact Details</h3>
                <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #667eea;">${email}</a></p>
                <p style="margin: 5px 0;"><strong>Business:</strong> ${businessName}</p>
              </div>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                <h3 style="color: #333; margin-bottom: 15px;">Message</h3>
                <p style="margin: 0; line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
                <p style="color: #666; font-size: 14px; margin: 0;">This message was sent from your ${businessName} website contact form.</p>
                <p style="color: #999; font-size: 12px; margin: 5px 0 0 0;">Powered by AutoTaco</p>
              </div>
            </div>
          </div>
        `
      })

      if (businessEmailResult.error) {
        throw new Error(`Business email failed: ${businessEmailResult.error.message}`)
      }

      const customerEmailResult = await resend.emails.send({
        from: `${businessName} <noreply@autotaco.io>`,
        to: [email],
        subject: `Thank you for contacting ${businessName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Thank You!</h1>
            </div>
            <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <p style="font-size: 18px; color: #333; margin-bottom: 20px;">Hi ${name},</p>
              <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">Thank you for contacting <strong>${businessName}</strong>. We have received your message and will get back to you as soon as possible.</p>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #28a745;">
                <h3 style="color: #333; margin-bottom: 15px;">Your Message</h3>
                <p style="margin: 0; line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
                <p style="color: #666; font-size: 14px; margin: 0;">This is an automated confirmation from ${businessName}.</p>
                <p style="color: #999; font-size: 12px; margin: 5px 0 0 0;">Powered by AutoTaco</p>
              </div>
            </div>
          </div>
        `
      })

      if (customerEmailResult.error) {
        throw new Error(`Customer email failed: ${customerEmailResult.error.message}`)
      }

      return NextResponse.json({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      })

    } catch (emailError) {
      console.error('Email sending error:', emailError)
      return NextResponse.json({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      })
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}