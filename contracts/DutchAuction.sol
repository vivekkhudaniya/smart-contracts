// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface IERC721{

    function transferFrom(
        address _from,
        address _to,
        uint _ndtId
    ) external;

}

contract DutchAuction {

    address payable public immutable seller;
    IERC721 public immutable nft;
    uint public immutable discountRate;
    uint public immutable startingPrice;
    uint public immutable nftId;
    uint public immutable startAt;
    uint public immutable endsAt;
    uint public immutable DURATION = 7 days;

    constructor(IERC721 _nft, uint _nftId, uint _startingPrice, uint _discountRate){
        seller = payable(msg.sender);
        nft = _nft;
        startingPrice = _startingPrice;
        discountRate = _discountRate;
        require(_startingPrice > _discountRate * DURATION,"starting price < discount");

        nftId = _nftId;
        startAt = block.timestamp;
        
    }

}