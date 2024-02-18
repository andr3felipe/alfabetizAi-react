import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Home, Login as LoginIcon } from '@mui/icons-material';
import { useEffect, useState } from 'react';

import * as S from './styles';
import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
} from '@mui/material';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import {
  useGetLoggedUserDataQuery,
  useLoginMutation,
} from '../../../services/alfabetizaiApi';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Digite um e-mail válido.')
    .required('Campo obrigatório.'),
  senha: yup
    .string()
    .min(6, 'A senha precisa ter no mínimo 6 carácteres.')
    .max(20, 'A senha precisa ter no máximo 20 carácteres.')
    .required('Campo obrigatório.'),
  role: yup.string().oneOf(['admin', 'aluno'], 'Campo obrigatório.'),
});

export type Login = yup.InferType<typeof loginSchema>;

export const Login = () => {
  const { data: userData, refetch } = useGetLoggedUserDataQuery();
  const [loginMutation] = useLoginMutation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');

  const navigate = useNavigate();
  const role = searchParams.get('role');

  const [selectedRole, setSelectedRole] = useState<string>(
    role === 'admin' || role === 'aluno' ? role : '',
  );

  useEffect(() => {
    const role = searchParams.get('role');

    if ((role && role === 'admin') || role === 'aluno') {
      setSelectedRole(role);
    }
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: Login) => {
    try {
      const { email, senha } = data;
      const token = await loginMutation({ email, senha }).unwrap();
      localStorage.setItem('token', token);
      refetch();

      if (data.role === 'admin') {
        localStorage.setItem('admin', JSON.stringify(userData));
        navigate('/painel-de-controle');
        return;
      }

      if (data.role === 'aluno') {
        localStorage.setItem('aluno', JSON.stringify(userData));
        navigate('/sala-de-aula');
        return;
      }
    } catch (error) {
      console.log(error);
      setSnackbarMessage(
        'Erro ao realizar o login. Por favor, tente novamente.',
      );
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleRoleSelect = (event: SelectChangeEvent) => {
    setSelectedRole(event.target.value);
    setSearchParams({ role: event.target.value });
  };

  return (
    <S.Main>
      <S.Container>
        <S.Login>
          <S.BackToHome to="/" backgroundcolor="white" color="blue-dark">
            <Home style={{ fontSize: '24px' }} />
            Home
          </S.BackToHome>

          <S.Title>Fazer login</S.Title>

          <S.RegisterText>
            Não é cadastrado? <NavLink to="/cadastro">Cadastre-se aqui</NavLink>
          </S.RegisterText>

          <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <S.Input
                autoComplete="email"
                type="text"
                id="email"
                label="Email"
                variant="outlined"
                {...register('email')}
              />
              {<S.Errors>{errors.email?.message}</S.Errors>}
            </div>

            <div>
              <S.Input
                autoComplete="current-password"
                type="password"
                id="senha"
                label="Senha"
                variant="outlined"
                {...register('senha')}
              />
              {<S.Errors>{errors.senha?.message}</S.Errors>}
            </div>

            <FormControl fullWidth>
              <InputLabel id="role-label">Ambiente</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                value={selectedRole}
                label="Ambiente"
                {...register('role')}
                onChange={handleRoleSelect}
              >
                <MenuItem value={'aluno'}>Sala de Aula</MenuItem>
                <MenuItem value={'admin'}>Painel Administrativo</MenuItem>
              </Select>
              <S.Errors>{errors.role?.message}</S.Errors>
            </FormControl>
            <S.SubmitButton type="submit">
              <LoginIcon />
              Entrar
            </S.SubmitButton>
          </S.LoginForm>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="error"
              variant="filled"
              sx={{ width: '100%' }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </S.Login>
      </S.Container>
    </S.Main>
  );
};
