import { FieldProps } from "formik";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export const SelectField = ({
  field,
  form: _,
  ...props
}: FieldProps & InputProps) => {
  return (
    <div>
        <select style={{marginTop:20, marginBottom:10 , padding:10}} {...field} {...props}/>
    </div>
  );
};