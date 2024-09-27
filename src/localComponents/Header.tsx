import { RxHamburgerMenu } from "react-icons/rx";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import AddStudentFormModal from "@/features/AddStudentFormModal";

const Header = () => {
  return (
    <header className="px-4 py-2 flex justify-between items-center left-[250px] right-0 fixed z-10 bg-white border-b border-[#EAEAEF] ">
      <div className="flex items-center gap-4">
        <RxHamburgerMenu size={20} className="cursor-pointer" />
        <h3 className="font-semibold select-none">Bosh sahifa</h3>
      </div>
      <div className="header__right flex items-center gap-2">
        <AddStudentFormModal>
          <Button
            variant="destructive"
            className="rounded-lg mr-10 select-none"
          >
            <PlusCircledIcon className="mr-2 h-4 w-4" /> O'quvchi qo'shish
          </Button>
        </AddStudentFormModal>
        <div className="flex items-center justify-center w-10 h-10 bg-white border border-slate-300 rounded-full">
          <span className="font-medium"> MJ</span>
        </div>
        <p className="font-medium">Murodov Javohir</p>
      </div>
    </header>
  );
};

export default Header;
