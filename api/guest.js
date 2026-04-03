import guests from "../data/guests.js";

export async function GET(request) {
  console.log("ddd");
  const { searchParams } = new URL(request.url);
  const pozivnoy = searchParams.get("pozivnoy");

  if (!pozivnoy) {
    return Response.json(
      { ok: false, error: "pozivnoy is required" },
      { status: 400 },
    );
  }

  const guest = guests.find((item) => item.pozivnoy === pozivnoy);

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
