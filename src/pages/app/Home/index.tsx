import * as S from "./styles";
import NavButton from "../../../components/NavButton";
import kidReading from "../../../assets/kid-reading.png";
import womanPhone from "../../../assets/woman-phone.png";

export const Home = () => {
  return (
    <S.Container>
      <S.SectionContainer>
        <S.Hero>
          <div>
            <h1>Transforme seu futuro, aprenda online agora!</h1>
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

      <S.FacilityAndSecurity>
        <S.SectionContainer>
          <div>
            <S.Heading color="blue-light">Facilidade e segurança</S.Heading>
            <S.Paragraph>
              Descubra como tornamos a alfabetização digital uma jornada simples
              e segura para todos. Nossa plataforma foi projetada com o usuário
              em mente, oferecendo uma experiência intuitiva e amigável,
              garantindo que cada passo na sua jornada educacional seja
              acessível e descomplicado. Com interfaces claras e instruções
              passo a passo, você se sentirá confiante enquanto desenvolve suas
              habilidades digitais. Além disso, priorizamos a segurança dos
              nossos alunos, implementando medidas robustas para proteger dados
              pessoais e criar um ambiente de aprendizagem confiável.
            </S.Paragraph>
          </div>
          <div>
            <img
              src={womanPhone}
              alt="Mulher de cabelos pretos, blusa azul e calça preta, mexendo em um telefone smarthphone gigante."
            />
          </div>
        </S.SectionContainer>
      </S.FacilityAndSecurity>
    </S.Container>
  );
};
