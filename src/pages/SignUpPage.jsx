import AllPurposeContainer from "../components/AllPurposeContainer";
import AllPurposeLabel from "../components/AllPurposeLabel";
import Logo from "../components/ToDoLogo";
import AllPurposeInput from "../components/allPurposeInput";
import { useState } from "react";
import { Link } from "react-router-dom"

const SignUpPage = () => {
  // Background styling for the signup page
  const signUpBackground = `bg  bg-cover bg-center h-screen w-full flex justify-center items-center`;
  const [buttonHovered, setButtonHoverStatus] = useState(false);
  const [forgotPasswordHovered, setForgotPasswordHoverStatus] = useState(false);

  const buttonStyling = `text-white px-4 py-2 rounded w-full ${
    buttonHovered ? "bg-blue-600" : "bg-blue-700"
  }`;
  const forgotPasswordHoverStyle = `mt-4 text-blue-600 text-center ${
    forgotPasswordHovered ? "" : "underline"
  }`;

  return (
    <div className={signUpBackground}>
      <AllPurposeContainer containerStyling="bg-white p-8 rounded-xl border border-blue-300 shadow-lg max-w-md w-full flex flex-col justify-center  items-center min-h-[400px]">
        <Logo logoStyling="w-30 h-28" />

        <div className="w-full flex flex-col mt-2 mb-2">
          <AllPurposeLabel
            labelStyling="text-black text-3xl font-bold mb-3 text-center"
            value="Sign Up"
          />

          <AllPurposeLabel
            labelStyling="text-black mb-5 text-center"
            value="Please Enter Your Sign-Up Details"
          />
        </div>

        <form className="w-full">
          <AllPurposeLabel labelStyling="text-black" value="User Email" />
          <AllPurposeInput
            inputPlaceHolder="User Email"
            inputType="text"
            inputId="userEmail"
          />

          <AllPurposeLabel labelStyling="text-black" value="Password" />
          <AllPurposeInput
            inputPlaceHolder="Password"
            inputType="password"
            inputId="userPassword"
          />

          <button
            type="submit"
            onMouseEnter={() => setButtonHoverStatus(false)}
            onMouseLeave={() => setButtonHoverStatus(true)}
            className={buttonStyling}
          >
            Sign Up
          </button>
        </form>

        <div className={forgotPasswordHoverStyle}>
          <Link
            to="/login"
            onMouseEnter={() => setForgotPasswordHoverStatus(false)}
            onMouseLeave={() => setForgotPasswordHoverStatus(true)}
          >
            Have an Account Already? Log in
          </Link>
        </div>
        <br />
        <p className="text-sm text-gray-400">
          @Suhud Ayodeji Yekini Innovation
        </p>
      </AllPurposeContainer>
    </div>
  );
};

export default SignUpPage;
