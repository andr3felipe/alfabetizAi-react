import * as S from "./styles";
import NavButton from "../../../components/NavButton";
import kidReading from "../../../assets/kid-reading.png";

export const Home = () => {
  return (
    <S.Container>
      <S.SectionContainer>
        <S.Hero>
          <div>
            <h1>
              Transforme seu futuro,
              <br /> aprenda online agora!
            </h1>
            <S.Paragraph>
              Transforme seu futuro com educação de qualidade. Inscreva-se!
            </S.Paragraph>
            <NavButton
              backgroundColor="blue-light"
              color="white"
              to="/cadastro"
            >
              Cadastre-se
            </NavButton>
          </div>
          <div>
            <img
              src={kidReading}
              alt="Criança de cabelos loiros, boné vermelho e camisa verde, lendo livros."
            />
          </div>
        </S.Hero>
      </S.SectionContainer>
    </S.Container>
  );
};
