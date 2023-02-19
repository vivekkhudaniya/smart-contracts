import { ethers } from "hardhat";

async function main() {

  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy("CounterCheck",1);

  const check = await counter.deployed();
  console.log("Print the deploy address",check.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});