import { CONTRACT_ADDR } from "../constants";
import { getContract, getSelectedAddress } from "./common";
import CertificateArtifact from "../abis/Certificate.json";

function getCertificateContract() {
  return getContract(CONTRACT_ADDR, CertificateArtifact);
}

async function mintCertificate(recipientAddress, name, ipfsHash) {
  console.log("Attempting to mint", { recipientAddress, name, ipfsHash });
  const contract = getCertificateContract();
  console.log(contract);
  const response = await contract.mintAndTransfer(
    recipientAddress,
    name,
    ipfsHash
  );
  console.log(response);
}

async function isIssuer() {
  const contract = getCertificateContract();
  const issuerAddress = await contract.getIssuer();
  const currentAddress = await getSelectedAddress();
  return issuerAddress === currentAddress;
}

export { isIssuer, mintCertificate };