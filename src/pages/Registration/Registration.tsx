import React, { useCallback } from 'react'
import Container from '../../utils/components/Container';
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import classes from './Registration.module.scss';

type RegistrationForm = {
  login: string;
  email: string;
  password: string;
  repeatPass: string;
}

const RegistrationSchema = Yup.object().shape({
  login: Yup.string().min(2, '2-16 chars').max(16, '2-16 chars').required('Обязательное поле'),
  password: Yup.string().min(2, '2-16 chars').max(16, '2-16 chars').required('Надо'),
  repeatPass: Yup.string().min(2, '2-16 chars').max(16, '2-16 chars').oneOf([Yup.ref('password'), null], 'Не совпадают вообще').required('Надо'),
  email: Yup.string().email('invalid Email!').required('Обязалово!')
}, [['password', 'repeatPass']])

const Registration = () => {
    const initialValues: RegistrationForm = {
      login: '',
      password: '',
      repeatPass: '',
      email: ''
    }

  return (
    <Container className={classes.root}>
        <Formik 
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
          validationSchema={RegistrationSchema}
          >
            {({errors, touched}) => (
              <Form className={classes.regForm}>
              <h1>Регистрация</h1>
              <p>Логин:</p>
              <Field 
                type="text" 
                name='login'
              />
            {errors.login && touched.login ? (
              <span>{errors.login}</span>
            ) : null}
              <p>Пароль:</p>
              <Field 
                type="password" 
                name='password'
                />   
            {errors.password && touched.password ? (
              <span>{errors.password}</span>
            ) : null}
              <p>Повторите пароль:</p>
              <Field 
                type="password" 
                name='repeatPass'
              />
            {errors.repeatPass && touched.repeatPass ? (
              <span>{errors.repeatPass}</span>
            ) : null}
              <p>E-Mail:</p>
              <Field 
                type="text" 
                name='email'
              />
            {errors.email && touched.email ? (
              <span>{errors.email}</span>
            ) : null}
              <button type='submit'>Зарегистрироваться</button>
          </Form>
        )}
        </Formik>
    </Container>
  )
}

export default Registration