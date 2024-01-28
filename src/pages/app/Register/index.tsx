import * as S from "./styles";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import { Button } from "../../../components/Button";
import axios from "axios";

const schema = yup
  .object({
    nome: yup
      .string()
      .min(3, "Nome muito curto.")
      .max(80, "Nome muito longo.")
      .required("O nome é obrigatório."),
    sobrenome: yup
      .string()
      .min(3, "Sobrenome muito curto.")
      .max(80, "Sobrenome muito longo.")
      .required("O sobrenome é obrigatório."),
    email: yup
      .string()
      .email("Formato de email inválido.")
      .required("O email é obrigatório."),
    cpf: yup
      .string()
      .required("O cpf é obrigatório.")
      .matches(
        /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/,
        "Formato de CPF inválido."
      ),
    telefone: yup
      .string()
      .required("O Telefone é obritatório.")
      .matches(
        /^\([0-9]{2}\)\s{1}[0-9]{5}-[0-9]{4}$/,
        "Formato de Telefone inválido."
      ),
    data_nascimento: yup
      .string()
      .required("A data de nascimento é obrigatória.")
      .matches(
        /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/,
        "Formato de data de nascimento inválida."
      ),
    sexo: yup.string().required("Escolha o gênero."),
    senha: yup
      .string()
      .min(6, "De 6 a 20 caracteres.")
      .max(20, "De 6 a 20 caracteres.")
      .required("A senha obrigatória."),
    confirmar_senha: yup
      .string()
      .min(6, "De 6 a 20 caracteres.")
      .max(20, "De 6 a 20 caracteres.")
      .required("Confirme a senha.")
      .test("As senhas combinam!", "A senhas não combinam.", function (value) {
        return this.parent.senha === value;
      }),
  })
  .required();

export type User = yup.InferType<typeof schema>;

type SnackBarMessage = {
  variant: "success" | "error";
  message: string;
};

export const Register = () => {
  const [gender, setGender] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<SnackBarMessage>({
    variant: "error",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
  });

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const onSubmit = async (data: User) => {
    const {
      nome,
      sobrenome,
      email,
      cpf,
      telefone,
      data_nascimento,
      sexo,
      senha,
    } = data;

    try {
      const users = await axios
        .get("http://localhost:3000/usuarios")
        .then((response) => response.data);

      const emailAlreadyExists = users.find(
        (user: Omit<User, "confirmPassword">) =>
          user.email.toLowerCase() === email.toLowerCase()
      );

      const cpfAlreadyExists = users.find(
        (user: Omit<User, "confirmPassword">) => user.cpf === cpf
      );

      if (emailAlreadyExists) {
        setSnackbarMessage({
          variant: "error",
          message: "Email já cadastrado!",
        });
        setOpenSnackbar(true);
        return;
      }

      if (cpfAlreadyExists) {
        setSnackbarMessage({
          variant: "error",
          message: "CPF já cadastrado!",
        });
        setOpenSnackbar(true);
        return;
      }

      await axios
        .post("http://localhost:3000/usuarios", {
          nome,
          sobrenome,
          email,
          cpf,
          telefone,
          data_nascimento,
          sexo,
          senha,
        })
        .then((response) => {
          if (response.status === 201) {
            setSnackbarMessage({
              variant: "success",
              message: "Cadastro concluido!",
            });
            setOpenSnackbar(true);
            reset();
            return;
          } else {
            setSnackbarMessage({
              variant: "error",
              message: "Erro ao se conectar com o servidor.",
            });
            setOpenSnackbar(true);
            return;
          }
        });
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Intro>
          <h1>Cadastre-se</h1>
          <span>Já tem cadastro? </span>
          <NavLink to={"/login"}>Fazer login</NavLink>
        </S.Intro>

        <S.InputContainer>
          <S.Input id="nome" label="Nome*" type="text" {...register("nome")} />

          <S.ErrorsContainer>
            <S.Errors>{errors.nome?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            id="sobrenome"
            label="Sobrenome*"
            type="text"
            {...register("sobrenome")}
          />

          <S.ErrorsContainer>
            <S.Errors>{errors.sobrenome?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            id="email"
            label="Email*"
            type="email"
            {...register("email")}
          />

          <S.ErrorsContainer>
            <S.Errors>{errors.email?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input id="cpf" label="CPF*" type="text" {...register("cpf")} />

          <S.ErrorsContainer>
            <S.HelperText>123.456.789-12</S.HelperText>
            <S.Errors>{errors.cpf?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            id="telefone"
            label="Telefone*"
            type="text"
            {...register("telefone")}
          />

          <S.ErrorsContainer>
            <S.HelperText>(99) 99999-9999</S.HelperText>
            <S.Errors>{errors.telefone?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            id="data_nascimento"
            label="Data de Nascimento*"
            type="text"
            {...register("data_nascimento")}
          />
          <S.ErrorsContainer>
            <S.HelperText>99/99/9999</S.HelperText>
            <S.Errors>{errors.data_nascimento?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <FormControl fullWidth>
          <InputLabel id="sexo-label">Gênero*</InputLabel>
          <Select
            labelId="sexo-label"
            id="sexo"
            value={gender}
            label="Gênero"
            {...register("sexo")}
            onChange={handleChange}
          >
            <MenuItem value={"Homem"}>Homem</MenuItem>
            <MenuItem value={"Mulher"}>Mulher</MenuItem>
            <MenuItem value={"Outros"}>Outros</MenuItem>
            <MenuItem value={"Prefiro não responder"}>
              Prefiro não responder
            </MenuItem>
          </Select>
          <S.Errors>{errors.sexo?.message}</S.Errors>
        </FormControl>

        <S.InputContainer>
          <S.Input
            id="senha"
            label="Senha*"
            type="password"
            {...register("senha")}
          />

          <S.ErrorsContainer>
            <S.HelperText>De 6 a 20 caracteres.</S.HelperText>
            <S.Errors>{errors.senha?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            id="confirmar_senha"
            label="Confirmar Senha*"
            type="password"
            {...register("confirmar_senha")}
          />

          <S.ErrorsContainer>
            <S.Errors>{errors.confirmar_senha?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <Button backgroundcolor="red-dark" color="white">
          Confirmar
        </Button>
      </S.Form>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarMessage.variant}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage.message}
        </Alert>
      </Snackbar>
    </S.Container>
  );
};
