// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DAO{

    address public owner;
    mapping(address => bool) public members;
    uint public totalShares;
    mapping(address => uint) public shares;
    uint VotingPeriod = 7 days;


    struct Proposal {
        address proposer;
        string description;
        uint votesFor;
        uint votesAgainst;
        bool executed;
        bool isApproved;
        mapping(address => bool) hasVoted;
    }

    mapping(uint => Proposal) proposals;
    uint proposalId;

    modifier onlyOwner(){
        require(msg.sender == owner,"only the owner can call this function");
        _;
    }

    modifier onlyMember(){
        require(members[msg.sender],"only the owner can call this function");
        _;
    }

    constructor(){
        owner = msg.sender;
        members[msg.sender] = true;
        totalShares = 100;
        shares[msg.sender] = 100;
    }

    function addMembers(address _member) public onlyOwner{
        require(!members[_member],"Member already exists");
        members[_member] = true;
        totalShares++;
        shares[_member] = 1;
    }

    function removeMember(address _member) public onlyOwner{
        require(members[_member],"Member doesn't exist");
        require(_member != owner,"cannot remove owner");
        members[_member] = false;
        totalShares--;
        shares[_member] = 0;

    }

    function buyShares(uint _amount) public payable onlyMember{
        require(_amount <= (totalShares - shares[msg.sender]),"Not enough shares available");

        uint cost = _amount * 1 ether;
        require(msg.value == cost,"Incorrect value sent");

        shares[msg.sender] += _amount;
        totalShares += _amount;
    }

    function sellShares(uint _amount) public onlyMember{
        require(shares[msg.sender] >= _amount,"Not enough shares owned");
        shares[msg.sender] -= _amount;
        totalShares -= _amount;

        payable(msg.sender).transfer(_amount * 1 ether);    
    }

    function submitProposal(string memory _description) public onlyMember{
        proposalId++;
        Proposal storage proposal = proposals[proposalId];
        proposal.proposer = msg.sender;
        proposal.description = _description;
        proposal.votesFor = 0;
        proposal.votesAgainst = 0;
        proposal.executed = false;
        proposal.isApproved = false;
        proposal.hasVoted[msg.sender] = false;
    }

    function vote(uint _proposalId,bool _inFavor) public onlyMember{
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed,"proposal already executed");
        require(!proposal.hasVoted[msg.sender],"Already voted on proposal");
        if(_inFavor){
            proposal.votesFor += shares[msg.sender];
        }
        else{
            proposal.votesAgainst += shares[msg.sender];
        }

        proposal.hasVoted[msg.sender] = true;
    }

    function executeProposal(uint _proposalId) public onlyMember{
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed,"Proposal already executed");
        require(block.timestamp > VotingPeriod,"Voting period has not expired");

        if(proposal.votesFor > proposal.votesAgainst){
            proposal.executed = true;
            proposal.isApproved = true;
        }else if(proposal.votesAgainst > proposal.votesFor){
            proposal.executed = true;
            proposal.isApproved = false;
        }
    }
}
