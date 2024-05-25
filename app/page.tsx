//LANDING PAGE

import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const tags = ["burger", "pizza", "sandwich", "meatloaf"];

  return (
    <div className="landing-page">
      <div className="navbar">
        <div className="left">
          <Image src="/logo/logo.png" alt="Logo" width={141} height={26} />
          <div className="line-hr"></div>
          <p className="text-14">Unlock the Secrets of Great Taste</p>
        </div>
        <div className="right">
          <p className="text-14">
            Developed by: <span className="highlight">samuel adekunle</span> &{" "}
            <span className="highlight">dada teniola</span>
          </p>
        </div>
      </div>
      <div className="intro-text-box">
        <div className="intro-text">
          <h1>
            Master the Art of Cooking
            <br />
            with <span className="highlight">RecipeMaster</span>
          </h1>
          <p>
            RecipeMaster emphasizes expertise and mastery in the kitchen, making
            it an attractive
            <br />
            choice for users looking to refine their culinary skills and manage
            their recipes efficiently.
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
            <Image src="/showcase/breakfast.jpg" fill={true} alt="showcase" />
          </div>
          <div className="item tags">
            {tags.map((tag, index) => (
              <div className="tag" key={index}>
                <div className="text">
                  <p>{tag}</p>
                  <span>{Math.floor(Math.random() * 10)} mins</span>
                </div>
                <div className="img">
                  <Image src={`/tags/${tag}.jpg`} alt="tag" fill />
                </div>
              </div>
            ))}
          </div>
          <div className="item">
            <Image src="/showcase/chef.jpg" fill={true} alt="showcase" />
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
            <Image src="/showcase/restaurant.jpg" fill={true} alt="showcase" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
