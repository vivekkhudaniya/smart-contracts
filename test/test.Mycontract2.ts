import {
  MyContract,
  MyContract__factory,
  OwnedUpgradeabilityProxy__factory,
  OwnedUpgradeabilityProxy,
  MyContract2,
  MyContract2__factory,
} from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";
import { mineBlocks } from "./utilities/utilities";
import { expect } from "chai";

describe("MyContract2_Upgradable", async () => {
  let impl: MyContract;
  let impl2: MyContract2;
  let myContract: MyContract;
  let myContract2: MyContract2;
  let owner: SignerWithAddress;
  let signers: SignerWithAddress[];
  let proxy: OwnedUpgradeabilityProxy;

  beforeEach(async () => {
    signers = await ethers.getSigners();
    owner = signers[0];
    proxy = await new OwnedUpgradeabilityProxy__factory(owner).deploy();
    impl = await new MyContract__factory(owner).deploy();
    myContract = await new MyContract__factory(owner).attach(proxy.address);
    const initializeData = impl.interface.encodeFunctionData("initialize", [
      42,
    ]);
    await proxy.upgradeToAndCall(impl.address, initializeData);

    impl2 = await new MyContract2__factory(owner).deploy();
    myContract2 = await new MyContract2__factory(owner).attach(proxy.address);

    await proxy.upgradeTo(impl2.address);
  });

  it("retrieve returns a value previously incremented", async function () {
    expect((await myContract2.retrieve()).toString()).to.equal("42");
    // Increment
    await myContract2.increment();
    await myContract2.initializeV1(26);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await myContract2.retrieve()).toString()).to.equal("43");
    await myContract2.returnDecreasedAge();
    expect((await myContract2.age()).toString()).to.equal("25");
    await myContract2.getIncreaedAge();
    expect((await myContract2.age()).toString()).to.equal("26");
  });
});
