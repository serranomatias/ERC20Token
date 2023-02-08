
const { ethers } = require('hardhat');
const { TASK_COMPILE_SOLIDITY_COMPILE } = require('hardhat/builtin-tasks/task-names');

async function main() {

  /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our NFTee contract.
*/
  const nftContract = await ethers.getContractFactory('SerranoToken');

  // Here we deploy the contract
  const deployedNFTContract = await nftContract.deploy();


  await deployedNFTContract.deployed();
  
  // print the address of the deployed contract
  console.log("NFT Contract Address: " + deployedNFTContract.address);

}

// Call the main function and catch if there is any error

main()
.then(()=> process.exit(0))
.catch((error) => {
  console.log(error);
  process.exit(1);
})