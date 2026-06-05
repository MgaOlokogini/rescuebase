export async function GET() {
  return new Response(JSON.stringify({ status: "ledger endpoint" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
