import React from 'react'
import RegistrationPage from '../../../../pages/Registration';
import Container from '../../../components/Container'
import { useNavigate } from 'react-router-dom';
import classes from './Header.module.scss';
import ROUTEPATH from '../../../../const/routesPath';

const Header = () => {
    const navigate = useNavigate();
  return (
    <Container className={classes.root} wrapperClassName={classes.wrapper}>
        <div className={classes.navigate}>
            <button onClick={() => navigate(ROUTEPATH.HOME)}>На главную</button>
        </div>
        <div className={classes.auth}>
            <button onClick={() => navigate(ROUTEPATH.LOGIN)}>Логин</button>
            <button onClick={() => navigate(ROUTEPATH.REGISTRATION)}>Регистрация</button>
        </div>
    </Container>
  )
}

export default Header