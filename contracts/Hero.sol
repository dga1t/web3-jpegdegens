pragma solidity ^0.8.0;

contract Hero {
  enum Class { Mage, Healer, Barbarian }

  function createHero(Class class) public payable {
    require(msg.value >= 0.5 ether, "omg, send more money!!1");
  }
}