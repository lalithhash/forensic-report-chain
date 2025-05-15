
export const CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_caseId",
        "type": "string"
      }
    ],
    "name": "AcceptCase",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_caseId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_ipfsHash",
        "type": "string"
      }
    ],
    "name": "addCase",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_cfslAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_ipfsHash",
        "type": "string"
      }
    ],
    "name": "addCFSL",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_reportId",
        "type": "string"
      }
    ],
    "name": "addDigitalSignature",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_fslAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_ipfsHash",
        "type": "string"
      }
    ],
    "name": "addFSL",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_member",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_ipfsHash",
        "type": "string"
      }
    ],
    "name": "addFSLMember",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_policeStation",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_ipfsHash",
        "type": "string"
      }
    ],
    "name": "addPoliceStation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export const CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000"; // Replace with actual contract address

export const INDIAN_GOVT_ADDRESS = "0x0000000000000000000000000000000000000001"; // Replace with actual address

export const USER_ROLES = {
  INDIAN_GOVT: "INDIAN_GOVT",
  CFSL: "CFSL",
  FSL: "FSL",
  POLICE_STATION: "POLICE_STATION",
  FSL_MEMBER: "FSL_MEMBER",
  NONE: "NONE",
};

export const EVENT_NAMES = {
  CFSL_ADDED: "CFSLAdded",
  FSL_ADDED: "FSLAdded",
  FSL_MEMBER_ADDED: "FslMemberAdded",
  POLICE_STATION_ADDED: "PoliceStationAdded",
  CASE_ADDED: "CaseAdded",
  CASE_ACCEPTED_BY_FSL: "CaseAcceptedByFSL",
  TEST_REPORT_INITIALIZED: "TestReportInitialized",
  DIGITAL_SIGNATURE_ADDED: "DigitalSignatureAdded",
};
