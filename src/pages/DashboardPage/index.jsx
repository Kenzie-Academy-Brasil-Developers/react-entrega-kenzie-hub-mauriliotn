import { HeaderDash } from "../../components/Header/HeaderDash";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";

export const DashBoardPage = ({ userLogout }) => {
  const user = localStorage.getItem("@USERID");
  const [userLogin, setUserLogin] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { data } = await api.get(`/users/${user}`);
        setUserLogin(data)
      } catch (error) {
        console.log(error);
        navigate("/")
      }
    };

    loadUser();
  }, []);
  

  return (
    <>
      <main>
        <HeaderDash userLogout={userLogout} />
        <div className={styles.userFlex}>
          <div className="container">
            <h1 className="title one">Olá, {userLogin?.name}</h1>
            <p className="headline">{userLogin?.course_module}</p>
          </div>
        </div>
        <div className="container">
          <div className={styles.contentFlex}>
            <h1 className="title one">
              Que pena! Estamos em desenvolvimento :(
            </h1>
            <p className="headline">
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
