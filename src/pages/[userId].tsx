import { UsersService } from "@/services";
import styles from "@/styles/pages/[userId].module.css";
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserDashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const signOut = () => {
    sessionStorage.removeItem("accessToken");
    router.push("/");
  };

  useEffect(() => {
    (async () => {
      if (router.query.userId) {
        const user = await UsersService.getUser(router.query.userId);

        setUser(user);
      }
    })();
  }, [router.query.userId]);

  return (
    <main className={styles.main}>
      {user && (
        <>
          <header className={styles.header}>
            <div>
              <img src="/images/logo-square.png" className={styles.logo} /> Olá,{" "}
              {user.name}!
            </div>
            <Button type="text" onClick={signOut}>
              Sair <LogoutOutlined style={{ color: "red" }} />
            </Button>
          </header>
          <object
            data={`https://app.powerbi.com/view?r=${user.reportId}`}
            className={styles.object}
          />
          <div className={styles.notToShare} />
        </>
      )}
    </main>
  );
};

export default UserDashboard;
