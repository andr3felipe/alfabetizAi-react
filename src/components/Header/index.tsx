import { useState } from "react";
import { Modal } from "@mui/material";

import * as S from "./styles";
import logotipo from "../../assets/logotipo.svg";
import kidsStudying from "../../assets/kids_studying.png";
import WomanPhone from "../../assets/woman-phone.png";
import NavButton from "../NavButton";
import HeaderMobile from "../HeaderMobile";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const aluno = localStorage.getItem("aluno");
  const admin = localStorage.getItem("admin");

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
                to="/login?role=aluno"
                onClick={() => {
                  handleCloseModal();
                  setOpenMenu(false);
                }}
              >
                <img
                  src={kidsStudying}
                  alt="Crianças felizes estudando juntas"
                />
                <h5>Aluno</h5>
              </S.NavLogin>

              <S.NavLogin
                to="/login?role=admin"
                onClick={() => {
                  handleCloseModal();
                  setOpenMenu(false);
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

        <S.Link to={"/"} aria-label="Pagina inícial">
          <img
            width="227"
            height="49"
            src={logotipo}
            alt="Identidade visual da AlfabetizAi"
          />
        </S.Link>

        <S.Navigation>
          <ul>
            {pathname !== "/" && (
              <li>
                <NavButton backgroundcolor="red-dark" color="blue-light" to="/">
                  Início
                </NavButton>
              </li>
            )}

            {pathname !== "/sala-de-aula" && admin && (
              <li>
                <NavButton
                  backgroundcolor="red-dark"
                  color="blue-light"
                  to="/sala-de-aula"
                >
                  Sala de aula
                </NavButton>
              </li>
            )}

            {pathname !== "/painel-de-controle" && admin && (
              <li>
                <NavButton
                  backgroundcolor="red-dark"
                  color="blue-light"
                  to="/painel-de-controle"
                >
                  Painel
                </NavButton>
              </li>
            )}

            {pathname !== "/login" && !admin && (
              <li>
                <S.LoginButton
                  backgroundcolor="purple-light"
                  color="blue-light"
                  onClick={() => handleOpenModal()}
                >
                  Login
                </S.LoginButton>
              </li>
            )}
            {pathname !== "/cadastro" && !admin && (
              <li>
                <NavButton
                  backgroundcolor="red-dark"
                  color="blue-light"
                  to="/cadastro"
                >
                  Cadastre-se
                </NavButton>
              </li>
            )}
            {admin && (
              <li>
                <Button
                  backgroundcolor="red-dark"
                  onClick={() => {
                    localStorage.removeItem("admin");
                    navigate("/");
                  }}
                >
                  Sair
                </Button>
              </li>
            )}
          </ul>
        </S.Navigation>
        <HeaderMobile toggleMenu={toggleMenu} open={openMenu}>
          <S.MobileNavigation>
            {pathname !== "/" && (
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
            )}
            {pathname !== "/sala-de-aula" && aluno && (
              <li>
                <NavButton
                  backgroundcolor="white"
                  color="purple-light"
                  to="/sala-de-aula"
                  onClick={() => setOpenMenu(false)}
                >
                  Sala de Aula
                </NavButton>
              </li>
            )}
            {pathname !== "/sala-de-aula" && admin && (
              <li>
                <NavButton
                  backgroundcolor="white"
                  color="purple-light"
                  to="/sala-de-aula"
                  onClick={() => setOpenMenu(false)}
                >
                  Sala de aula
                </NavButton>
              </li>
            )}
            {pathname !== "/painel-de-controle" && admin && (
              <li>
                <NavButton
                  backgroundcolor="white"
                  color="purple-light"
                  to="/painel-de-controle"
                  onClick={() => setOpenMenu(false)}
                >
                  Painel
                </NavButton>
              </li>
            )}
            {pathname !== "/login" && !aluno && !admin && (
              <li>
                <S.LoginButton
                  backgroundcolor="white"
                  color="purple-light"
                  onClick={() => handleOpenModal()}
                >
                  Login
                </S.LoginButton>
              </li>
            )}
            {pathname !== "/cadastro" && !admin && (
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
            )}
            {admin && (
              <li>
                <Button
                  backgroundcolor="white"
                  color="purple-light"
                  onClick={() => {
                    localStorage.removeItem("admin");
                    navigate("/");
                  }}
                >
                  Sair
                </Button>
              </li>
            )}
          </S.MobileNavigation>
        </HeaderMobile>
      </S.Container>
    </S.Header>
  );
};
