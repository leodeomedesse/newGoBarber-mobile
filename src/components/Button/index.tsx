import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Conteiner, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Conteiner {...rest}>
    <ButtonText>{children}</ButtonText>
  </Conteiner>
);

export default Button;
