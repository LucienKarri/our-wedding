export const PreferencesForm = () => {
  const handleSubmit = (data: FormData) => {
    console.log("data", data.get("Vodka"));
    fetch(
      `https://api.telegram.org/bot${import.meta.env.VITE_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: import.meta.env.VITE_CHAT_ID,
          text: `test message`,
        }),
      },
    );
  };

  return (
    <form action={handleSubmit}>
      <div>
        <input type="checkbox" name="Vodka" id="Vodka" />
        <label htmlFor="Vodka">Vodka-podvodka</label>
      </div>
      <div>
        <input type="checkbox" name="Pivo" id="Pivo" />
        <label htmlFor="Pivo">Pivo-lodochka</label>
      </div>
      <button type="submit">let's go</button>
    </form>
  );
};
