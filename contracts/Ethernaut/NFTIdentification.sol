// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTIdentication is ERC721,Ownable{

    using Counters for Counters.Counter;

    Counters.Counter private tokenIdCounter;

    mapping(address => bool) _verified;

    constructor() ERC721("IdentityToken","IDT"){
    }

    function verify (address _account) external onlyOwner{
        _verified[_account] = true;
    }

    function revoke (address _account) external onlyOwner{
        _verified[_account] = false;
    }

    function checkVerification(address _account) external view returns(bool){
        return _verified[_account];
    }

    function safeMint(address to) public onlyOwner{
        tokenIdCounter.increment();
        uint256 tokenId = tokenIdCounter.current();
        require(!_exists(tokenId));
        _safeMint(to, tokenId);
    }

    function _beforeTokenTransfer(address from,address to,uint256 tokenId,uint256 batchSize)internal override(ERC721){

        super._beforeTokenTransfer(from,to,tokenId,batchSize);

        if(from != address(0) && to != address(0)){

            require(_verified[from]," 'from' is not a verified address");
            require(_verified[to]," 'to' is not a verified address");
        }
        else if(from == address(0) && to != address(0)){
            require(_verified[to]," 'to' is not a verified address");
        }

    }
}