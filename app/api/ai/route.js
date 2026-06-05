export async function GET() {
  return new Response(JSON.stringify({ status: "ai endpoint" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
