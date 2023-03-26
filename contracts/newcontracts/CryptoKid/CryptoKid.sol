// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CryptoKid{

    error OnlyOwner();
    error ValidAddress();

    address public owner;

      struct Kid{
        address payable walletAddress;
        string firstName;
        string lastName;
        uint releasedDate;
        uint amount;
        bool withdrawn;
    }
    Kid[] public kids;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner(){
        if(msg.sender != owner){
            revert OnlyOwner();
        }
        _;
    }

    modifier validAddress(address _walletAddress){
        if(_walletAddress == address(0)){
            revert ValidAddress();
        }
        _;
    }
}