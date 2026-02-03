import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, serviceType } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Minden kötelező mezőt ki kell tölteni" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Érvénytelen e-mail cím" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Save to a database
    // 3. Send a notification to Slack/Discord

    // For now, we'll log the data and return success
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      subject,
      message,
      serviceType,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Example: Send email with Resend (uncomment when API key is available)
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'megoldjukokosba <noreply@megoldjukokosba.hu>',
      to: ['info@megoldjukokosba.hu'],
      subject: `Új üzenet: ${subject}`,
      html: `
        <h2>Új kapcsolatfelvétel a weboldalról</h2>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nincs megadva'}</p>
        <p><strong>Szolgáltatás:</strong> ${serviceType || 'Nincs megadva'}</p>
        <p><strong>Tárgy:</strong> ${subject}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    return NextResponse.json(
      {
        success: true,
        message: "Köszönjük üzenetét! Hamarosan felvesszük Önnel a kapcsolatot."
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később." },
      { status: 500 }
    );
  }
}
