import { useState } from "react";
import Button from "../components/Button";
import PageHeading from "../components/PageHeading";
const { create } = require("ipfs-http-client");

function Issue() {
  const [fileBuffer, setFileBuffer] = useState();

  // Capture the file and send to IPFS
  function captureFile(e) {
    let file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      setFileBuffer(Buffer(reader.result));
    };
  }

  async function issueCertificate(e) {
    e.preventDefault();
    const client = create("https://ipfs.infura.io:5001");
    const ipfsHash = await client.add(fileBuffer);
    console.log(ipfsHash);
  }

  return (
    <section className="text-gray-600 body-font relative ">
      <PageHeading title="Issue Certificate" />
      <div className="container px-5 py-10 mx-auto w-2/3 mt-4 rounded-md shadow border-2 border-fuchsia-600">
        <div className="flex flex-col text-center w-full mb-4">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">
            Please select a Certificate to upload
          </p>
        </div>
        <div className="mx-auto">
          <form onSubmit={issueCertificate}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="file"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Certificate (.jpeg, .jpeg,.png allowed)
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={captureFile}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-4 w-full text-center">
                <Button label="Issue Certificate" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Issue;
