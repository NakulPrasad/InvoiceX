const IconButton = ({ title, icon, handleClick, currentItem }) => {
  // console.log(title, currentItem);

  return (
    <button
      title={title}
      type="button"
      name={title}
      onClick={handleClick}
      className={`p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100 ${
        title === currentItem &&
        "text-pink-500 bg-pink-100 rounded-lg dark:text-pink-400 dark:bg-gray-800"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        {icon}
      </svg>
    </button>
  );
};

export default IconButton;
