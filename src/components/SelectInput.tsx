// import { ErrorMessage, useField } from "formik";
import React from "react";
import Select from "react-select";
// import { StateManagerProps } from "react-select";

interface IProps {
  placeHolder?:string
  label?: string;
  name: string;
  isMulti?: boolean;
  containerClassName?: string | undefined;
  options: Array<{ value: string; label: string }> | any;
  addOnChange?: (value: any) => void;
}

export const SelectInput: React.FC<IProps> = (props) => {
  const { label, options, isMulti, name, containerClassName, addOnChange, placeHolder } =
    props;
  // const [field, meta, { setValue }] = useField(name);

  return (
    <div className={`mb-[10px] ${containerClassName}`}>
      {label && <p className="mb-2">{label}</p>}

      <Select
        // {...field}
        {...props}
        placeholder={placeHolder}
        isMulti={isMulti}
        options={options}
        name={name}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: '#44d15734',
            primary: '#b6b5b5',
          },
        })}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            height: "45px",
            backgroundColor: '#E9E9E9',
            borderWidth: 0,
            borderColor: state.isFocused ? '#E9E9E9' : 'red',
          }),
        }}
        className="h-[45px] rounded-lg"
        onChange={(val: any) => {
          // setValue(val);
          if (addOnChange) addOnChange(val);
        }}
      />


      {/* <ErrorMessage className="text-red-500"  name={name} component="div" /> */}
    </div>
  );
};
