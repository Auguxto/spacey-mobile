import styled from 'styled-components/native';

import LogoImage from '../../assets/logo.svg';
import MarsImage from '../../assets/mars.svg';

import RocketIcon from '../../assets/icons/rocket.svg';
import MarsIcon from '../../assets/icons/mars.svg';
import TelescopeIcon from '../../assets/icons/telescope.svg';

export const Container = styled.ScrollView`
  flex: 1;

  background: #030327;
`;

export const Logo = styled(LogoImage)`
  width: 201px;
  height: 41px;

  align-self: center;

  margin: 24px 0;
`;

export const Title = styled.Text`
  font-family: 'Heebo-Regular';
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;

  color: #f5d15f;

  align-self: center;
`;

export const SubTitle = styled.Text`
  font-family: 'Heebo-ExtraBold';
  font-size: 36px;
  line-height: 53px;
  text-align: center;
  letter-spacing: 1px;

  color: #ffffff;

  align-self: center;
`;

export const Description = styled.Text`
  width: 90%;

  font-family: 'Heebo-Regular';
  font-size: 20px;
  line-height: 24px;

  text-align: center;
  letter-spacing: 1px;

  color: #d5d5db;

  opacity: 0.8;

  align-self: center;

  margin-top: 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 52px;

  background: #e85937;
  border-radius: 6px;

  align-self: center;
  align-items: center;
  justify-content: center;

  margin-top: 32px;
`;

export const ButtonText = styled.Text`
  font-family: 'Heebo-Bold';
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;

export const MarsBanner = styled(MarsImage)`
  margin-top: 63px;
  transform: translateX(40px);
`;

export const Qualities = styled.View`
  align-self: center;
  align-items: center;

  margin-top: 90px;
`;

export const Quality = styled.View`
  width: 220px;
  height: 120px;

  align-items: center;

  margin-bottom: 60px;
`;

export const QualityText = styled.Text`
  font-family: 'Heebo-Regular';
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  letter-spacing: 1px;

  color: #ffffff;

  opacity: 0.8;

  margin-top: 10px;
`;
export const Rocket = styled(RocketIcon)``;

export const Mars = styled(MarsIcon)``;

export const Telescope = styled(TelescopeIcon)``;
