/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  NFTContractSimple,
  NFTContractSimpleInterface,
} from "../../../contracts/NFTContract_no_royalties.sol/NFTContractSimple";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_PUBLIC_MINT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRICE_PER_TOKEN",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROVENANCE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "allowlistMintAmount",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isAllowlistSaleActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isSaleActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "numberOfTokens",
        type: "uint8",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "numberOfTokens",
        type: "uint8",
      },
    ],
    name: "mintAllowlisted",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
      {
        internalType: "uint8",
        name: "numAllowedToMint",
        type: "uint8",
      },
    ],
    name: "setAllowlistAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI_",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "contractUri_",
        type: "string",
      },
    ],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "setIsAllowlistSaleActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "setIsSaleActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "provenance",
        type: "string",
      },
    ],
    name: "setProvenance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600e805461ffff191690553480156200001c57600080fd5b50604080518082018252600d81526c417274696666696e6544656d6f60981b60208083019182528351808501909452600584526420a92a24a360d91b9084015281519192916200006f91600091620000fe565b50805162000085906001906020840190620000fe565b505050620000a26200009c620000a860201b60201c565b620000ac565b620001e1565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200010c90620001a4565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600181811c90821680620001b957607f821691505b60208210811415620001db57634e487b7160e01b600052602260045260246000fd5b50919050565b61284a80620001f16000396000f3fe60806040526004361061024e5760003560e01c80636ecd230611610138578063a22cb465116100b0578063d2d65ff51161007f578063e985e9c511610064578063e985e9c514610659578063f2fde38b146106a2578063ffe630b5146106c257600080fd5b8063d2d65ff514610624578063e8a3d4851461064457600080fd5b8063a22cb465146105a4578063b3485d8d146105c4578063b88d4fde146105e4578063c87b56dd1461060457600080fd5b8063833b9499116101075780638da5cb5b116100ec5780638da5cb5b14610551578063938e3d7b1461056f57806395d89b411461058f57600080fd5b8063833b949914610522578063853828b61461053c57600080fd5b80636ecd2306146104ba57806370a08231146104cd578063715018a6146104ed5780637b6cba5c1461050257600080fd5b806332cb6b0c116101cb57806355f804b31161019a5780636352211e1161017f5780636352211e146104705780636373a6b11461049057806365f13097146104a557600080fd5b806355f804b314610436578063564566a81461045657600080fd5b806332cb6b0c146103cd57806342842e0e146103e35780634acde4d1146104035780634f6ccce71461041657600080fd5b8063095ea7b31161022257806323b872dd1161020757806323b872dd1461034257806325a466f4146103625780632f745c59146103ad57600080fd5b8063095ea7b31461030157806318160ddd1461032357600080fd5b806210f81e1461025357806301ffc9a71461028757806306fdde03146102a7578063081812fc146102c9575b600080fd5b34801561025f57600080fd5b50600e5461027290610100900460ff1681565b60405190151581526020015b60405180910390f35b34801561029357600080fd5b506102726102a236600461225e565b6106e2565b3480156102b357600080fd5b506102bc6106f3565b60405161027e91906122d3565b3480156102d557600080fd5b506102e96102e43660046122e6565b610785565b6040516001600160a01b03909116815260200161027e565b34801561030d57600080fd5b5061032161031c36600461231b565b6107ac565b005b34801561032f57600080fd5b506008545b60405190815260200161027e565b34801561034e57600080fd5b5061032161035d366004612345565b6108e3565b34801561036e57600080fd5b5061039b61037d366004612381565b6001600160a01b03166000908152600f602052604090205460ff1690565b60405160ff909116815260200161027e565b3480156103b957600080fd5b506103346103c836600461231b565b61096a565b3480156103d957600080fd5b506103346103e881565b3480156103ef57600080fd5b506103216103fe366004612345565b610a12565b6103216104113660046123ad565b610a2d565b34801561042257600080fd5b506103346104313660046122e6565b610c51565b34801561044257600080fd5b50610321610451366004612454565b610cf5565b34801561046257600080fd5b50600e546102729060ff1681565b34801561047c57600080fd5b506102e961048b3660046122e6565b610d14565b34801561049c57600080fd5b506102bc610d79565b3480156104b157600080fd5b50610334600a81565b6103216104c83660046123ad565b610e07565b3480156104d957600080fd5b506103346104e8366004612381565b610fd5565b3480156104f957600080fd5b5061032161106f565b34801561050e57600080fd5b5061032161051d3660046124ad565b611083565b34801561052e57600080fd5b50610334655af3107a400081565b34801561054857600080fd5b506103216110a5565b34801561055d57600080fd5b50600a546001600160a01b03166102e9565b34801561057b57600080fd5b5061032161058a366004612454565b611119565b34801561059b57600080fd5b506102bc611134565b3480156105b057600080fd5b506103216105bf3660046124c8565b611143565b3480156105d057600080fd5b506103216105df3660046124fb565b61114e565b3480156105f057600080fd5b506103216105ff36600461257f565b6111d6565b34801561061057600080fd5b506102bc61061f3660046122e6565b61125e565b34801561063057600080fd5b5061032161063f3660046124ad565b6112c5565b34801561065057600080fd5b506102bc6112e0565b34801561066557600080fd5b506102726106743660046125fb565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b3480156106ae57600080fd5b506103216106bd366004612381565b6112ed565b3480156106ce57600080fd5b506103216106dd366004612454565b61137a565b60006106ed82611395565b92915050565b60606000805461070290612625565b80601f016020809104026020016040519081016040528092919081815260200182805461072e90612625565b801561077b5780601f106107505761010080835404028352916020019161077b565b820191906000526020600020905b81548152906001019060200180831161075e57829003601f168201915b5050505050905090565b6000610790826113d3565b506000908152600460205260409020546001600160a01b031690565b60006107b782610d14565b9050806001600160a01b0316836001600160a01b031614156108465760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b336001600160a01b038216148061086257506108628133610674565b6108d45760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161083d565b6108de8383611437565b505050565b6108ed33826114b2565b61095f5760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f766564000000000000000000000000000000000000606482015260840161083d565b6108de838383611531565b600061097583610fd5565b82106109e95760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e6473000000000000000000000000000000000000000000606482015260840161083d565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6108de838383604051806020016040528060008152506111d6565b6000610a3860085490565b600e54909150610100900460ff16610a925760405162461bcd60e51b815260206004820152601c60248201527f416c6c6f776c6973742073616c65206973206e6f742061637469766500000000604482015260640161083d565b336000908152600f602052604090205460ff9081169083161115610b1e5760405162461bcd60e51b815260206004820152602260248201527f4578636565646564206d617820617661696c61626c6520746f2070757263686160448201527f7365000000000000000000000000000000000000000000000000000000000000606482015260840161083d565b6103e8610b2e60ff841683612676565b1115610b7c5760405162461bcd60e51b815260206004820181905260248201527f507572636861736520776f756c6420657863656564206d617820746f6b656e73604482015260640161083d565b34610b9060ff8416655af3107a400061268e565b1115610bde5760405162461bcd60e51b815260206004820152601f60248201527f45746865722076616c75652073656e74206973206e6f7420636f727265637400604482015260640161083d565b336000908152600f602052604081208054849290610c0090849060ff166126ad565b92506101000a81548160ff021916908360ff16021790555060005b8260ff168160ff1610156108de57610c3f33610c3a60ff841685612676565b611716565b80610c49816126d0565b915050610c1b565b6000610c5c60085490565b8210610cd05760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e64730000000000000000000000000000000000000000606482015260840161083d565b60088281548110610ce357610ce36126f0565b90600052602060002001549050919050565b610cfd611730565b8051610d1090600b9060208401906121af565b5050565b6000818152600260205260408120546001600160a01b0316806106ed5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161083d565b600c8054610d8690612625565b80601f0160208091040260200160405190810160405280929190818152602001828054610db290612625565b8015610dff5780601f10610dd457610100808354040283529160200191610dff565b820191906000526020600020905b815481529060010190602001808311610de257829003601f168201915b505050505081565b6000610e1260085490565b600e5490915060ff16610e8d5760405162461bcd60e51b815260206004820152602260248201527f53616c65206d7573742062652061637469766520746f206d696e7420746f6b6560448201527f6e73000000000000000000000000000000000000000000000000000000000000606482015260840161083d565b600a8260ff161115610ee15760405162461bcd60e51b815260206004820152601b60248201527f4578636565646564206d617820746f6b656e2070757263686173650000000000604482015260640161083d565b6103e8610ef160ff841683612676565b1115610f3f5760405162461bcd60e51b815260206004820181905260248201527f507572636861736520776f756c6420657863656564206d617820746f6b656e73604482015260640161083d565b34610f5360ff8416655af3107a400061268e565b1115610fa15760405162461bcd60e51b815260206004820152601f60248201527f45746865722076616c75652073656e74206973206e6f7420636f727265637400604482015260640161083d565b60005b8260ff168160ff1610156108de57610fc333610c3a60ff841685612676565b80610fcd816126d0565b915050610fa4565b60006001600160a01b0382166110535760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e65720000000000000000000000000000000000000000000000606482015260840161083d565b506001600160a01b031660009081526003602052604090205490565b611077611730565b611081600061178a565b565b61108b611730565b600e80549115156101000261ff0019909216919091179055565b6110ad611730565b47806110fb5760405162461bcd60e51b815260206004820152601c60248201527f436f6e74726163742062616c616e6365206d757374206265203e203000000000604482015260640161083d565b611116611110600a546001600160a01b031690565b476117e9565b50565b611121611730565b8051610d1090600d9060208401906121af565b60606001805461070290612625565b610d10338383611902565b611156611730565b60005b60ff81168311156111d05781600f600086868560ff1681811061117e5761117e6126f0565b90506020020160208101906111939190612381565b6001600160a01b031681526020810191909152604001600020805460ff191660ff92909216919091179055806111c8816126d0565b915050611159565b50505050565b6111e033836114b2565b6112525760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f766564000000000000000000000000000000000000606482015260840161083d565b6111d0848484846119d1565b6060611269826113d3565b6000611273611a4f565b9050600081511161129357604051806020016040528060008152506112be565b8061129d84611a5e565b6040516020016112ae929190612706565b6040516020818303038152906040525b9392505050565b6112cd611730565b600e805460ff1916911515919091179055565b600d8054610d8690612625565b6112f5611730565b6001600160a01b0381166113715760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161083d565b6111168161178a565b611382611730565b8051610d1090600c9060208401906121af565b60006001600160e01b031982167f780e9d630000000000000000000000000000000000000000000000000000000014806106ed57506106ed82611b90565b6000818152600260205260409020546001600160a01b03166111165760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161083d565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038416908117909155819061147982610d14565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806114be83610d14565b9050806001600160a01b0316846001600160a01b0316148061150557506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806115295750836001600160a01b031661151e84610785565b6001600160a01b0316145b949350505050565b826001600160a01b031661154482610d14565b6001600160a01b0316146115c05760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e6572000000000000000000000000000000000000000000000000000000606482015260840161083d565b6001600160a01b03821661163b5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161083d565b611646838383611c2b565b611651600082611437565b6001600160a01b038316600090815260036020526040812080546001929061167a908490612735565b90915550506001600160a01b03821660009081526003602052604081208054600192906116a8908490612676565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610d10828260405180602001604052806000815250611c36565b600a546001600160a01b031633146110815760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161083d565b600a80546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8047101561185f5760405162461bcd60e51b815260206004820152602360248201527f436f6e74726163742062616c616e6365206d757374206265203e3d205f616d6f60448201527f756e740000000000000000000000000000000000000000000000000000000000606482015260840161083d565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146118ac576040519150601f19603f3d011682016040523d82523d6000602084013e6118b1565b606091505b50509050806108de5760405162461bcd60e51b815260206004820152601060248201527f5472616e73666572206661696c65642e00000000000000000000000000000000604482015260640161083d565b816001600160a01b0316836001600160a01b031614156119645760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161083d565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6119dc848484611531565b6119e884848484611cb4565b6111d05760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161083d565b6060600b805461070290612625565b606081611a9e57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115611ac85780611ab28161274c565b9150611ac19050600a8361277d565b9150611aa2565b60008167ffffffffffffffff811115611ae357611ae36123c8565b6040519080825280601f01601f191660200182016040528015611b0d576020820181803683370190505b5090505b841561152957611b22600183612735565b9150611b2f600a86612791565b611b3a906030612676565b60f81b818381518110611b4f57611b4f6126f0565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611b89600a8661277d565b9450611b11565b60006001600160e01b031982167f80ac58cd000000000000000000000000000000000000000000000000000000001480611bf357506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806106ed57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316146106ed565b6108de838383611e0c565b611c408383611ec4565b611c4d6000848484611cb4565b6108de5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161083d565b60006001600160a01b0384163b15611e0157604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611cf89033908990889088906004016127a5565b602060405180830381600087803b158015611d1257600080fd5b505af1925050508015611d42575060408051601f3d908101601f19168201909252611d3f918101906127e1565b60015b611de7573d808015611d70576040519150601f19603f3d011682016040523d82523d6000602084013e611d75565b606091505b508051611ddf5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161083d565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611529565b506001949350505050565b6001600160a01b038316611e6757611e6281600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611e8a565b816001600160a01b0316836001600160a01b031614611e8a57611e8a838261201f565b6001600160a01b038216611ea1576108de816120bc565b826001600160a01b0316826001600160a01b0316146108de576108de828261216b565b6001600160a01b038216611f1a5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161083d565b6000818152600260205260409020546001600160a01b031615611f7f5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161083d565b611f8b60008383611c2b565b6001600160a01b0382166000908152600360205260408120805460019290611fb4908490612676565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000600161202c84610fd5565b6120369190612735565b600083815260076020526040902054909150808214612089576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b6008546000906120ce90600190612735565b600083815260096020526040812054600880549394509092849081106120f6576120f66126f0565b906000526020600020015490508060088381548110612117576121176126f0565b600091825260208083209091019290925582815260099091526040808220849055858252812055600880548061214f5761214f6127fe565b6001900381819060005260206000200160009055905550505050565b600061217683610fd5565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b8280546121bb90612625565b90600052602060002090601f0160209004810192826121dd5760008555612223565b82601f106121f657805160ff1916838001178555612223565b82800160010185558215612223579182015b82811115612223578251825591602001919060010190612208565b5061222f929150612233565b5090565b5b8082111561222f5760008155600101612234565b6001600160e01b03198116811461111657600080fd5b60006020828403121561227057600080fd5b81356112be81612248565b60005b8381101561229657818101518382015260200161227e565b838111156111d05750506000910152565b600081518084526122bf81602086016020860161227b565b601f01601f19169290920160200192915050565b6020815260006112be60208301846122a7565b6000602082840312156122f857600080fd5b5035919050565b80356001600160a01b038116811461231657600080fd5b919050565b6000806040838503121561232e57600080fd5b612337836122ff565b946020939093013593505050565b60008060006060848603121561235a57600080fd5b612363846122ff565b9250612371602085016122ff565b9150604084013590509250925092565b60006020828403121561239357600080fd5b6112be826122ff565b803560ff8116811461231657600080fd5b6000602082840312156123bf57600080fd5b6112be8261239c565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff808411156123f9576123f96123c8565b604051601f8501601f19908116603f01168101908282118183101715612421576124216123c8565b8160405280935085815286868601111561243a57600080fd5b858560208301376000602087830101525050509392505050565b60006020828403121561246657600080fd5b813567ffffffffffffffff81111561247d57600080fd5b8201601f8101841361248e57600080fd5b611529848235602084016123de565b8035801515811461231657600080fd5b6000602082840312156124bf57600080fd5b6112be8261249d565b600080604083850312156124db57600080fd5b6124e4836122ff565b91506124f26020840161249d565b90509250929050565b60008060006040848603121561251057600080fd5b833567ffffffffffffffff8082111561252857600080fd5b818601915086601f83011261253c57600080fd5b81358181111561254b57600080fd5b8760208260051b850101111561256057600080fd5b602092830195509350612576918601905061239c565b90509250925092565b6000806000806080858703121561259557600080fd5b61259e856122ff565b93506125ac602086016122ff565b925060408501359150606085013567ffffffffffffffff8111156125cf57600080fd5b8501601f810187136125e057600080fd5b6125ef878235602084016123de565b91505092959194509250565b6000806040838503121561260e57600080fd5b612617836122ff565b91506124f2602084016122ff565b600181811c9082168061263957607f821691505b6020821081141561265a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561268957612689612660565b500190565b60008160001904831182151516156126a8576126a8612660565b500290565b600060ff821660ff8416808210156126c7576126c7612660565b90039392505050565b600060ff821660ff8114156126e7576126e7612660565b60010192915050565b634e487b7160e01b600052603260045260246000fd5b6000835161271881846020880161227b565b83519083019061272c81836020880161227b565b01949350505050565b60008282101561274757612747612660565b500390565b600060001982141561276057612760612660565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261278c5761278c612767565b500490565b6000826127a0576127a0612767565b500690565b60006001600160a01b038087168352808616602084015250836040830152608060608301526127d760808301846122a7565b9695505050505050565b6000602082840312156127f357600080fd5b81516112be81612248565b634e487b7160e01b600052603160045260246000fdfea26469706673582212204e7eed3d1e44a89a608bc223ee99abd6fcb164f95c14e40476e41598534b1ccf64736f6c63430008090033";

type NFTContractSimpleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTContractSimpleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTContractSimple__factory extends ContractFactory {
  constructor(...args: NFTContractSimpleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTContractSimple> {
    return super.deploy(overrides || {}) as Promise<NFTContractSimple>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTContractSimple {
    return super.attach(address) as NFTContractSimple;
  }
  override connect(signer: Signer): NFTContractSimple__factory {
    return super.connect(signer) as NFTContractSimple__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTContractSimpleInterface {
    return new utils.Interface(_abi) as NFTContractSimpleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTContractSimple {
    return new Contract(address, _abi, signerOrProvider) as NFTContractSimple;
  }
}
