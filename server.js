require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: ["http://localhost:5173","http://localhost:5174"]
};

app.use(cors(corsOptions));
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// seq connexion
const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("synchronisation terminé.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

//middleware
// const authenticate = require("./middleware/authenticate");
// app.use(authenticate);

//user routes
const userRoutes = require("./routes/user.route");
app.use("/api/users", userRoutes);


//societe routes
const societeRoutes = require("./routes/societe.route");
app.use("/api/societes", societeRoutes);

//secteur routes
const secteurRoutes = require("./routes/secteur.route");
app.use("/api/secteurs", secteurRoutes);

//candidat routes
const candidatRoutes = require("./routes/candidat.route");
app.use("/api/candidats", candidatRoutes);

//categorie routes
const categorieRoutes = require("./routes/categorie.route");
app.use("/api/categories", categorieRoutes);

//interet routes
const interetRoutes = require("./routes/interet.route");
app.use("/api/interets", interetRoutes);

//offre routes
const offreRoutes = require("./routes/offre.route");
app.use("/api/offres", offreRoutes);

//candidature routes
const candidatureRoutes = require("./routes/candidature.route");
app.use("/api/candidatures", candidatureRoutes);

//notification routes
const notificationRoutes = require("./routes/notification.route");
app.use("/api/notifications", notificationRoutes);

app.get("/", (req, res) => {
  res.json({ message: "welcome to my application" });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});