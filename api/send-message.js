export async function POST(request) {
  console.log(process.env);
  try {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return Response.json(
        { ok: false, error: "Server env is not configured" },
        { status: 500 },
      );
    }

    const body = await request.json();

    const vodka = { id: "водка", value: body?.vodka };
    const visky = { id: "виски", value: body?.visky };
    const whiteVine = { id: "вино белое", value: body?.whiteVine };
    const redVine = { id: "вино красное", value: body?.redVine };
    const jin = { id: "джин", value: body?.jin };
    const rom = { id: "ром", value: body?.rom };
    const bableVine = { id: "вино игристое", value: body?.bableVine };
    const visit = String(body?.visit || "").trim();
    const other = String(body?.other || "").trim();
    const guest = String(body?.guest || "").trim();
    const alcoholArr = [vodka, visky, whiteVine, redVine, jin, rom, bableVine];
    const pozivnoy = String(body?.pozivnoy || "").trim();

    const text = `
        <b>${guest} (${pozivnoy})</b>
        <b>Собираются посетить свадьбу</b>: ${visit ? "да" : "нет"}
        <b>Выбранный алкоголь</b>: ${alcoholArr
          .filter((item) => !!item.value)
          .map((item) => item.id)
          .join(",")}
        <b>Заметка</b>: ${other}
    `;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "html",
        }),
      },
    );

    const tgData = await tgRes.json();

    if (!tgRes.ok || !tgData.ok) {
      console.error("Telegram error:", tgData);

      return Response.json(
        { ok: false, error: "Не удалось отправить сообщение" },
        { status: 500 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      { ok: false, error: "Ошибка сервера" },
      { status: 500 },
    );
  }
}
