import {
  School,
  SupervisedUserCircle,
  SmartDisplay,
  LibraryBooks,
} from '@mui/icons-material';

import * as S from './styles';
import NavButton from '../../../components/NavButton';
import kidReading from '../../../assets/kid-reading.png';
import womanPhone from '../../../assets/woman-phone.png';
import kidsStudying from '../../../assets/kids_studying.svg';

export const Home = () => {
  const iconsSize = {
    fontSize: '48px',
  };

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

      <S.OurCommitment>
        <S.SectionContainer>
          <S.CommitmentContainer>
            <img src={kidsStudying} alt="Crianças felizes estudando juntas" />
            <S.InfoContainer>
              <S.Heading color="yellow">Nosso Compromisso</S.Heading>
              <S.Paragraph>
                Nossos cursos online inovadores fazem parte de um sistema seguro
                e simples de ser utilizado, para facilitar seu uso e otimizar
                seu aprendizado. Ao se juntar a nós, você faz parte de uma
                comunidade comprometida em promover a educação acessível e de
                qualidade. Cada aula é um passo em direção a um futuro onde a
                Alfabetizai e seus alunos moldam positivamente o cenário
                educacional global. Juntos, estamos construindo um caminho
                sólido para a realização do ODS 4.6.
              </S.Paragraph>
              <NavButton backgroundColor="red-dark" to={'/cadastro'}>
                Saiba mais
              </NavButton>
            </S.InfoContainer>
          </S.CommitmentContainer>

          <S.DataContainer>
            <S.DataTitle>
              <S.Heading color="yellow">
                <span>Ajude esta causa</span> faça um mundo melhor
              </S.Heading>
              <S.Paragraph>
                Tornando a alfabetização acessível para todos!
              </S.Paragraph>
            </S.DataTitle>

            <S.DataInfo>
              <S.Data color="purple-light">
                <School style={iconsSize} />
                <div>
                  <S.Quantity>+2000</S.Quantity>
                  <S.Name>Alunos</S.Name>
                </div>
              </S.Data>

              <S.Data color="yellow">
                <SupervisedUserCircle style={{ ...iconsSize }} />
                <div>
                  <S.Quantity>+50</S.Quantity>
                  <S.Name>Professores</S.Name>
                </div>
              </S.Data>

              <S.Data color="purple-light">
                <SmartDisplay style={iconsSize} />
                <div>
                  <S.Quantity>+500</S.Quantity>
                  <S.Name>Aulas</S.Name>
                </div>
              </S.Data>

              <S.Data color="yellow">
                <LibraryBooks style={iconsSize} />
                <div>
                  <S.Quantity>+200</S.Quantity>
                  <S.Name>Exercícios</S.Name>
                </div>
              </S.Data>
            </S.DataInfo>
          </S.DataContainer>
        </S.SectionContainer>
      </S.OurCommitment>

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

      <S.AdvanceTowardsYourGrowth>
        <S.SectionContainer>
          <S.Heading color="yellow">
            Avance em direção ao seu crescimento!
          </S.Heading>

          <NavButton to="cadastro" backgroundColor="red-dark">
            Cadastre-se
          </NavButton>
        </S.SectionContainer>
      </S.AdvanceTowardsYourGrowth>
    </S.Container>
  );
};
