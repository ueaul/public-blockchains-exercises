// Ethers JS: Signers.
//////////////////////

// A Signer wraps all operations that interact with an account. An account
// generally has a private key located somewhere, which can be used to sign a
// variety of types of payloads.

// The private key may be located in memory (using a Wallet) or protected via
// some IPC layer, such as MetaMask which proxies interaction from a website to
// a browser plug-in, which keeps the private key out of the reach of the 
// website and only permits interaction after requesting permission from the
// user and receiving authorization.

// See: https://docs.ethers.org/v6/getting-started/

// Exercise 0. Load dependencies and network provider.
//////////////////////////////////////////////////////

// a. Require the `dotenv` and `ethers` packages.
// Hint: As you did in file 1_wallet and 2_provider.

// Your code here!
require('dotenv').config();
const ethers = require("ethers");
// b. Create a Goerli provider.

// Your code here!
const providerKey = process.env.INFURA_KEY;
const goerliInfuraUrl = `${process.env.INFURA_GOERLI_API_URL}${providerKey}`;
const goerliProvider = new ethers.JsonRpcProvider(goerliInfuraUrl);