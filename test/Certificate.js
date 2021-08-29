const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Certificate", () => {
	let Certificate, contract;

	beforeEach(async () => {
		Certificate = await ethers.getContractFactory(
			"Certificate"
		);
		contract = await Certificate.deploy();
	});

	it("emit greeting event when greet function is called", async () => {
		expect(contract.greet())
			.to.emit(contract, "Greet")
			.withArgs("Hello World!");
	});
});
