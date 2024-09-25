import { Header, Sidebar } from "@/localComponents";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Sidebar />

      <div className="left-[250px] right-0 fixed z-10 bg-yellow-500 ">
        <Header />
      </div>

      <main
        style={{
          marginLeft: "250px",
          width: "calc(100% - 250px)",
          padding: "24px",
          paddingTop: "64px",
          height: "100vh",
          overflowY: "auto",
        }}
        className="  bg-blue-500 "
      >
        <Outlet />
      </main>
    </>
  );
};

export default Root;
