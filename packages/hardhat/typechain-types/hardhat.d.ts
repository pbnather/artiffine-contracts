/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2981__factory>;
    getContractFactory(
      name: "ERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2981__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "ERC721Royalty",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Royalty__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Azuki",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Azuki__factory>;
    getContractFactory(
      name: "INFTContractWithAllowlist",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INFTContractWithAllowlist__factory>;
    getContractFactory(
      name: "INFTContractWithWithdrawal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INFTContractWithWithdrawal__factory>;
    getContractFactory(
      name: "NFTContractWithAllowlist",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTContractWithAllowlist__factory>;
    getContractFactory(
      name: "NFTContractWithWithdrawal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTContractWithWithdrawal__factory>;
    getContractFactory(
      name: "INFTContractBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INFTContractBase__factory>;
    getContractFactory(
      name: "NFTContractBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTContractBase__factory>;
    getContractFactory(
      name: "NFTContractCrossmint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTContractCrossmint__factory>;
    getContractFactory(
      name: "NFTContractExample",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTContractExample__factory>;
    getContractFactory(
      name: "NFTContractSimple",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTContractSimple__factory>;
    getContractFactory(
      name: "NFTContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTContract__factory>;
    getContractFactory(
      name: "Multicall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multicall__factory>;
    getContractFactory(
      name: "ERC721A__IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__factory>;
    getContractFactory(
      name: "IERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721A__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC2981",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2981>;
    getContractAt(
      name: "ERC2981",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC2981>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "ERC721Royalty",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Royalty>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Azuki",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Azuki>;
    getContractAt(
      name: "INFTContractWithAllowlist",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INFTContractWithAllowlist>;
    getContractAt(
      name: "INFTContractWithWithdrawal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INFTContractWithWithdrawal>;
    getContractAt(
      name: "NFTContractWithAllowlist",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTContractWithAllowlist>;
    getContractAt(
      name: "NFTContractWithWithdrawal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTContractWithWithdrawal>;
    getContractAt(
      name: "INFTContractBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INFTContractBase>;
    getContractAt(
      name: "NFTContractBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTContractBase>;
    getContractAt(
      name: "NFTContractCrossmint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTContractCrossmint>;
    getContractAt(
      name: "NFTContractExample",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTContractExample>;
    getContractAt(
      name: "NFTContractSimple",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTContractSimple>;
    getContractAt(
      name: "NFTContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTContract>;
    getContractAt(
      name: "Multicall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Multicall>;
    getContractAt(
      name: "ERC721A__IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A__IERC721Receiver>;
    getContractAt(
      name: "ERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A>;
    getContractAt(
      name: "IERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721A>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
