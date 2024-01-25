import * as S from "./styles";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { Button } from "../../../components/Button";

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "Nome muito curto.")
      .max(80, "Nome muito longo.")
      .required("O nome é obrigatório."),
    surname: yup
      .string()
      .min(3, "Sobrenome muito curto.")
      .max(80, "Sobrenome muito longo.")
      .required("O sobrenome é obrigatório."),
    email: yup.string().email().required("O email é obrigatório."),
    cpf: yup
      .string()
      .required("O cpf é obrigatório.")
      .matches(
        /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/,
        "Formato de CPF inválido."
      ),
    cel: yup
      .string()
      .required("O celular é obritatório.")
      .matches(
        /^\([0-9]{2}\)\s{1}[0-9]{5}-[0-9]{4}$/,
        "Formato de celular inválido."
      ),
    birthDate: yup
      .string()
      .required("A data de nascimento é obrigatória.")
      .matches(
        /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/,
        "Formato de data de nascimento inválida."
      ),
    gender: yup.string().required("Escolha o gênero."),
    password: yup
      .string()
      .min(6, "De 6 a 20 caracteres.")
      .max(20, "De 6 a 20 caracteres.")
      .required("A senha obrigatória."),
    confirmPassword: yup
      .string()
      .min(6, "De 6 a 20 caracteres.")
      .max(20, "De 6 a 20 caracteres.")
      .required("Confirme a senha.")
      .test("As senhas combinam!", "A senhas não combinam.", function (value) {
        return this.parent.password === value;
      }),
  })
  .required();

type User = yup.InferType<typeof schema>;

export const Register = () => {
  const [gender, setGender] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: User) => {
    console.log(data);
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
          <S.Input
            id="firstName"
            label="Nome*"
            type="text"
            {...register("firstName")}
          />

          <S.ErrorsContainer>
            <S.Errors>{errors.firstName?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            id="surname"
            label="Sobrenome*"
            type="text"
            {...register("surname")}
          />

          <S.ErrorsContainer>
            <S.Errors>{errors.surname?.message}</S.Errors>
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
          <S.Input id="cel" label="Celular*" type="text" {...register("cel")} />

          <S.ErrorsContainer>
            <S.HelperText>(99) 99999-9999</S.HelperText>
            <S.Errors>{errors.cel?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            id="birthDate"
            label="Data de Nascimento*"
            type="text"
            {...register("birthDate")}
          />
          <S.ErrorsContainer>
            <S.HelperText>99/99/9999</S.HelperText>
            <S.Errors>{errors.birthDate?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <FormControl fullWidth>
          <InputLabel id="gender-label">Gênero*</InputLabel>
          <Select
            labelId="gender-label"
            id="gender"
            value={gender}
            label="Gênero"
            {...register("gender")}
            onChange={handleChange}
          >
            <MenuItem value={"Homem"}>Homem</MenuItem>
            <MenuItem value={"Mulher"}>Mulher</MenuItem>
            <MenuItem value={"Outros"}>Outros</MenuItem>
            <MenuItem value={"Prefiro não responder"}>
              Prefiro não responder
            </MenuItem>
          </Select>
          <S.Errors>{errors.gender?.message}</S.Errors>
        </FormControl>

        <S.InputContainer>
          <S.Input
            id="password"
            label="Senha*"
            type="password"
            {...register("password")}
          />

          <S.ErrorsContainer>
            <S.HelperText>De 6 a 20 caracteres.</S.HelperText>
            <S.Errors>{errors.password?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            id="confirmPassword"
            label="Confirmar Senha*"
            type="password"
            {...register("confirmPassword")}
          />

          <S.ErrorsContainer>
            <S.Errors>{errors.confirmPassword?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <Button backgroundcolor="green" color="white">
          Confirmar
        </Button>
      </S.Form>
    </S.Container>
  );
};
