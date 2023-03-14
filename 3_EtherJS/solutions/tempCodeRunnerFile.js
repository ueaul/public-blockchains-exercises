let variablesToCheck = [
    "INFURA_KEY", "INFURA_GOERLI", "INFURA_MAINNET",
    "ALCHEMY_KEY", "ALCHEMY_GOERLI", "ALCHEMY_MAINNET",
    "METAMASK_1_ADDRESS", "METAMASK_1_PRIVATE_KEY",
    "METAMASK_2_ADDRESS", "METAMASK_2_PRIVATE_KEY",
    "ETHERSCAN_KEY"
];

console.log('Num of variables in .env to check: ', variablesToCheck.length);

// exit();

// c. Loop through all the elements of the array and check that the variable
// is set and non-empty under `process.env`.

// Hint1: You can implement a for-loop or use the .forEach routine.
// Hint2: `process.env` is an object, if you don't know how to access its 
// field, read here: https://javascript.info/object


// Solution 1. forEach.
variablesToCheck.forEach(v => {
    if (!process.env[v]) {
        console.log(process.env[v])
        console.log(`Missing ${v}, fix your .env file`);
    }
});