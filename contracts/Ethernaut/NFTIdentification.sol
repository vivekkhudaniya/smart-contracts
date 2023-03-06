// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTIdentication is ERC721,Ownable{

    using Counters for Counters.Counter;

    Counters.Counter private tokenIdCounter;

    mapping(address => bool) _verified;

    constructor() ERC721("IdentityToken","IDT"){
        
    }
}