import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(req: Request) {
  try {
    const order = await req.json()
    const { foodName, quantity, total, address, phone } = order ?? {}

    if (!foodName || !quantity || !total || !address || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required order fields" },
        { status: 400 },
      )
    }

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL!, // e.g. "orders@yourdomain.com"
      to: process.env.NOTIFY_EMAIL!,
      subject: `New Order - ${escapeHtml(foodName)}`,
      html: `
        <h2>New Food Order</h2>
        <p>Food: ${escapeHtml(foodName)}</p>
        <p>Quantity: ${escapeHtml(quantity)}</p>
        <p>Total: $${escapeHtml(total)}</p>
        <p>Address: ${escapeHtml(address)}</p>
        <p>Phone: ${escapeHtml(phone)}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { success: false, error: "Failed to send order notification" },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error("Failed to send order email:", err)
    return NextResponse.json(
      { success: false, error: "Failed to send order notification" },
      { status: 500 },
    )
  }
}
