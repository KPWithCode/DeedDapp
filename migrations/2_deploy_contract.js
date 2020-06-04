// Fetch Deed contract data from the deed contract file
const Deed = artifacts.require("Deed");

// export
module.exports = function(deployer,_network, accounts) {
    // Deployer is the Truffle wrapper for deploying contracts to the network
    // Deploy the contract to the network
    deployer.deploy(Deed, accounts[0], accounts[1],5, {value: 100});
}