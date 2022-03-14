import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';
import {
  Button,
  ButtonText,
  Container,
  Description,
  Logo,
  Mars,
  MarsBanner,
  Qualities,
  Quality,
  QualityText,
  Rocket,
  SubTitle,
  Telescope,
  Title,
} from './styles';

const Home = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#030327" />
      <Logo />
      <Title>Finalmente é possível!</Title>
      <SubTitle>Sua jornada para Marte começa aqui.</SubTitle>
      <Description>
        A primeira viagem para Marte estará disponivél apartir do dia
        12/03/2028. Inscreva-se em nossa lista de espera.
      </Description>
      <Button>
        <ButtonText>Inscreva-se agora</ButtonText>
      </Button>
      <MarsBanner />
      <Qualities>
        <Quality>
          <Rocket />
          <QualityText>
            Foguetes com a mais alta tecnologia e conforto.
          </QualityText>
        </Quality>
        <Quality>
          <Mars />
          <QualityText>
            Mais de 100 missões consecutivas com sucesso.
          </QualityText>
        </Quality>
        <Quality>
          <Telescope />
          <QualityText>Experiencia única e exclusiva.</QualityText>
        </Quality>
      </Qualities>
    </Container>
  );
};

export default Home;
