require("dotenv").config({ path: __dirname + "/../.env" });
const app = require("./app");
const path = require("path");

const PORT = process.env.PORT || 5000;

// Serve React frontend
const frontendPath = path.join(__dirname, "../frontend/dist"); // use 'build' if CRA
app.use(express.static(frontendPath));

// For all other routes, serve index.html (React SPA routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
