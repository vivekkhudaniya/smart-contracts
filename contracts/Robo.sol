// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RoboPunksNFT is ERC721,Ownable{

    uint256 public minPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    string internal baseTokenURI;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMint;

    constructor() payable ERC721 ("RoboPunksNFT","RB"){
        minPrice = 0.2 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
        //set withdraw wallet address
    }

    function setBaseTokenURI(string calldata _baseTokenURI) external onlyOwner{
        baseTokenURI = _baseTokenURI;
    }

    function tokenURI(uint256 _tokenURI) public view override returns(string memory){
        require(_exists(_tokenURI),'Token does not exits');
        return string(abi.encodePacked(baseTokenURI, Strings.tostring(_tokenURI), ".json"));
    }
}