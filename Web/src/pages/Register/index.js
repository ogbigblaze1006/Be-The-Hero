import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import BackLink from '../../components/BackLink';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, ArrowLeft } from './styles';

export default function Register() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logo}/>
          
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casis da sua ONG.</p>
          
          <BackLink to="/">
            <ArrowLeft size={16} color="#e02041"/>
            Não tenho cadastro
          </BackLink>
        </section>

        <form>
          <Input placeholder="Nome da ONG"/>
          <Input type="email" placeholder="E-mail"/>
          <Input placeholder="whatsapp"/>

          <div className="input-group">
            <Input placeholder="cidade"/>
            <Input placeholder="UF" style={{ width: 80 }}/>
          </div>

          <Button type="submit">Cadstrar</Button>
        </form>
      </Content>
    </Container>
  );
}