import app from "./App.js";

const PORT = process.env.PORT || 3330;

app.listen(PORT, () => {
  console.log(`Listening on http://127.0.0.1:${PORT}`);
});
