import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthWrapper from "../Profile/styles/AuthWrapper";
import { Link } from "react-router-dom";
import actions from "src/modules/auth/authActions";
import selectors from "src/modules/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import ButtonIcon from "../shared/ButtonIcon";
import InputFormItem from "../shared/form/items/InputFormItem";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
const schema = yup.object().shape({
  email: yupFormSchemas.string("Email", {
    required: true,
  }),
  password: yupFormSchemas.string("Mot de passe", {
    required: true,
  }),
  rememberMe: yupFormSchemas.boolean("user.fields.rememberMe"),
});

function SigninPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);
  const externalErrorMessage = useSelector(selectors.selectErrorMessage);
  const [initialValues] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });
  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(actions.doSigninWithEmailAndPassword(email, password));
  };

  return (
    <AuthWrapper>
      <div className='app__signin'>
        <div className='app__login'>
          <div className='login__header'>
            <div className='communiquer__bar'></div>
            <h2>Se&nbsp;Connecter</h2>
            <div className='communiquer__bar'></div>
          </div>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='Login__container'>
                <div className='container__form'>
                  <InputFormItem
                    name='email'
                    label='Email'
                    placeholder='email'
                    autoComplete='email'
                    autoFocus
                    externalErrorMessage={externalErrorMessage}
                  />

                  <InputFormItem
                    label='Password'
                    name='password'
                    placeholder={"Mot de passe"}
                    autoComplete='password'
                    type='password'
                  />
                  <div className='form__oublier'>
                    <div className='oublier'>
                      <Link to='/auth/forgot-password' className='reset'>
                        Mot de passe oublié ?
                      </Link>
                    </div>
                  </div>
                  <button className='form__button' disabled={loading}>
                    <ButtonIcon loading={loading} />
                    Valider
                  </button>

                  <div className='form__link'>
                    <div className='link__account'>Pas encore membre?</div>
                    <div className='__create'>
                      <Link to='/auth/signup' className='link__create'>
                        Créer un compte
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </AuthWrapper>
  );
}

export default SigninPage;
