import { useFormContext } from "react-hook-form";

export const DynamicControl = ({
  inputType,
  fieldName,
  defaultValue,
  options = [],
  config = {},
  id,
}: any) => {
  const { register } = useFormContext();

  switch (inputType) {
    case "text":
      return (
        <input
          type="text"
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    case "select": {
      return (
        <select
          {...register(fieldName, config)}
          defaultValue={defaultValue}
          name={fieldName}
          id={fieldName}
        >
          {options.map((o, index: string) => (
            <option key={index} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
    }
    case "number":
      return (
        <input
          type="number"
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    case "radio":
      return (
        <input
          id={id}
          type="radio"
          value={defaultValue}
          {...register(fieldName, config)}
        />
      );
    default:
      return <input type="text" />;
  }
};
