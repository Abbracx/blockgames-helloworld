// migrations/2_deploy.js
const HelloWorld = artifacts.require("HelloWorld");

module.exports = async function (deployer) {
  await deployer.deploy(HelloWorld);
};
