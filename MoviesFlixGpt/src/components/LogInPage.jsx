import { useRef, useState } from "react";
import { validData } from "../utils/Valid";

const LogInPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef(null); // Added ref for name
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const toggle = () => setIsSignIn(!isSignIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = validData(
      name.current ? name.current.value : "", // Pass empty string if not present
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  return (
    <div className="relative min-h-screen p-4">
      <img
        className="absolute inset-0 w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
        alt="Background"
      />

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <img
        className="absolute top-5 left-5 sm:left-10 w-36 sm:w-48 z-10"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      <form
        className="relative mx-auto w-full md:w-2/4 lg:w-1/4 lg:h-3/4 max-w-md p-8 bg-black bg-opacity-75 text-white rounded-lg shadow-lg mt-36"
        style={{ maxWidth: "90vw" }}
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-semibold mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <div className="space-y-4">
          {!isSignIn && (
            <input
              className="w-full p-3 text-white rounded bg-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              ref={name}
              type="text"
              name="name"
              placeholder="Full Name"
            />
          )}
          <input
            className="w-full p-3 text-white rounded bg-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            ref={email}
            type="text"
            name="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="space-y-4 mt-4">
          <input
            className="w-full p-3 text-white rounded bg-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            ref={password}
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
        </div>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        <button
          className="w-full p-3 mt-8 bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          type="submit"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-4 text-center">
          {isSignIn ? "New to Netflix?" : "Already registered?"}{" "}
          <span
            className="text-red-500 hover:underline cursor-pointer"
            onClick={toggle}
          >
            {isSignIn ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LogInPage;
