import guests from "../data/guests.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return Response.json(
      { ok: false, error: "Token is required" },
      { status: 400 },
    );
  }

  const guest = guests.find((item) => item.token === token);

  if (!guest) {
    return Response.json(
      { ok: false, error: "Invite not found" },
      { status: 404 },
    );
  }

  return Response.json({
    ok: true,
    guest: {
      name: guest.name,
      family: guest.family,
      sex: guest.sex,
    },
  });
}
