import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import type { SocialProtocol } from "../src/types/SocialProtocol";

type Fixture<T> = () => Promise<T>;

declare module "mocha" {
  export interface Context {
    socialProtocol: SocialProtocol;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
}
