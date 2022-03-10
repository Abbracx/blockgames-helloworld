// SPDX-License-Identifier: MIT

/**
Create a “Hello World” contract with a constructor, 
at least two functions, and a state variable, 
and Deploy to a testnet (Rinkeby).
 */

pragma solidity ^0.8.0;

contract HelloWorld {

    string holder = '';

    // Emitted when the stored value changes
    event HolderChanged(string _holder);

    constructor(){}

    function setHolder(string memory _holder) public {
        holder = _holder;
        emit HolderChanged(holder);
    }

    function getHolder() view public returns(string memory){
        return holder;
    }
}