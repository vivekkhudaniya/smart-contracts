// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "./ERC4907";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract RentableNFT is ERC4907,Ownable{

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    uint256 baseAmount = 2000000000000;

    struct RentableItems{
        bool isRentable;
        uint256 amountPerMinute;
    }

    mapping(uint256 => RentableNFT) public rentables;

    constructor(string memory _name,string memory _symbol) ERC4907 (_name,_symbol){

    }

    function safeMint(address to) public onlyOwner{
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to,tokenId);
        rentables[tokenId] = RentableItems(false,baseAmount);
    }

    function setRentFee(uint _tokenId, bool _amountPerMinute) public {
        require(_isApprovedOrOwner(msg.sender,_tokenId),"caller is not token owner or approved");
        rentables[_tokenId].amountPerMinute = _amountPerMinute;
    }

    function setRentFee(uint _tokenId, bool _isRentable) public {
        require(_isApprovedOrOwner(msg.sender,_tokenId),"caller is not token owner or approved");
        rentables[_tokenId].isRentable = _isRentable;
    }

    function rent(uint _tokenId, uint64 _expires) public payable{
        uint amount = rentables[_tokenId].amountPerMinute * _expires;
        require(msg.value == amount,"Insufficient funds");
        require(rentables[_tokenId].isRentable,"not disabled by the owner");
        require(userOf[_tokenId] == address(0),"already minted");

        payable(OwnerOf(_tokenId)).transfer(amount);

        UserInfo storage info = _users[_tokenId];

        info.user = msg.sender;
        info._expires = block.timestamp + expires * 60;
        
    }
}