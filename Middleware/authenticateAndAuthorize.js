const admin = require("../config/firebase.config");

function authenticateAndAuthorize(allowedRoles) {
  return function (req, res, next) {
    const idToken = req.headers.authorization?.split(" ")[1];
    if (!idToken) {
      return res
        .status(401)
        .send({ message: "Authentication failed: no token provided" });
    }

    admin
      .auth()
      .verifyIdToken(idToken)
      .then((claims) => {
        if (allowedRoles && (!claims.roles || !allowedRoles?.some((role) =>
        claims.roles.includes(role)
      ))) {
          console.log("forbidden");
          return res
            .status(403)
            .send({ message: "Authorization failed: forbidden" });
        }
        console.log("authorized");
        next();
      })
      .catch((error) => {
        console.error(error);
        res
          .status(401)
          .send({ message: "Authentication failed: invalid token" });
      });
  };
}

module.exports = authenticateAndAuthorize;
