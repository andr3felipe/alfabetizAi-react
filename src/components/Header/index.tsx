import * as S from './styles';
import logotipo from '../../assets/logotipo.svg';
import NavButton from '../NavButton';
import HeaderMobile from '../HeaderMobile';
import { useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  function toggleMenu() {
    setOpen((state) => !state);
  }

  return (
    <S.Header>
      <S.Container>
        <S.Link to={'/'} aria-label="Pagina inícial">
          <img
            width="227"
            height="49"
            src={logotipo}
            alt="Identidade visual da AlfabetizAi"
          />
        </S.Link>
        <S.Navigation>
          <ul>
            <li>
              <S.Link to="/">Início</S.Link>
            </li>
            <li>
              <S.Link to="/saladeaula">Sala de Aula</S.Link>
            </li>
          </ul>
        </S.Navigation>

        <S.Navigation>
          <ul>
            <li>
              <NavButton
                backgroundcolor="purple-light"
                color="blue-light"
                to="/login"
              >
                Login
              </NavButton>
            </li>
            <li>
              <NavButton
                backgroundcolor="red-dark"
                color="blue-light"
                to="/cadastro"
              >
                Cadastre-se
              </NavButton>
            </li>
          </ul>
        </S.Navigation>
        <HeaderMobile toggleMenu={toggleMenu} open={open}>
          <S.MobileNavigation>
            <li>
              <NavButton
                backgroundcolor="white"
                color="purple-light"
                to="/"
                onClick={() => setOpen(false)}
              >
                Início
              </NavButton>
            </li>
            <li>
              <NavButton
                backgroundcolor="white"
                color="purple-light"
                to="/saladeaula"
                onClick={() => setOpen(false)}
              >
                Sala de Aula
              </NavButton>
            </li>
            <li>
              <NavButton
                backgroundcolor="white"
                color="purple-light"
                to="/login"
                onClick={() => setOpen(false)}
              >
                Login
              </NavButton>
            </li>
            <li>
              <NavButton
                backgroundcolor="white"
                color="purple-light"
                to="/cadastro"
                onClick={() => setOpen(false)}
              >
                Cadastre-se
              </NavButton>
            </li>
          </S.MobileNavigation>
        </HeaderMobile>
      </S.Container>
    </S.Header>
  );
};
