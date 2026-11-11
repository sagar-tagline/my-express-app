const express = require("express");

const app = express();

const PORT = 3000;

// Simple GET API
app.get("/", (req, res) => {
  res.send("Hello! Express server is running.");
});

// GET API - Users
app.get("/api/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: [
      {
        id: 1,
        name: "Sagar",
        email: "sagar@gmail.com",
        age: 25,
      },
      {
        id: 2,
        name: "Rahul",
        email: "rahul@gmail.com",
        age: 28,
      },
      {
        id: 3,
        name: "Amit",
        email: "amit@gmail.com",
        age: 26,
      },
    ],
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
