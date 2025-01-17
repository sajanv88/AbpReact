const Loader = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center  z-50">
      <svg
        viewBox="0 0 38 38"
        className="animate-spin h-20 w-20 stroke-current text-black-600 mr-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loader;