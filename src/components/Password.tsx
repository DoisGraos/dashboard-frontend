import { Input } from "antd";

const Password = ({ field, form: { touched, errors }, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];

  return <Input.Password {...field} {...props} status={hasError && "error"} />;
};

export default Password;
