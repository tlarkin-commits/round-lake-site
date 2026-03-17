import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, interest, message, propertyId } = body;
    const fullName = `${firstName} ${lastName}`.trim();

    // Create lead in ops-app (server-side — no CORS)
    const leadRes = await fetch("https://roundlake.coastmhp.com/api/leasing/ai/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fullName,
        email,
        phone: phone || null,
        propertyId: propertyId || "roundlake",
        source: "website-contact-form",
        notes: `Contact form. Interest: ${interest || "General inquiry"}. Message: ${message || "None"}`,
      }),
    });

    // Fire-and-forget notification email
    fetch("https://roundlake.coastmhp.com/api/contact/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: fullName, email, phone, interest, message, propertyId }),
    }).catch(() => {});

    if (!leadRes.ok) {
      return NextResponse.json({ error: "Failed to submit lead" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
