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
    mapping(address => uint256) public walletsMint;

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

    function withdraw () external onlyOwner{
        (bool success,) = withdrawWallet.call{value: address(this).balance}("");
        require(success , "withdraw failed");
    }

    function mint(uint256 _quantity) public payable{
        require(msg.value == _quantity * minPrice, "wrong mint price");
        require(totalSupply + _quantity <= maxSupply, "sold out");
        require(walletsMint[msg.sender] + _quantity <= maxPerWallet, "exceed max wallet");

        for(uint i = 0; i < _quantity ; i++){
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
        
    }

}