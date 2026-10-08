const { ethers } = require("ethers");
require("dotenv").config();

const contractABI = require("./DrugSupplyChain.json").abi;

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

const contractAddress = process.env.CONTRACT_ADDRESS;

const contract = new ethers.Contract(
    contractAddress,
    contractABI,
    provider
);

console.log("Blockchain provider initialized");
console.log("Network: Ethereum Sepolia");
console.log("Contract:", contractAddress);

module.exports = {
    provider,
    contract
};

