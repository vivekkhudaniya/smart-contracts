const hre = require("hardhat");

async function main() {
  await hre.run("verify:verify", {
    //Deployed contract address
    address: "0x071e9235B80DbA71e91e365b5b81f43C674cfD94",
    //Pass arguments as string and comma seprated values
    constructorArguments: [],
    //Path of your main contract.
    contract:
      "contracts/upgradeability/OwnedUpgradeabilityProxy.sol:OwnedUpgradeabilityProxy",
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//npx hardhat run --network rinkeby  scripts/verify.ts
