const admin = require("../config/firebase.config");

function setCustomRoles(uid, newRoles) {
  return admin.auth().getUser(uid)
    .then(user => {
      const customClaims = user.customClaims;

      if (customClaims && customClaims.roles) {
        const existingRoles = customClaims.roles;
        const updatedRoles = [...existingRoles, newRoles.roles];
        const updatedCustomClaims = { roles: updatedRoles };
        return admin.auth().setCustomUserClaims(uid, updatedCustomClaims)
          .then(() => updatedCustomClaims);
      } else {
        const updatedCustomClaims = { roles: [newRoles.roles] };
        return admin.auth().setCustomUserClaims(uid, updatedCustomClaims)
          .then(() => updatedCustomClaims);
      }
    })
    .catch(error => {
      console.error(`Error setting custom roles for user: ${error}`);
      throw error;
    });
}

module.exports = {
  setCustomRoles,
};