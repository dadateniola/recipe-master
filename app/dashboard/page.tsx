//DASHBOARD
import { Metadata } from "next";
import Image from "next/image";
import { users } from "../data";

import UserCard from "@/components/UserCard/UserCard";

//Changing meta information of this page to something that better fits its use
export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Overview your recipe master account and view other chefs like you.",
};

const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="dash-intro">
        <div className="dash-intro-img">
          <Image src="/showcase/dash.jpg" alt="intro image" fill sizes="70vw" />
        </div>
        <div className="item stats">
          <div className="heading">
            <p>Your stats</p>
          </div>
          <div className="data res">
            <p>18</p>
            <span>recipes</span>
          </div>
          <div className="row">
            <div className="data cat">
              <p>2</p>
              <span>categories</span>
            </div>
            <div className="data other">
              <span>Other users</span>
              <Image
                src="/icons/arrow.png"
                alt="arrow"
                width={60}
                height={60}
                sizes="50px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="line-hr"></div>
      <div className="grid">
        {users.map((user, index) => (
          <UserCard
            key={index}
            pfp={user.pfp}
            name={user.name}
            recipes={user.recipes}
            showcase={user.showcase}
          />
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
