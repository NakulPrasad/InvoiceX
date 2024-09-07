const Input = ({ title, onChange }) => {
  const toCamelCase = (input) => {
    return input
      .toLowerCase()
      .replace(/(?:^\w|[A-Z]|\b\w|\s+|[^a-zA-Z0-9])/g, (match, index) => {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      })
      .replace(/\s+/g, "");
  };
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" htmlFor={title}>
        {title}
      </label>
      <input
        type="text"
        title={toCamelCase(title)}
        onChange={onChange}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
      />
    </div>
  );
};

export default Input;
