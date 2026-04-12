import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "This field is required." },
        { status: 400 }
      );
    }

    // Logging lead data for development tracing
    console.log('--- NEW CONTACT LEAD ---');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Data:', JSON.stringify(body, null, 2));
    console.log('------------------------');

    // Future: Delegate to LeadService (Database/Email)
    
    return NextResponse.json(
      { success: true, message: "Thank you! We've received your message and will get back to you within 24 hours." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
