import "./styles.css";
import logo from "@/assets/icons/logo-avgust.svg";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineInbox } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="sidebar flex flex-col justify-between fixed z-10 max-w-[250px] w-full h-screen p-4 pt-0 bg-white border-r border-[#EAEAEF] ">
      <div className="top">
        <div className="pb-2 pt-1 px-5 h-[56px] mx-auto border-b border-b-[#EAEAEF] mb-4">
          <img src={logo} alt="" className="h-full mx-auto"/>
        </div>
        <ul className="flex flex-col gap-1">
          <li>
            <NavLink end to="/root" className="link-item ">
              <RxDashboard size={20} />
              <span className="ml-2">Bosh sahifa</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/root/admission" className="link-item ">
              <HiOutlineInbox size={20} />
              <span className="ml-2">Qabul</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/root/guruhlar" className="link-item ">
              <GoPeople size={20} />
              <span className="ml-2">Guruhlar</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <button className="logout-btn flex items-center px-4 py-2 rounded-lg ">
        <IoLogOutOutline size={24} />
        <span className="ml-2">Chiqish</span>
      </button>
    </aside>
  );
};

export default Sidebar;
