import { ChangeEvent } from "react";

/**
 * Input component handles rendering a labeled text input field with dynamic name and value.
 *
 * @param {Object} props - Component props.
 * @param {string} props.title - The title for the input field, used for the label and converting to camel case for the name.
 * @param {function} props.onChange - The event handler for input changes.
 * @param {Record<string, string>} props.formData - The form data containing values for input fields.
 * @returns {JSX.Element} The rendered input field.
 */
const Input = ({
  title,
  onChange,
  formData,
}: {
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: Record<string, string>;
}): JSX.Element => {
  /**
   * Converts a given string to camelCase.
   *
   * @param {string} input - The input string to be converted.
   * @returns {string} The camelCased version of the input string.
   */
  const toCamelCase = (input: string): string => {
    return input
      .toLowerCase()
      .replace(/(?:^\w|[A-Z]|\b\w|\s+|[^a-zA-Z0-9])/g, (match, index) => {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      })
      .replace(/\s+/g, "");
  };

  const camelCaseTitle = toCamelCase(title);

  return (
    <div>
      <label
        className="text-gray-700 dark:text-gray-200"
        htmlFor={camelCaseTitle}
      >
        {title}
      </label>
      <input
        type="text"
        value={formData[camelCaseTitle] || ""}
        name={camelCaseTitle}
        title={camelCaseTitle}
        onChange={onChange}
        required
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
      />
    </div>
  );
};

export default Input;
