import { Input as AntInput } from "antd";

const Input = ({ field, form: { touched, errors }, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];

  return <AntInput {...field} {...props} status={hasError && "error"} />;
};

export default Input;
