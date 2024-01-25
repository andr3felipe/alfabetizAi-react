import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Home, Login as LoginIcon } from "@mui/icons-material";
import { useState } from "react";

import * as S from "./styles";
import { Alert, Snackbar } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { User } from "../Register";

interface FormData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um e-mail válido.")
    .required("Campo obrigatório."),
  password: yup
    .string()
    .min(6, "A senha precisa ter no mínimo 6 carácteres.")
    .max(20, "A senha precisa ter no máximo 20 carácteres.")
    .required("Campo obrigatório."),
});

export const Login = () => {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios
        .get(`http://localhost:3000/usuarios`)
        .then((response) => response.data);

      const user: User = response.find(
        (user: Omit<User, "confirmPassword">) =>
          user.email === data.email.toLowerCase()
      );

      if (
        user &&
        user.email === data.email &&
        user.password === data.password
      ) {
        navigate("/saladeaula");
      } else {
        setSnackbarMessage("Credenciais inválidas");
        setOpenSnackbar(true);
      }
    } catch (error) {
      setSnackbarMessage(
        "Erro ao realizar o login. Por favor, tente novamente."
      );
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <S.Main>
      <S.Container>
        <S.Login>
          <S.BackToHome to="/" backgroundcolor="white" color="blue-dark">
            <Home style={{ fontSize: "24px" }} />
            Home
          </S.BackToHome>

          <S.Title>Fazer login</S.Title>

          <S.RegisterText>
            Não é cadastrado? <NavLink to="/cadastro">Cadastre-se aqui</NavLink>
          </S.RegisterText>

          <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <S.Input
                type="text"
                id="email"
                label="Email"
                variant="outlined"
                {...register("email")}
              />
              {<S.Errors>{errors.email?.message}</S.Errors>}
            </div>

            <div>
              <S.Input
                type="password"
                id="password"
                label="Senha"
                variant="outlined"
                {...register("password")}
              />
              {<S.Errors>{errors.password?.message}</S.Errors>}
            </div>
            <S.SubmitButton type="submit">
              <LoginIcon />
              Entrar
            </S.SubmitButton>
          </S.LoginForm>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="error"
              variant="filled"
              sx={{ width: "100%" }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </S.Login>
      </S.Container>
    </S.Main>
  );
};
