import {
  School,
  SupervisedUserCircle,
  SmartDisplay,
  LibraryBooks,
  Lock,
  Public,
  CastForEducation,
  Diversity1,
  AccessTime,
} from '@mui/icons-material';

import * as S from './styles';
import NavButton from '../../../components/NavButton';
import kidReading from '../../../assets/kid-reading.webp';
import womanPhone from '../../../assets/woman-phone.png';
import kidsStudyingResized from '../../../assets/kids_studying-resized.png';
import kidReadingMobile from '../../../assets/kid-reading-mobile.png';

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
              backgroundcolor="purple-light"
              color="white"
              to="/cadastro"
            >
              Cadastre-se
            </NavButton>
          </div>
          <div>
            <img
              width={445}
              height={485}
              src={kidReading}
              srcSet={`${kidReadingMobile} 700w, ${kidReading} 800w`}
              sizes="(max-width: 710px) 400w, 800w"
              alt="Criança de cabelos loiros, boné vermelho e camisa verde, lendo livros."
            />
          </div>
        </S.Hero>
      </S.SectionContainer>

      <S.OurCommitment>
        <S.SectionContainer>
          <S.CommitmentContainer>
            <img
              width={400}
              height={400}
              src={kidsStudyingResized}
              alt="Crianças felizes estudando juntas"
            />
            <S.InfoContainer>
              <S.Heading color="red-dark">Nosso Compromisso</S.Heading>
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
              <NavButton backgroundcolor="red-dark" to={'/cadastro'}>
                Saiba mais
              </NavButton>
            </S.InfoContainer>
          </S.CommitmentContainer>

          <S.DataContainer>
            <S.DataTitle>
              <S.Heading color="red-dark">
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

              <S.Data color="red-dark">
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

              <S.Data color="red-dark">
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
            <S.Heading color="green">Facilidade e segurança</S.Heading>
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
              width={442}
              height={435}
              src={womanPhone}
              alt="Mulher de cabelos pretos, blusa azul e calça preta, mexendo em um telefone smarthphone gigante."
            />
          </div>
        </S.SectionContainer>
      </S.FacilityAndSecurity>

      <S.AdvantagesAndBenefits>
        <S.SectionContainer>
          <S.Heading color="red-dark">Vantagens e Benefícios</S.Heading>
          <S.CardsContainer>
            <S.Card color="green">
              <Lock style={iconsSize} />
              <h3>Segurança</h3>
              <S.Paragraph>
                Seus dados estão resguardados conosco, seguindo rigorosos
                padrões e medidas de proteção.
              </S.Paragraph>
            </S.Card>

            <S.Card color="red-dark">
              <Public style={iconsSize} />
              <h3>Acessibilidade</h3>
              <S.Paragraph>
                Explore o universo da AlfabetizAi, independentemente da
                localização geográfica.
              </S.Paragraph>
            </S.Card>

            <S.Card color="purple-light">
              <SmartDisplay style={iconsSize} />
              <h3>Vídeos de Qualidade</h3>
              <S.Paragraph>
                Oferecemos conteúdo de qualidade, tornando sua jornada ainda
                mais significativa.
              </S.Paragraph>
            </S.Card>

            <S.Card color="green">
              <CastForEducation style={iconsSize} />
              <h3>Acompanhamento</h3>
              <S.Paragraph>
                Profissionais competentes de olho na sua trajetória, desde o
                início até a conquista.
              </S.Paragraph>
            </S.Card>

            <S.Card color="red-dark">
              <Diversity1 style={iconsSize} />
              <h3>Comunidade</h3>
              <S.Paragraph>
                Temos uma comunidade engajada e disposta a ajudar, compartilhar
                e colaborar.
              </S.Paragraph>
            </S.Card>

            <S.Card color="purple-light">
              <AccessTime style={iconsSize} />
              <h3>Flexibilidade</h3>
              <S.Paragraph>
                Faça no seu ritmo de aprendizado personalizando conforme suas
                necessidades e conveniência.
              </S.Paragraph>
            </S.Card>
          </S.CardsContainer>
        </S.SectionContainer>
      </S.AdvantagesAndBenefits>

      <S.AdvanceTowardsYourGrowth>
        <S.SectionContainer>
          <S.Heading color="purple-light">
            Avance em direção ao seu crescimento!
          </S.Heading>
          <NavButton to="cadastro" backgroundcolor="purple-light">
            Cadastre-se
          </NavButton>
        </S.SectionContainer>
      </S.AdvanceTowardsYourGrowth>
    </S.Container>
  );
};
