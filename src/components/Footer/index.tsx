import * as S from "./styles";
import logotipo from "../../assets/logotipo.svg";
import {
  Instagram,
  Twitter,
  YouTube,
  Facebook,
  Send,
} from "@mui/icons-material";

export const Footer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Você foi inscrito na newsletter!");
  };
  return (
    <S.Container>
      <div>
        <S.IconsContainer>
          <img src={logotipo} alt="AlfabetizAi" />
          <div>
            <S.Icon
              backgroundColor="yellow"
              href="https://www.instagram.com.br"
              target="_blank"
              aria-label="Link para o nosso Instagram"
            >
              <Instagram />
            </S.Icon>
            <S.Icon
              backgroundColor="orange"
              href="https://www.twitter.com.br/"
              target="_blank"
              aria-label="Link para o nosso Twitter"
            >
              <Twitter />
            </S.Icon>
            <S.Icon
              backgroundColor="purple-dark"
              href="https://www.youtube.com.br/"
              target="_blank"
              aria-label="Link para o nosso YouTube"
            >
              <YouTube />
            </S.Icon>
            <S.Icon
              backgroundColor="red-dark"
              href="https://www.facebook.com.br/"
              target="_blank"
              aria-label="Link para o nosso Facebook"
            >
              <Facebook />
            </S.Icon>
          </div>
        </S.IconsContainer>

        <S.Newsletter>
          <p>Nos acompanhe</p>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Digite seu email" required />
            <button type="submit" title="Inscrever-se na newsletter">
              <Send />
            </button>
          </form>
        </S.Newsletter>
      </div>
      <S.Copyright>
        Copyright &copy; 2024 AlfabetizAi LTDA. Todos os direitos reservados.
      </S.Copyright>
    </S.Container>
  );
};
