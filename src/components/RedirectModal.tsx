function RedirectModal({
  handleEmailRedirect,
  setShowModal,
}: {
  handleEmailRedirect: (provider: string) => void;
  setShowModal: (show: boolean) => void;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
        Select Email Provider
      </h2>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => {
            handleEmailRedirect("gmail");
            setShowModal(false);
          }}
          className="px-8 py-4 bg-(--c4) backdrop-blur-md border border-(--c4) flex items-center justify-center gap-2 text-gray-700 rounded-full font-semibold cursor-pointer"
        >
          <svg
            width="30px"
            height="20px"
            viewBox="0 -31.5 256 256"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M58.1818182,192.049515 L58.1818182,93.1404244 L27.5066233,65.0770089 L0,49.5040608 L0,174.59497 C0,184.253152 7.82545455,192.049515 17.4545455,192.049515 L58.1818182,192.049515 Z"
                fill="#4285F4"
              ></path>
              <path
                d="M197.818182,192.049515 L238.545455,192.049515 C248.203636,192.049515 256,184.224061 256,174.59497 L256,49.5040608 L224.844415,67.3422767 L197.818182,93.1404244 L197.818182,192.049515 Z"
                fill="#34A853"
              ></path>
              <polygon
                fill="#EA4335"
                points="58.1818182 93.1404244 54.0077618 54.4932827 58.1818182 17.5040608 128 69.8676972 197.818182 17.5040608 202.487488 52.4960089 197.818182 93.1404244 128 145.504061"
              ></polygon>
              <path
                d="M197.818182,17.5040608 L197.818182,93.1404244 L256,49.5040608 L256,26.2313335 C256,4.64587897 231.36,-7.65957557 214.109091,5.28587897 L197.818182,17.5040608 Z"
                fill="#FBBC04"
              ></path>
              <path
                d="M0,49.5040608 L26.7588051,69.5731646 L58.1818182,93.1404244 L58.1818182,17.5040608 L41.8909091,5.28587897 C24.6109091,-7.65957557 0,4.64587897 0,26.2313335 L0,49.5040608 Z"
                fill="#C5221F"
              ></path>
            </g>
          </svg>
          Gmail
        </button>

        <button
          onClick={() => {
            handleEmailRedirect("outlook");
            setShowModal(false);
          }}
          className="px-8 py-4 bg-(--c2) backdrop-blur-md border border-(--c4) flex items-center justify-center gap-2 text-white rounded-full font-semibold cursor-pointer"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>file_type_outlook</title>
            <path d="M19.484,7.937v5.477L21.4,14.619a.489.489,0,0,0,.21,0l8.238-5.554a1.174,1.174,0,0,0-.959-1.128Z" />
            <path d="M19.484,15.457l1.747,1.2a.522.522,0,0,0,.543,0c-.3.181,8.073-5.378,8.073-5.378V21.345a1.408,1.408,0,0,1-1.49,1.555H19.483V15.457Z" />
            <path d="M10.44,12.932a1.609,1.609,0,0,0-1.42.838,4.131,4.131,0,0,0-.526,2.218A4.05,4.05,0,0,0,9.02,18.2a1.6,1.6,0,0,0,2.771.022,4.014,4.014,0,0,0,.515-2.2,4.369,4.369,0,0,0-.5-2.281A1.536,1.536,0,0,0,10.44,12.932Z" />
            <path d="M2.153,5.155V26.582L18.453,30V2ZM13.061,19.491a3.231,3.231,0,0,1-2.7,1.361,3.19,3.19,0,0,1-2.64-1.318A5.459,5.459,0,0,1,6.706,16.1a5.868,5.868,0,0,1,1.036-3.616A3.267,3.267,0,0,1,10.486,11.1a3.116,3.116,0,0,1,2.61,1.321,5.639,5.639,0,0,1,1,3.484A5.763,5.763,0,0,1,13.061,19.491Z" />
          </svg>
          Outlook
        </button>

        <button
          onClick={() => setShowModal(false)}
          className="px-8 py-4 bg-(--c4) backdrop-blur-md border border-(--c4) hover:bg-(--c3) transition-all text-gray-700 rounded-full font-semibold cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default RedirectModal;
