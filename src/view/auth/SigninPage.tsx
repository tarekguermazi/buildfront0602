import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Footer from "../Layout/Footer";
import AuthWrapper from "./styles/AuthWrapper";
import { Link } from "react-router-dom";
import actions from "src/modules/auth/authActions";
import selectors from "src/modules/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import ButtonIcon from "../shared/ButtonIcon";
import InputFormItem from "../shared/form/items/InputFormItem";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
const schema = yup.object().shape({
  email: yupFormSchemas.string("user.fields.email", {
    required: true,
  }),
  password: yupFormSchemas.string("user.fields.password", {
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
          <div className='archieve__header'>
            <h2>Se&nbsp;Connecter</h2>
            <div className='communiquer__bar'></div>
          </div>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='Login__container'>
                <div className='container__form'>
                  <InputFormItem
                    name='email'
                    label='email'
                    placeholder='email'
                    autoComplete='email'
                    autoFocus
                    externalErrorMessage={externalErrorMessage}
                  />

                  <InputFormItem
                    label='password'
                    name='password'
                    placeholder={"user.fields.password"}
                    autoComplete='password'
                    type='password'
                  />

                  <div className='form__oublier'>
                    <div className='oublier'>
                      <Link to='/auth/forgot-password' className='reset'>
                        Link Mot de passe oublié ?
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
                        Create an account
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
