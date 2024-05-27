import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

//This layout add elements to components that come through it (e.g. aadding a sidebar or navabr to other components)
const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="app">
      <Sidebar />
      <div className="app-content">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default CommonLayout;
