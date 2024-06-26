//LANDING PAGE

import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const tags = ["burger", "pizza", "sandwich", "meatloaf"];

  return (
    <div className="landing-page">
      <div className="navbar">
        <div className="left">
          <Logo />
          <div className="line-vr"></div>
          <p className="text-14">Unlock the Secrets of Great Taste</p>
        </div>
        <div className="right">
          <p className="text-14">
            Developed by:{" "}
            <a href="https://github.com/weird-samuel" target="_blank" className="highlight">
              samuel adekunle
            </a>{" "}
            &{" "}
            <a href="https://github.com/dadateniola" target="_blank" className="highlight">
              dada teniola
            </a>
          </p>
        </div>
      </div>
      <div className="intro-text-box">
        <div className="intro-text">
          <h1>
            <span>Master the Art of Cooking</span>
            <br />
            <span>
              with <span className="highlight">RecipeMaster</span>
            </span>
          </h1>
          <p>
            <span>
              RecipeMaster emphasizes expertise and mastery in the kitchen,
              making it an attractive
            </span>
            <br />
            <span>
              choice for users looking to refine their culinary skills and
              manage their recipes efficiently.
            </span>
          </p>
          <div className="cta">
            <Link href="/auth/create-an-account">Create an account</Link>
            <Link href="/auth/login-to-your-account">
              Login to your account
            </Link>
          </div>
        </div>
      </div>
      <div className="showcase-box">
        <div className="showcase">
          <div className="item">
            <Image
              src="/showcase/breakfast.jpg"
              fill={true}
              alt="showcase"
              sizes="(max-width: 850px) 240px, 20vw"
            />
          </div>
          <div className="item tags">
            {tags.map((tag, index) => (
              <div className="tag" key={index}>
                <div className="text">
                  <p>{tag}</p>
                  <span>{Math.floor(Math.random() * 10)} mins</span>
                </div>
                <div className="img">
                  <Image src={`/tags/${tag}.jpg`} alt="tag" fill sizes="35px" />
                </div>
              </div>
            ))}
          </div>
          <div className="item">
            <Image
              src="/showcase/chef.jpg"
              fill={true}
              alt="showcase"
              sizes="(max-width: 850px) 240px, 20vw"
            />
          </div>
          <div className="item stats">
            <div className="data res">
              <p>1000+</p>
              <span>recipes</span>
            </div>
            <div className="row">
              <div className="data us">
                <p>100+</p>
                <span>users</span>
              </div>
              <div className="data cat">
                <p>48</p>
                <span>categories</span>
              </div>
            </div>
          </div>
          <div className="item">
            <Image
              src="/showcase/restaurant.jpg"
              fill={true}
              alt="showcase"
              sizes="(max-width: 850px) 240px, 20vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
