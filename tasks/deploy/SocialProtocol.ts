import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { SocialProtocol } from "../../src/types/SocialProtocol";
import type { SocialProtocol__factory } from "../../src/types/factories/SocialProtocol__factory";

task("deploy:SocialProtocol").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const socialProtocolFactory: SocialProtocol__factory = <SocialProtocol__factory>(
    await ethers.getContractFactory("SocialProtocol")
  );
  const socialProtocol: SocialProtocol = <SocialProtocol>await socialProtocolFactory.connect(signers[0]).deploy();
  await socialProtocol.deployed();
  console.log("SocialProtocol contract deployed to: ", socialProtocol.address);
});
