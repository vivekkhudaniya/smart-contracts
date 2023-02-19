/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MyTokenV3 } from "../MyTokenV3";

export class MyTokenV3__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MyTokenV3> {
    return super.deploy(overrides || {}) as Promise<MyTokenV3>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MyTokenV3 {
    return super.attach(address) as MyTokenV3;
  }
  connect(signer: Signer): MyTokenV3__factory {
    return super.connect(signer) as MyTokenV3__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyTokenV3 {
    return new Contract(address, _abi, signerOrProvider) as MyTokenV3;
  }
}

const _abi = [
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    name: "decimals",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611ded806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a257806395d89b411161007157806395d89b4114610296578063a457c2d7146102b4578063a9059cbb146102e4578063dd62ed3e14610314578063f2fde38b146103445761010b565b806370a0823114610234578063715018a6146102645780638129fc1c1461026e5780638da5cb5b146102785761010b565b8063313ce567116100de578063313ce567146101ac57806339509351146101ca57806340c10f19146101fa57806354fd4d50146102165761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b610118610360565b60405161012591906116c2565b60405180910390f35b6101486004803603810190610143919061140d565b6103f2565b604051610155919061168c565b60405180910390f35b610166610415565b6040516101739190611864565b60405180910390f35b610196600480360381019061019191906113be565b61041f565b6040516101a3919061168c565b60405180910390f35b6101b461044e565b6040516101c1919061187f565b60405180910390f35b6101e460048036038101906101df919061140d565b610457565b6040516101f1919061168c565b60405180910390f35b610214600480360381019061020f919061140d565b61048e565b005b61021e6104a4565b60405161022b91906116c2565b60405180910390f35b61024e60048036038101906102499190611359565b6104e1565b60405161025b9190611864565b60405180910390f35b61026c61052a565b005b61027661053e565b005b6102806106f0565b60405161028d9190611671565b60405180910390f35b61029e61071a565b6040516102ab91906116c2565b60405180910390f35b6102ce60048036038101906102c9919061140d565b6107ac565b6040516102db919061168c565b60405180910390f35b6102fe60048036038101906102f9919061140d565b610823565b60405161030b919061168c565b60405180910390f35b61032e60048036038101906103299190611382565b610846565b60405161033b9190611864565b60405180910390f35b61035e60048036038101906103599190611359565b6108cd565b005b60606036805461036f906119a6565b80601f016020809104026020016040519081016040528092919081815260200182805461039b906119a6565b80156103e85780601f106103bd576101008083540402835291602001916103e8565b820191906000526020600020905b8154815290600101906020018083116103cb57829003601f168201915b5050505050905090565b6000806103fd610951565b905061040a818585610959565b600191505092915050565b6000603554905090565b60008061042a610951565b9050610437858285610b24565b610442858585610bb0565b60019150509392505050565b60006012905090565b600080610462610951565b90506104838185856104748589610846565b61047e91906118b6565b610959565b600191505092915050565b610496610e2b565b6104a08282610ea9565b5050565b60606040518060400160405280600281526020017f7632000000000000000000000000000000000000000000000000000000000000815250905090565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610532610e2b565b61053c6000611001565b565b60008060019054906101000a900460ff1615905080801561056f5750600160008054906101000a900460ff1660ff16105b8061059c575061057e306110c7565b15801561059b5750600160008054906101000a900460ff1660ff16145b5b6105db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d290611784565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610618576001600060016101000a81548160ff0219169083151502179055505b61068c6040518060400160405280600781526020017f4d79546f6b656e000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d544b00000000000000000000000000000000000000000000000000000000008152506110ea565b610694611147565b80156106ed5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516106e491906116a7565b60405180910390a15b50565b6000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060378054610729906119a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610755906119a6565b80156107a25780601f10610777576101008083540402835291602001916107a2565b820191906000526020600020905b81548152906001019060200180831161078557829003601f168201915b5050505050905090565b6000806107b7610951565b905060006107c58286610846565b90508381101561080a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080190611824565b60405180910390fd5b6108178286868403610959565b60019250505092915050565b60008061082e610951565b905061083b818585610bb0565b600191505092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6108d5610e2b565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610945576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093c90611704565b60405180910390fd5b61094e81611001565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c0906117e4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3090611724565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b179190611864565b60405180910390a3505050565b6000610b308484610846565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610baa5781811015610b9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9390611744565b60405180910390fd5b610ba98484848403610959565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c17906117c4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c87906116e4565b60405180910390fd5b610c9b8383836111a0565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1990611764565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e129190611864565b60405180910390a3610e258484846111a5565b50505050565b610e33610951565b73ffffffffffffffffffffffffffffffffffffffff16610e516106f0565b73ffffffffffffffffffffffffffffffffffffffff1614610ea7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9e906117a4565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f19576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1090611844565b60405180910390fd5b610f25600083836111a0565b8060356000828254610f3791906118b6565b9250508190555080603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610fe99190611864565b60405180910390a3610ffd600083836111a5565b5050565b6000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611139576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113090611804565b60405180910390fd5b61114382826111aa565b5050565b600060019054906101000a900460ff16611196576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118d90611804565b60405180910390fd5b61119e61122b565b565b505050565b505050565b600060019054906101000a900460ff166111f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f090611804565b60405180910390fd5b816036908051906020019061120f92919061128c565b50806037908051906020019061122692919061128c565b505050565b600060019054906101000a900460ff1661127a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127190611804565b60405180910390fd5b61128a611285610951565b611001565b565b828054611298906119a6565b90600052602060002090601f0160209004810192826112ba5760008555611301565b82601f106112d357805160ff1916838001178555611301565b82800160010185558215611301579182015b828111156113005782518255916020019190600101906112e5565b5b50905061130e9190611312565b5090565b5b8082111561132b576000816000905550600101611313565b5090565b60008135905061133e81611d89565b92915050565b60008135905061135381611da0565b92915050565b60006020828403121561136b57600080fd5b60006113798482850161132f565b91505092915050565b6000806040838503121561139557600080fd5b60006113a38582860161132f565b92505060206113b48582860161132f565b9150509250929050565b6000806000606084860312156113d357600080fd5b60006113e18682870161132f565b93505060206113f28682870161132f565b925050604061140386828701611344565b9150509250925092565b6000806040838503121561142057600080fd5b600061142e8582860161132f565b925050602061143f85828601611344565b9150509250929050565b6114528161190c565b82525050565b6114618161191e565b82525050565b61147081611961565b82525050565b60006114818261189a565b61148b81856118a5565b935061149b818560208601611973565b6114a481611a36565b840191505092915050565b60006114bc6023836118a5565b91506114c782611a47565b604082019050919050565b60006114df6026836118a5565b91506114ea82611a96565b604082019050919050565b60006115026022836118a5565b915061150d82611ae5565b604082019050919050565b6000611525601d836118a5565b915061153082611b34565b602082019050919050565b60006115486026836118a5565b915061155382611b5d565b604082019050919050565b600061156b602e836118a5565b915061157682611bac565b604082019050919050565b600061158e6020836118a5565b915061159982611bfb565b602082019050919050565b60006115b16025836118a5565b91506115bc82611c24565b604082019050919050565b60006115d46024836118a5565b91506115df82611c73565b604082019050919050565b60006115f7602b836118a5565b915061160282611cc2565b604082019050919050565b600061161a6025836118a5565b915061162582611d11565b604082019050919050565b600061163d601f836118a5565b915061164882611d60565b602082019050919050565b61165c8161194a565b82525050565b61166b81611954565b82525050565b60006020820190506116866000830184611449565b92915050565b60006020820190506116a16000830184611458565b92915050565b60006020820190506116bc6000830184611467565b92915050565b600060208201905081810360008301526116dc8184611476565b905092915050565b600060208201905081810360008301526116fd816114af565b9050919050565b6000602082019050818103600083015261171d816114d2565b9050919050565b6000602082019050818103600083015261173d816114f5565b9050919050565b6000602082019050818103600083015261175d81611518565b9050919050565b6000602082019050818103600083015261177d8161153b565b9050919050565b6000602082019050818103600083015261179d8161155e565b9050919050565b600060208201905081810360008301526117bd81611581565b9050919050565b600060208201905081810360008301526117dd816115a4565b9050919050565b600060208201905081810360008301526117fd816115c7565b9050919050565b6000602082019050818103600083015261181d816115ea565b9050919050565b6000602082019050818103600083015261183d8161160d565b9050919050565b6000602082019050818103600083015261185d81611630565b9050919050565b60006020820190506118796000830184611653565b92915050565b60006020820190506118946000830184611662565b92915050565b600081519050919050565b600082825260208201905092915050565b60006118c18261194a565b91506118cc8361194a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611901576119006119d8565b5b828201905092915050565b60006119178261192a565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061196c82611954565b9050919050565b60005b83811015611991578082015181840152602081019050611976565b838111156119a0576000848401525b50505050565b600060028204905060018216806119be57607f821691505b602082108114156119d2576119d1611a07565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611d928161190c565b8114611d9d57600080fd5b50565b611da98161194a565b8114611db457600080fd5b5056fea2646970667358221220728a3d6e1694e399388737b64ab8f0e1c2dbe363bf6b93f9c8a0fcc22891aa0864736f6c63430008030033";
