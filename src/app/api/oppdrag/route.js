import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();
    const { fornavn, etternavn, bedrift, email, date, telefon, comment } = data;

    console.log("API KEY:", process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: "Booking <onboarding@resend.dev>",
      to: ["ragu0002@stud.kea.dk"],
      subject: "Ny oppdrags forespørsel",
      html: `
  <h1>Ny oppdrags forespørsel</h1>

  <h2>Kontaktinfo</h2>
  <p><strong>Fornavn:</strong> ${fornavn}</p>
  <p><strong>Etternavn:</strong> ${etternavn}</p>
  <p><strong>Bedrift:</strong> ${bedrift}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Telefon:</strong> ${telefon}</p>

  <h2>Booking info</h2>
  <p><strong>Dato:</strong> ${date}</p>

  <h2>Melding</h2>
  <p>${comment}</p>
`,
    });

    console.log(result);
    return Response.json({ success: true });
  } catch (err) {
    console.error("API ERROR:", err);

    return Response.json({ error: err.message }, { status: 500 });
  }
}
