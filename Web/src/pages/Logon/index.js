import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import BackLink from '../../components/BackLink';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, LogIn } from './styles';
// f86732d4
export default function Logon() {
  const history = useHistory();
  const [ id, setId ] = useState("");

  async function handleLogin(e){
    e.preventDefault();

    try {
      const responce = await api.post('session', { id })

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', responce.data.Name);

      history.push('/profile')
    } catch (error) {
      alert('Falha no login, Tente novamente!');
    }
  }
  return (
    <Container className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>

          <Input 
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="Sua Id"/>
          <Button type="submit">Entrar</Button>

          <BackLink to="/register">
            <LogIn size={16} color="#e02041"/>
            Não tenho cadastro
          </BackLink>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </Container>
  );
}
