import { Header, Sidebar } from "@/localComponents";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Sidebar />

      <Header />

      <main
        style={{
          marginLeft: "250px",
          width: "calc(100% - 250px)",
          padding: "24px",
          paddingTop: "64px",
          height: "100vh",
          overflowY: "auto",
        }}
        className=" bg-[#F5F7F9]  "
      >
        <Outlet />
      </main>
    </>
  );
};

export default Root;
