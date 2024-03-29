import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
  const Fallback = await ethers.getContractFactory('Fallback');
  const fallback = await Fallback.deploy();
  await fallback.deployed();
  
  return fallback;
}

async function fallback(fallback) {
  const f = await ethers.getContractAt('IFallback', fallback.address);
  await f.count();   // count does not exist on fallback - failing on purpose here
}

deploy().then(fallback);