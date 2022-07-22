/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Multicall, MulticallInterface } from "../../contracts/Multicall";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610613806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806372425d9d1161005b57806372425d9d146100f357806386d516e8146100f9578063a8b0574e146100ff578063ee82ac5e1461010d57600080fd5b80630f28c97d1461008d578063252dba42146100a257806327e86d6e146100c35780634d2301cc146100cb575b600080fd5b425b6040519081526020015b60405180910390f35b6100b56100b0366004610318565b61011f565b6040516100999291906104a6565b61008f61026c565b61008f6100d9366004610528565b73ffffffffffffffffffffffffffffffffffffffff163190565b4461008f565b4561008f565b604051418152602001610099565b61008f61011b36600461054a565b4090565b8051439060609067ffffffffffffffff81111561013e5761013e61027f565b60405190808252806020026020018201604052801561017157816020015b606081526020019060019003908161015c5790505b50905060005b83518110156102665760008085838151811061019557610195610563565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff168684815181106101c9576101c9610563565b6020026020010151602001516040516101e29190610579565b6000604051808303816000865af19150503d806000811461021f576040519150601f19603f3d011682016040523d82523d6000602084013e610224565b606091505b50915091508161023357600080fd5b8084848151811061024657610246610563565b60200260200101819052505050808061025e906105ab565b915050610177565b50915091565b60006102796001436105c6565b40905090565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156102b8576102b861027f565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156102e7576102e761027f565b604052919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461031357600080fd5b919050565b6000602080838503121561032b57600080fd5b823567ffffffffffffffff8082111561034357600080fd5b818501915085601f83011261035757600080fd5b8135818111156103695761036961027f565b8060051b6103788582016102be565b918252838101850191858101908984111561039257600080fd5b86860192505b83831015610469578235858111156103b05760008081fd5b86016040601f19828d0381018213156103c95760008081fd5b6103d1610295565b6103dc8b85016102ef565b815282840135898111156103f05760008081fd5b8085019450508d603f8501126104065760008081fd5b8a8401358981111561041a5761041a61027f565b61042a8c84601f840116016102be565b92508083528e848287010111156104415760008081fd5b808486018d85013760009083018c0152808b0191909152845250509186019190860190610398565b9998505050505050505050565b60005b83811015610491578181015183820152602001610479565b838111156104a0576000848401525b50505050565b600060408201848352602060408185015281855180845260608601915060608160051b870101935082870160005b8281101561051a57878603605f19018452815180518088526104fb81888a01898501610476565b601f01601f1916969096018501955092840192908401906001016104d4565b509398975050505050505050565b60006020828403121561053a57600080fd5b610543826102ef565b9392505050565b60006020828403121561055c57600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fd5b6000825161058b818460208701610476565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b60006000198214156105bf576105bf610595565b5060010190565b6000828210156105d8576105d8610595565b50039056fea26469706673582212207cadb1c43ca82bf8d439118b9c8a2b7fa0c39aa5172f8977c95ab0a9dde6fa2a64736f6c63430008090033";

type MulticallConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MulticallConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Multicall__factory extends ContractFactory {
  constructor(...args: MulticallConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Multicall> {
    return super.deploy(overrides || {}) as Promise<Multicall>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Multicall {
    return super.attach(address) as Multicall;
  }
  override connect(signer: Signer): Multicall__factory {
    return super.connect(signer) as Multicall__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MulticallInterface {
    return new utils.Interface(_abi) as MulticallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall {
    return new Contract(address, _abi, signerOrProvider) as Multicall;
  }
}
