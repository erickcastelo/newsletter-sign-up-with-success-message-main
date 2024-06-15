import "./Input.scss";

export type InputProps = {
  name: string;
  label: string;
  placeholder?: string;
};
export const Input = ({ name, label, placeholder }: InputProps) => {
  return (
    <div className="input-content">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}

      <input
        type="text"
        id={name}
        className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder ?? ""}
        required
      />
    </div>
  );
};
