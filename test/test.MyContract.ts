import {
  MyContract,
  MyContract__factory,
  OwnedUpgradeabilityProxy__factory,
  OwnedUpgradeabilityProxy,
} from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";
import { mineBlocks } from "./utilities/utilities";
import { expect } from "chai";

describe("MyContract_Upgradeable", async () => {
  let impl: MyContract;
  let myContract: MyContract;
  let owner: SignerWithAddress;
  let signers: SignerWithAddress[];
  let proxy: OwnedUpgradeabilityProxy;

  beforeEach(async () => {
    signers = await ethers.getSigners();
    owner = signers[0];

    proxy = await new OwnedUpgradeabilityProxy__factory(owner).deploy();
    impl = await new MyContract__factory(owner).deploy();
    myContract = await new MyContract__factory(owner).attach(proxy.address);
    const initializeData = await impl.interface.encodeFunctionData(
      "initialize",
      [42]
    );
    await proxy.upgradeToAndCall(impl.address, initializeData);
  });

  it("retrieve returns a value previously initialized", async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await myContract.retrieve()).toString()).to.equal("42");
  });
});
