require("dotenv").config({ path: __dirname + "/../.env" });
const app = require("./app");

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
