import React from 'react'
import Container from '../../utils/components/Container';
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import classes from './Login.module.scss';

type LoginForm = {
  login: string;
  password: string;
}
const LoginSchema = Yup.object().shape({
  login: Yup.string().min(2, '2-16 chars').max(16, '2-16 chars').required('Обязательное поле'),
  password: Yup.string().min(2, '2-16 chars').max(16, '2-16 chars').required('Обязательное поле')
})

const Login = () => {
  const initialValues: LoginForm = {
    login: '',
    password: ''
  }
  return (
    <Container className={classes.root}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={LoginSchema}
      >
        {({errors, touched}) => (
          <Form className={classes.loginForm}>
          <h1>Вход</h1>
          <p>Логин:</p>
          <Field
            type="text"
            name='login'
            />
            {errors.login && touched.login ? (
              <span>{errors.login}</span>
            ): null}
          <p>Пароль:</p>
          <Field
            type="password"
            name='password'
            />
            {errors.password && touched.password ? (
              <span>{errors.password}</span>
            ) : null}
          <button type='submit'>Войти</button>
        </Form>
      )}
      </Formik>
    </Container>
  )
}

export default Login