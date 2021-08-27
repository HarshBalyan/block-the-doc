const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT Document Contract", () => {
	let NFTDocumentContract, contract;

	beforeEach(async () => {
		NFTDocumentContract = await ethers.getContractFactory(
			"NFTDocumentContract"
		);
		contract = await NFTDocumentContract.deploy();
	});

	it("emit greeting event when greet function is called", async () => {
		expect(contract.greet())
			.to.emit(contract, "Greet")
			.withArgs("Hello World!");
	});
});
