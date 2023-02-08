const assert = require('chai').assert;
const { ethers, use } = require('hardhat');


describe('SerranoToken Contract', () => {
  let nftContract;
  let deployedNFTContract;

  before(async () => {
    nftContract = await ethers.getContractFactory('SerranoToken');
    deployedNFTContract = await nftContract.deploy();
    await deployedNFTContract.deployed();
  });

  it('should deploy the contract', () => {
    assert.isOk(deployedNFTContract.address);
  });

  it('should have a valid contract address', async () => {
    const address = await deployedNFTContract.address;
    assert.isString(address);
    assert.isAbove(address.length, 0);
  });
});
