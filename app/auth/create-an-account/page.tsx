//CREATE ACCOUNT PAGE
import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import "../auth.scss";

//Changing meta information of this page to something that better fits its use
export const metadata: Metadata = {
  title: "Create an account",
  description: "Join Recipe Master today to save your favorite recipes, create personalized meal plans, and enhance your cooking skills.",
};

const CreateAnAccount = () => {
  return (
    <div className="auth">
      <div className="auth-img">
        <Image
          src="/auth/create.jpg"
          fill
          alt="background image"
          sizes="100vw"
        />
      </div>
      <div className="auth-overlay flex items-center justify-center">
        <div className="auth-form">
          <div className="auth-icon flex justify-center">
            <Link href="/">
              <Image
                src={"/logo/icon.png"}
                alt="Logo"
                width={50}
                height={0}
                priority
              />
            </Link>
          </div>
          <div className="auth-heading">
            <h1>Create an account</h1>
          </div>
          <div className="auth-options">
            <div className="option">
              <div className="option-img">
                <Image src="/auth/google.png" alt="icon" fill sizes="30px" />
              </div>
              <p>Sign up with google</p>
            </div>
            <div className="option">
              <div className="option-img">
                <Image src="/auth/apple.png" alt="icon" fill sizes="30px" />
              </div>
              <p>Sign up with apple</p>
            </div>
          </div>
          <div className="separator">
            <div className="line-hr"></div>
            <p>Or use email</p>
            <div className="line-hr"></div>
          </div>
          <form id="auth-form">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter fullname"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
          </form>
          <button type="submit" form="auth-form">
            Create account
          </button>
          <p>
            Already have an account?
            <Link href="/auth/login-to-your-account">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAnAccount;
