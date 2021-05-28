// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "hardhat/console.sol";

contract MyContract  is Ownable ,ReentrancyGuard{
    bool public isInitialized;
    uint256 private value;

 
    // Stores a new value in the contract
    function initialize(uint256 newValue) public {
        require(!isInitialized,"Already initialized");
        value = newValue;
        isInitialized = true;
     
    }
 
    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
} 






