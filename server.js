const express = require("express");

const app = express();

const PORT = 3000;

// Simple GET API
app.get("/", (req, res) => {
  res.send("Hello! Express server is running.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
