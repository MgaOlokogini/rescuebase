export async function GET() {
  return new Response(JSON.stringify({ status: "auth endpoint" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
