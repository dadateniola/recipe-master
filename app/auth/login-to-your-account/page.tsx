//LOGIN PAGE

import Image from "next/image";
import Link from "next/link";
import "../auth.scss";

const LoginToYourAccount = () => {
  return (
    <div className="auth">
      <div className="auth-img">
        <Image
          src="/auth/login.jpg"
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
            <h1>Login to your account</h1>
          </div>
          <div className="auth-options">
            <div className="option">
              <div className="option-img">
                <Image src="/auth/google.png" alt="icon" fill sizes="30px" />
              </div>
              <p>Sign in with google</p>
            </div>
            <div className="option">
              <div className="option-img">
                <Image src="/auth/apple.png" alt="icon" fill sizes="30px" />
              </div>
              <p>Sign in with apple</p>
            </div>
          </div>
          <div className="separator">
            <div className="line-hr"></div>
            <p>Or use email</p>
            <div className="line-hr"></div>
          </div>
          <form id="auth-form">
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
            Login
          </button>
          <p>
            Don&apos;t have an account?
            <Link href="/auth/create-an-account">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginToYourAccount;
