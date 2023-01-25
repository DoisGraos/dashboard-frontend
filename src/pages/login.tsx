import { Field, Form, FormikContext, useFormik } from "formik";
import styles from "@/styles/pages/login.module.css";
import { Button } from "antd";
import { Input, Password } from "@/components";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { schemaLogin } from "@/schemas";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schemaLogin,
    onSubmit: async (data) => {
      console.log("submit: ", data);
    },
  });

  return (
    <main className={styles.main}>
      <FormikContext.Provider value={formik}>
        <Form className={styles.form}>
          <img src="/images/logo.png" className={styles.logo} />
          <Field
            label="Usuário"
            name="username"
            placeholder="Usuário"
            prefix={<UserOutlined />}
            component={Input}
          />
          <Field
            label="Senha"
            name="password"
            placeholder="Senha"
            prefix={<LockOutlined />}
            component={Password}
          />
          <Button type="primary" htmlType="submit">
            Entrar
          </Button>
        </Form>
      </FormikContext.Provider>
    </main>
  );
};

export default Login;
