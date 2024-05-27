//DASHBOARD
import { Metadata } from "next";

//Changing meta information of this page to something that better fits its use
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Overview your recipe master account and view other chefs like you.",
};

const Dashboard = () => {
  return (
    <main className="dashboard">
      Dashboard
    </main>
  )
}

export default Dashboard
