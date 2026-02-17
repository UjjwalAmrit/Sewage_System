const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// Import routes
const contactRoutes = require("./routes/contactRoutes");
const homeRoutes = require("./routes/homeRoutes");
const aboutRoutes =require("./routes/aboutRoutes");
const projectServiceRoutes = require("./routes/projectServiceRoutes");

const app = express();


connectDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/contact", contactRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/projects-&-services", projectServiceRoutes);


app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});


app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});


module.exports = app;
