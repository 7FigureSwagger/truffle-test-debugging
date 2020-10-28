var SimpleStorage = artifacts.require('SimpleStorage')
var Migrations = artifacts.require('Migrations')

module.exports = (deployer) => {
    deployer.deploy(SimpleStorage)
    deployer.deploy(Migrations)
}