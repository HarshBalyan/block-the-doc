import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeading from "../components/PageHeading";

function Profile() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    setDocuments([...Array(10).keys()]);
  }, []);

  return (
    <section className="text-gray-600 body-font relative ">
      <PageHeading title="My Profile" />
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-wrap -m-4">
          {documents.map((name) => (
            <div className="p-4 md:w-1/3" key={name}>
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    John Doe
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Issued On: 28th August, 2021
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      to="/view-certificate"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      View Certificate
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profile;
