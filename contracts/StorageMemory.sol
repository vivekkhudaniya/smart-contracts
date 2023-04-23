// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TestStorage{

    struct MyStruct{
        uint num;
        string foo;
    }

    mapping(address => MyStruct) public myStructs;

    function setVariable(uint[] calldata y) public {
        myStructs[msg.sender] = MyStruct({num : 123,foo :"Vivek"});

        MyStruct storage myStruct = myStructs[msg.sender];

        myStruct.num = 456;
        _internal(y);
        MyStruct memory myStruc= myStructs[msg.sender];
        
        myStruc.num = 123;



    }

    function _internal(uint[] calldata y) private{
        uint x = y[0];
    }

}