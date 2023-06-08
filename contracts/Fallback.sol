pragma solidity ^0.8.0;

import "hardhat/console.sol";

interface IFallback {
  function count() external;
}

contract Fallback {
  function foo() internal view {
    console.log("Hello there!1");
  }
  // can only be called from outside the contract
  fallback() external payable {
    foo();
    console.log('fallback');

    revert('You should not be here');
  }
}