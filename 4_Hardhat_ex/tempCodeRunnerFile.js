////////////////////////////////////////////////////////////////////////
// Attention!
// You should not execute this file here, but rather copy it
// inside the scripts/ directory of a newly inited hardhat project.
////////////////////////////////////////////////////////////////////////

// Exercise 0. Learn how to run this file.
//////////////////////////////////////////

// Text below taken from official hardhat template:

// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

// Try to execute this file in both ways and check which one is faster.
// Then comment the return statement below and proceed with something more
// interesting.

const hre = require("hardhat");
console.log('Hardhat\'s default network:', hre.config.defaultNetwork);