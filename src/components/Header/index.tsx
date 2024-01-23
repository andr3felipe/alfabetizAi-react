import * as S from './styles';
import logotipo from '../../assets/logotipo.svg';
import NavButton from '../NavButton';
import HeaderMobile from '../HeaderMobile';

export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <img src={logotipo} alt="Identidade visual da AlfabetizAi" />
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
              <NavButton to="/cadastro">Login</NavButton>
            </li>
            <li>
              <NavButton to="/cadastro">Cadastre-se</NavButton>
            </li>
          </ul>
        </S.Navigation>
        <HeaderMobile>
          <ul>
            <li>
              <NavButton to="/">Início</NavButton>
            </li>
            <li>
              <NavButton to="/saladeaula">Sala de Aula</NavButton>
            </li>
            <li>
              <NavButton to="/cadastro">Login</NavButton>
            </li>
            <li>
              <NavButton to="/cadastro">Cadastre-se</NavButton>
            </li>
          </ul>
        </HeaderMobile>
      </S.Container>
    </S.Header>
  );
};
