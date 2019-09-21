import React from "react";
import style from "./formControls.module.sass";

const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={style.form_control + " " + (hasError ? style.error : "")}>
      {props.children}
      {hasError && <div className={style.error_message}>{meta.error}</div>}
    </div>
  );
};

export const Textarea = props => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = props => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

// export const Textarea = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//
//     return (
//         <div className={style.form_control + " " + (hasError ? style.error : "")}>
//             <textarea {...input} {...props} />
//             {hasError && <div className={style.error_message}>{meta.error}</div>}
//         </div>
//     );
// };
//
// export const Input = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//
//     return (
//         <div className={style.form_control + " " + (hasError ? style.error : "")}>
//             <input {...input} {...props} />
//             {hasError && <div className={style.error_message}>{meta.error}</div>}
//         </div>
//     );
// };
