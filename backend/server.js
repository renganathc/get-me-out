import app from "./src/app.js";

const PORT = process.env.PORT || 7860;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
