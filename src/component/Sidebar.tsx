import { useState } from "react";
import IconButton from "./IconButton";
import SubMenu from "./SubMenu";

const Sidebar = () => {
  const [currentItem, setCurrentItem] = useState("seller");
  const handleClick = (e) => {
    setCurrentItem(e.currentTarget.name);
    // console.log(currentItem);
  };

  return (
    <aside className="flex col-span-2">
      <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-pink-100 dark:bg-gray-900 dark:border-gray-700">
        <button title="logo" type="button">
          <img
            className="w-auto h-6"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </button>
        <IconButton
          title={"seller"}
          icon={
            <path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z" />
          }
          handleClick={handleClick}
          currentItem={currentItem}
        />
        <IconButton
          title={"billing"}
          icon={
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
          }
          handleClick={handleClick}
          currentItem={currentItem}
        />
        <IconButton
          title={"shipping"}
          icon={
            <path d="M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M19.5,9.5L21.46,12H17V9.5M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M20,8H17V4H3C1.89,4 1,4.89 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8Z" />
          }
          handleClick={handleClick}
          currentItem={currentItem}
        />
        <IconButton
          title={"order"}
          icon={
            <path d="M4 13C2.89 13 2 13.89 2 15V19C2 20.11 2.89 21 4 21H8C9.11 21 10 20.11 10 19V15C10 13.89 9.11 13 8 13M8.2 14.5L9.26 15.55L5.27 19.5L2.74 16.95L3.81 15.9L5.28 17.39M4 3C2.89 3 2 3.89 2 5V9C2 10.11 2.89 11 4 11H8C9.11 11 10 10.11 10 9V5C10 3.89 9.11 3 8 3M4 5H8V9H4M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12Z" />
          }
          handleClick={handleClick}
          currentItem={currentItem}
        />
        <IconButton
          title={"invoice"}
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          }
          handleClick={handleClick}
          currentItem={currentItem}
        />
        <IconButton
          title={"items"}
          icon={
            <path d="M3 22V3H21V22L18 20L15 22L12 20L9 22L6 20L3 22M17 9V7H15V9H17M13 9V7H7V9H13M13 11H7V13H13V11M15 13H17V11H15V13Z" />
          }
          handleClick={handleClick}
          currentItem={currentItem}
        />
      </div>

      {/* <SubMenu props={currentItem} /> */}
      <SubMenu title={currentItem} />
    </aside>
  );
};

export default Sidebar;
