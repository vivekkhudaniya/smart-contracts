const { expect } = require('chai');
const { ethers } = require('hardhat');



describe('Counter', () => {
  let token 
  let token1
  let token2

  beforeEach(async () => {
    // Load contract
    const Token = await ethers.getContractFactory('MyToken')
    const Token1 = await ethers.getContractFactory('MyTokenV2')
    const Token2 = await ethers.getContractFactory('MyTokenV3')
    // Deploy contract
    token = await upgrades.deployProxy(Token,{kins:'uups'});

    token1 = await upgrades.upgradeProxy(token, Token1);
    console.log("BoxV2 at:", token1);

    token2 = await upgrades.upgradeProxy(token, Token2);
    console.log("BoxV2 at:", token2);


  })

  describe('Deployment', () => {

    it('sets the name', async () => {
      expect(await token.name()).to.equal('MyToken')
    })


    it('return version', async () => {
        expect(await token1.version()).to.equal('v2')
    })
    
    it('return version', async () => {
        expect(await token2.version()).to.equal('v2')
    })
    

  })



})
