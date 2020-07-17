import React from 'react';
import { Image } from 'react-native';

import { Conteiner, Title } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Conteiner>
      <Image source={logoImg} />

      <Title>Faça seu Logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('passou');
        }}
      >
        Entrar
      </Button>
    </Conteiner>
  );
};

export default SignIn;
