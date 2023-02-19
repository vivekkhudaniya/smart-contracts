// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract MyToken is Initializable,ERC20Upgradeable, OwnableUpgradeable {

    function initialize() public initializer{
         __ERC20_init("MyToken", "MTK");
         __Ownable_init();
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
    {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

contract MyTokenV2 is MyToken{
    uint fee;
    
    function version () pure public returns(string memory){
        return "v2";
    }
}

contract MyTokenV3 is MyToken{
    uint fee;
    uint tax;

    function version () pure public returns(string memory){
        return "v2";
    }
}