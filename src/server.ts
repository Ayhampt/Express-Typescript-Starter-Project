import express from "express";

const app= express();

const PORT: number = 3000;

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`press CTL+C to stop the Server`);

})