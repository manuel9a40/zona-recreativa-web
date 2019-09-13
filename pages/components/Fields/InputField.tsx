import { FieldProps } from "formik";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputField = ({
  field,
  form: _,
  ...props
}: FieldProps & InputProps) => {
  return (
    <div>
      <input style={{marginTop:5, marginBottom:15 , padding:10}} {...field} {...props} />
    </div>
  );
};
