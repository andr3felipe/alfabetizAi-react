import { useState } from 'react';
import { Modal } from '@mui/material';

import * as S from './styles';
import logotipo from '../../assets/logotipo.svg';
import kidsStudying from '../../assets/kids_studying.png';
import WomanPhone from '../../assets/woman-phone.png';
import NavButton from '../NavButton';
import HeaderMobile from '../HeaderMobile';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  function toggleMenu() {
    setOpenMenu((state) => !state);
  }

  return (
    <S.Header>
      <S.Container>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="Escolha o tipo de acesso"
        >
          <S.ModalContainer>
            <S.NavLoginContainer>
              <S.CloseModalButton onClick={handleCloseModal}>
                X
              </S.CloseModalButton>
              <S.NavLogin
                to="/login"
                onClick={() => {
                  handleCloseModal();
                  localStorage.setItem('role', 'aluno');
                }}
              >
                <img
                  src={kidsStudying}
                  alt="Crianças felizes estudando juntas"
                />
                <h5>Aluno</h5>
              </S.NavLogin>

              <S.NavLogin
                to="/login"
                onClick={() => {
                  handleCloseModal();
                  localStorage.setItem('role', 'admin');
                }}
              >
                <img
                  src={WomanPhone}
                  alt="Mulher de cabelos pretos, blusa azul e calça preta, mexendo em um telefone smarthphone gigante."
                />
                <h5>Responsável ou Professor</h5>
              </S.NavLogin>
            </S.NavLoginContainer>
          </S.ModalContainer>
        </Modal>

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
              <S.LoginButton
                backgroundcolor="purple-light"
                color="blue-light"
                onClick={() => handleOpenModal()}
              >
                Login
              </S.LoginButton>
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
        <HeaderMobile toggleMenu={toggleMenu} open={openMenu}>
          <S.MobileNavigation>
            <li>
              <NavButton
                backgroundcolor="white"
                color="purple-light"
                to="/"
                onClick={() => setOpenMenu(false)}
              >
                Início
              </NavButton>
            </li>
            <li>
              <NavButton
                backgroundcolor="white"
                color="purple-light"
                to="/saladeaula"
                onClick={() => setOpenMenu(false)}
              >
                Sala de Aula
              </NavButton>
            </li>
            <li>
              <S.LoginButton
                backgroundcolor="white"
                color="purple-light"
                onClick={() => handleOpenModal()}
              >
                Login
              </S.LoginButton>
            </li>
            <li>
              <NavButton
                backgroundcolor="white"
                color="purple-light"
                to="/cadastro"
                onClick={() => setOpenMenu(false)}
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
