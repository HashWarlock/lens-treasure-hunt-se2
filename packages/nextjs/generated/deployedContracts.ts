const contracts = {
  80001: [
    {
      chainId: "80001",
      name: "polygonMumbai",
      contracts: {
        LensTreasureHunt: {
          address: "0x5462964078808abc96f7F45Ff7f3158B819cD7E3",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "phatAttestor",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_digCost",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "BadAttestor",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "kenLen",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "valueLen",
                  type: "uint256",
                },
              ],
              name: "BadCondLen",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "kenLen",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "valueLen",
                  type: "uint256",
                },
              ],
              name: "BadUpdateLen",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "actionId",
                  type: "uint8",
                },
              ],
              name: "CannotDecodeAction",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "cond",
                  type: "bytes",
                },
                {
                  internalType: "uint32",
                  name: "expected",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "actual",
                  type: "uint32",
                },
              ],
              name: "CondNotMet",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "Internal_toUint32Strict_outOfBounds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "targetIdx",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "tailIdx",
                  type: "uint256",
                },
              ],
              name: "InvalidPopTarget",
              type: "error",
            },
            {
              inputs: [],
              name: "MetaTxSignatureNotMatch",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "actual",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "currentNonce",
                  type: "uint256",
                },
              ],
              name: "NonceTooLow",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "actionId",
                  type: "uint8",
                },
              ],
              name: "UnsupportedAction",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_digCost",
                  type: "uint256",
                },
              ],
              name: "DigCostIncrease",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "err",
                  type: "string",
                },
              ],
              name: "ErrorMintFail",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "err",
                  type: "string",
                },
              ],
              name: "ErrorMissingLensProfile",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "reqId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "pair",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "errno",
                  type: "uint256",
                },
              ],
              name: "ErrorReceived",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "MessageProcessedTo",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "idx",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "MessageQueued",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "MetaTxDecoded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nftId",
                  type: "uint256",
                },
              ],
              name: "MintSucceeded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "reqId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "profileId",
                  type: "string",
                },
              ],
              name: "NewDigRequest",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              name: "NewTreasureRecipient",
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
                  indexed: false,
                  internalType: "uint256",
                  name: "reqId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "pair",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "ResponseReceived",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "previousAdminRole",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "newAdminRole",
                  type: "bytes32",
                },
              ],
              name: "RoleAdminChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "RoleGranted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "RoleRevoked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "contract ITokenERC721",
                  name: "nftAddress",
                  type: "address",
                },
              ],
              name: "SetLensTreasureHuntNftAddress",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "TreasureHuntOfficiallyEnded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "split",
                  type: "uint256",
                },
              ],
              name: "TreasureRecipientsRewarded",
              type: "event",
            },
            {
              inputs: [],
              name: "ATTESTOR_ROLE",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "DEFAULT_ADMIN_ROLE",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "profileId",
                  type: "string",
                },
              ],
              name: "dig",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "digCost",
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
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
              ],
              name: "getRoleAdmin",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "key",
                  type: "bytes",
                },
              ],
              name: "getStorage",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "grantRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "hasRole",
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
              name: "lensTreasureHuntNftIdZerosLeft",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "lensTreasureHuntNfts",
              outputs: [
                {
                  internalType: "contract ITokenERC721",
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
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
              ],
              name: "metaTxGetNonce",
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
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "metaTxPrepare",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "from",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct MetaTxReceiver.ForwardRequest",
                  name: "",
                  type: "tuple",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
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
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
              ],
              name: "metaTxPrepareWithNonce",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "from",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct MetaTxReceiver.ForwardRequest",
                  name: "",
                  type: "tuple",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "from",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct MetaTxReceiver.ForwardRequest",
                  name: "req",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              name: "metaTxRollupU256CondEq",
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
                  components: [
                    {
                      internalType: "address",
                      name: "from",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct MetaTxReceiver.ForwardRequest",
                  name: "req",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              name: "metaTxVerify",
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
              name: "ownersCut",
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
                  internalType: "bytes",
                  name: "key",
                  type: "bytes",
                },
              ],
              name: "queueGetBytes",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "queueGetPrefix",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "key",
                  type: "bytes",
                },
              ],
              name: "queueGetUint",
              outputs: [
                {
                  internalType: "uint32",
                  name: "",
                  type: "uint32",
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
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "renounceRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "requestsByUsers",
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
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "revokeRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "rewardTreasureRecipients",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes[]",
                  name: "condKeys",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "condValues",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "updateKeys",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "updateValues",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "actions",
                  type: "bytes[]",
                },
              ],
              name: "rollupU256CondEq",
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
                  name: "phatAttestor",
                  type: "address",
                },
              ],
              name: "setAttestor",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_digCost",
                  type: "uint256",
                },
              ],
              name: "setDigCost",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
                {
                  internalType: "contract ITokenERC721",
                  name: "_nftAddress",
                  type: "address",
                },
              ],
              name: "setLensTreasureHuntNftAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_lensTreasureHuntNftsURI",
                  type: "string",
                },
              ],
              name: "setLensTreasureHuntNftURI",
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
              inputs: [
                {
                  internalType: "bytes",
                  name: "_bytes",
                  type: "bytes",
                },
              ],
              name: "toUint32Strict",
              outputs: [
                {
                  internalType: "uint32",
                  name: "",
                  type: "uint32",
                },
              ],
              stateMutability: "pure",
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
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "treasureRecipients",
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
              name: "withdrawOwnersCut",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
