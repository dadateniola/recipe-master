import CommonLayout from "../CommonLayout";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    //REMOVED THE BELOW, if they apply to a majority of components add it to the "CommonLayout" component
    // <section className="max-h-screen bg-zinc-100 flex">
    //   <main className="flex-1 min-h-dvh bg-white flex flex-col">
    //     {/* <AdminHeader /> */}
    //     <section className="flex-1 max-h-screen overflow-y-scroll scrollbar-hide">
    //       {children}
    //     </section>
    //   </main>
    //   {/* <Toaster /> */}
    // </section>

    <CommonLayout>{children}</CommonLayout>
  );
};

export default Dashboardlayout;
