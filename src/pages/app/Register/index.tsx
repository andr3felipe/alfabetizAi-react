import * as S from './styles';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
} from '@mui/material';
import { useState } from 'react';
import { Button } from '../../../components/Button';
import axios from 'axios';

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, 'Nome muito curto.')
      .max(80, 'Nome muito longo.')
      .required('O nome é obrigatório.'),
    surName: yup
      .string()
      .min(3, 'Sobrenome muito curto.')
      .max(80, 'Sobrenome muito longo.')
      .required('O sobrenome é obrigatório.'),
    email: yup
      .string()
      .email('Formato de email inválido.')
      .required('O email é obrigatório.'),
    cpf: yup
      .string()
      .required('O cpf é obrigatório.')
      .matches(
        /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/,
        'Formato de CPF inválido.',
      ),
    cel: yup
      .string()
      .required('O celular é obritatório.')
      .matches(
        /^\([0-9]{2}\)\s{1}[0-9]{5}-[0-9]{4}$/,
        'Formato de celular inválido.',
      ),
    birthDate: yup
      .string()
      .required('A data de nascimento é obrigatória.')
      .matches(
        /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/,
        'Formato de data de nascimento inválida.',
      ),
    gender: yup.string().required('Escolha o gênero.'),
    password: yup
      .string()
      .min(6, 'De 6 a 20 caracteres.')
      .max(20, 'De 6 a 20 caracteres.')
      .required('A senha obrigatória.'),
    confirmPassword: yup
      .string()
      .min(6, 'De 6 a 20 caracteres.')
      .max(20, 'De 6 a 20 caracteres.')
      .required('Confirme a senha.')
      .test('As senhas combinam!', 'A senhas não combinam.', function (value) {
        return this.parent.password === value;
      }),
  })
  .required();

export type User = yup.InferType<typeof schema>;

type SnackBarMessage = {
  variant: 'success' | 'error';
  message: string;
};

export const Register = () => {
  const [gender, setGender] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<SnackBarMessage>({
    variant: 'error',
    message: '',
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
    const { firstName, surName, email, cpf, cel, birthDate, gender, password } =
      data;

    try {
      const users = await axios
        .get('http://localhost:3000/usuarios')
        .then((response) => response.data);

      const emailAlreadyExists = users.find(
        (user: Omit<User, 'confirmPassword'>) =>
          user.email.toLowerCase() === email.toLowerCase(),
      );

      const cpfAlreadyExists = users.find(
        (user: Omit<User, 'confirmPassword'>) => user.cpf === cpf,
      );

      if (emailAlreadyExists) {
        setSnackbarMessage({
          variant: 'error',
          message: 'Email já cadastrado!',
        });
        setOpenSnackbar(true);
        return;
      }

      if (cpfAlreadyExists) {
        setSnackbarMessage({
          variant: 'error',
          message: 'CPF já cadastrado!',
        });
        setOpenSnackbar(true);
        return;
      }

      await axios
        .post('http://localhost:3000/usuarios', {
          firstName,
          surName,
          email,
          cpf,
          cel,
          birthDate,
          gender,
          password,
        })
        .then((response) => {
          if (response.status === 201) {
            setSnackbarMessage({
              variant: 'success',
              message: 'Cadastro concluido!',
            });
            setOpenSnackbar(true);
            reset();
            return;
          } else {
            setSnackbarMessage({
              variant: 'error',
              message: 'Erro ao se conectar com o servidor.',
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
          <NavLink to={'/login'}>Fazer login</NavLink>
        </S.Intro>

        <S.InputContainer>
          <S.Input
            id="firstName"
            label="Nome*"
            type="text"
            {...register('firstName')}
          />

          <S.ErrorsContainer>
            <S.Errors>{errors.firstName?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            id="surName"
            label="Sobrenome*"
            type="text"
            {...register('surName')}
          />

          <S.ErrorsContainer>
            <S.Errors>{errors.surName?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            id="email"
            label="Email*"
            type="email"
            {...register('email')}
          />

          <S.ErrorsContainer>
            <S.Errors>{errors.email?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input id="cpf" label="CPF*" type="text" {...register('cpf')} />

          <S.ErrorsContainer>
            <S.HelperText>123.456.789-12</S.HelperText>
            <S.Errors>{errors.cpf?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input id="cel" label="Celular*" type="text" {...register('cel')} />

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
            {...register('birthDate')}
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
            {...register('gender')}
            onChange={handleChange}
          >
            <MenuItem value={'Homem'}>Homem</MenuItem>
            <MenuItem value={'Mulher'}>Mulher</MenuItem>
            <MenuItem value={'Outros'}>Outros</MenuItem>
            <MenuItem value={'Prefiro não responder'}>
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
            {...register('password')}
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
            {...register('confirmPassword')}
          />

          <S.ErrorsContainer>
            <S.Errors>{errors.confirmPassword?.message}</S.Errors>
          </S.ErrorsContainer>
        </S.InputContainer>

        <Button backgroundcolor="red-dark" color="white">
          Confirmar
        </Button>
      </S.Form>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarMessage.variant}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage.message}
        </Alert>
      </Snackbar>
    </S.Container>
  );
};
