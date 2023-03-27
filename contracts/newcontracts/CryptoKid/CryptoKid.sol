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

    function addKid(address payable _walletAddress, string memory _firstName, string memory _lastName) 
    public onlyOwner validAddress(_walletAddress){

        // compute the hash of the _firstName and _lastName strings
        bytes32 firstNameHash = keccak256(abi.encodePacked(_firstName));
        bytes32 lastNameHash = keccak256(abi.encodePacked(_lastName));
        // compute the hash of an empty string
        bytes32 emptyStringHash = keccak256(abi.encodePacked(""));
        // check if the hashes are equal to the empty string hash
        require(firstNameHash != emptyStringHash, "first name cannot be empty");
        require(lastNameHash != emptyStringHash, "last name cannot be empty");

        Kid memory kid;
        kid.walletAddress = _walletAddress;
        kid.firstName = _firstName;
        kid.lastName = _lastName;
        kid.releasedDate = block.timestamp + (16 * (356 * 1 days));
        
        kids.push(kid);
    }

     function getIndex(address _walletAddress) private view returns(uint) {
        for(uint i; i < kids.length; i++){
            if(kids[i].walletAddress == _walletAddress){
                return i;
            }
        }
        return 409;
    }

}