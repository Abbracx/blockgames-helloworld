require('dotenv').config()
const privateKey =process.env.PRIVATEKEY ||"a3f2a57bbfb7bd361e2bd082091de6c5f253705f421214287288e0a185b346b5";
const projectID = process.env.PROJECTID || "79eb6ac982f9429d82fd4bf6a0777f86";
module.exports = {
  privateKey,
  projectID,
};