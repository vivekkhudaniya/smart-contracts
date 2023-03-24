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
        endsAt = block.timestamp * DURATION ;
    }

    function getPrice() public view returns(uint){
        uint timeElpased = block.timestamp - startAt;
        uint discount = discountRate * timeElpased;
        return startingPrice - discount;
    }

    function buy() external payable{
        require(block.timestamp < endsAt, "auction expired");
        uint price = getPrice();
        require(msg.value >= price,"ETH < price");
        nft.transferFrom(seller, msg.sender, nftId);
        uint refund = msg.value - price;

        if(refund > 0){
            payable(msg.sender).transfer(refund);
        }

        selfdestruct(seller);
    }

    function cancelAuction() public{
        require(msg.sender == seller, "only seller can cancel the auction");
        require(block.timestamp < endsAt, "Auction has expired");

        require(nft.ownerOf(nftId) == address(this), "NFT has already been transferred");
        nft.transferFrom(address(this), seller, nftId);
        selfdestruct(seller);
    }

    function withdrawNFT() public{
        require(msg.sender == seller, "Only the seller can withdraw the NFT");
        require(block.timestamp >= endsAt, "Auction has not expired yet");
        
    }
}