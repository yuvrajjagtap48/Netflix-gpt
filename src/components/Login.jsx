import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // Validate form data
   const fullName = isSignInFrom ? "" : name.current?.value || "";
   const message = checkValidData(email.current.value, password.current.value, fullName);
   setErrorMessage(message);

   // Sign In form
  };

  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInFrom);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80">
        <h1 className="text-3xl font-bold py-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-900"
          />
        )}
        <input
        ref={email}
          type="text"
          placeholder="Email"
          className="p-2 my-2 w-full bg-gray-900"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-900"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button 
          className="p-2 m-2 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInFrom
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;
