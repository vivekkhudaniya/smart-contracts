// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract MyContract2  is Ownable ,ReentrancyGuard{
    uint256 private value;
    uint256 public age;
 
  
 
    // Stores a new value in the contract
    function initialize(uint256 newValue,uint256 _age) public {
        value = newValue;
        age = _age;
       
    }
    
    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
    
    // Increments the stored value by 1
    function increment() public {
        value = value + 1;
       
    }
   // Decrement the stored age by 1
    function returnDecreasedAge() public {
        age = age - 1;
       
    }
} 






