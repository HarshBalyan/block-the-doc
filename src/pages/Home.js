import Button from "../components/Button";
import { requestAccount } from "../utils/common";

function Home() {
  async function signIn() {
    await requestAccount();
    console.log("Connected");
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Mint your certificates as NFT
            <br className="hidden lg:inline-block" />
            on Ethereum Blockchain
          </h1>
          <ul className="list-disc">
            <li>
              Trustless issuance of certificates as NFTs to the recipient.
            </li>
            <li>
              The underlying certificate is attached to an NFT will be stored on
              a distributed file system(e.g. IPFS) This will remove the need for
              issuer or recipient to secure an accessible copy of the
              certificate
            </li>
            <li>
              Document can't be forged as docs are stored against a
              cryptographic hash which change on any attempt made to change the
              doc
            </li>
          </ul>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 text-center">
          <img
            className="inline-block object-cover object-center rounded"
            alt="hero"
            src="/sign-in-metamask.png"
          />
          <div className="flex justify-center">
            <Button label="Sign In to Metamask " handleClick={signIn} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;