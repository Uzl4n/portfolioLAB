import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  

    return(
      <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>

    );

}

export default App;



/* 


return (

    <div className="container">
        <h1>Login</h1>
        <Formik initialValues={{}}>
          <Form className="login-form">

            <div className="login-form-group">
              <Field name="email" className="form-fied" placeHolder="Email"/>
              <ErrorMessage component="span" name="email" className="form-error"/>
            </div>

            <div className="form-group">
            <Field name="password" className="form-field" placeholder="Senha" />
            <ErrorMessage component="span" name="password" className="form-error"/>
             </div>

            <button className="button" type="submit">Login</button>

          </Form>
        </Formik>
      </div>

*/