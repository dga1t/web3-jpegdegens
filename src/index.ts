import { ethers } from 'hardhat';

function getEth() {
  // @ts-ignore
  const eth = window.ethereum;
  if (!eth) throw new Error('get metamask!!1');
  return eth;
}

async function hasAccounts() {
  const eth = getEth();
  const accounts = (await eth.request({ method: 'eth_accounts' })) as string[];

  return accounts && accounts.length;
}

async function requestAccounts() {
  const eth = getEth();
  const accounts = (await eth.request({
    method: 'eth_requestAccounts',
  })) as string[];

  return accounts && accounts.length;
}

async function run() {
  if (!(await hasAccounts()) && !(await requestAccounts())) {
    throw new Error('Please let me take your money');
  }

  const hello = new ethers.Contract(
    '0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0',
    ['function hello() public pure returns (string memory)'],
    new ethers.providers.Web3Provider(getEth())
  );

  document.body.innerHTML = await hello.hello();
}

run();