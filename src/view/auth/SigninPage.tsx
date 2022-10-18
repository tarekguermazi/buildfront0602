import React, { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthWrapper from "./styles/AuthWrapper";
import { Link } from "react-router-dom";
import actions from "src/modules/auth/authActions";
import selectors from "src/modules/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import ButtonIcon from "../shared/ButtonIcon";
import InputFormItem from "../shared/form/items/InputFormItem";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { i18n } from "src/i18n";

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n("user.fields.email"), {
    required: true,
  }),
  password: yupFormSchemas.string(i18n("user.fields.password"), {
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
  const clearErrorMessage = () => {
    dispatch(actions.doClearErrorMessage());
  };
  useEffect(() => {
    clearErrorMessage();
    form.register({ name: "rememberMe" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = () => {
    if (externalErrorMessage) {
      clearErrorMessage();
    }
  };
  return (
    <AuthWrapper>
      <div className='app__signin'>
        <div className='app__login'>
          <div className='login__header'>
            <div className='communiquer__bar'></div>
            <h2>{i18n("auth.signin")}</h2>
            <div className='communiquer__bar'></div>
          </div>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='Login__container'>
                <div className='container__form'>
                  <InputFormItem
                    name='email'
                    label={i18n("user.fields.email")}
                    placeholder={i18n("user.fields.email")}
                    autoComplete='email'
                    autoFocus
                    onChange={handleChange}
                    externalErrorMessage={externalErrorMessage}
                  />
                  <InputFormItem
                    label={i18n("user.fields.password")}
                    name='password'
                    placeholder={i18n("user.fields.password")}
                    autoComplete='password'
                    type='password'
                  />
                  <div className='form__oublier'>
                    <div className='oublier'>
                      <Link to='/auth/forgot-password' className='reset'>
                        {i18n("auth.forgotPassword")}
                      </Link>
                    </div>
                  </div>
                  <button className='form__button' disabled={loading}>
                    <ButtonIcon loading={loading} />
                    {i18n("auth.signin")}
                  </button>
                  <div className='form__link'>
                    <div className='link__account'>
                      {i18n("auth.alreadyHaveAnAccount")}
                    </div>
                    <div className='__create'>
                      <Link to='/auth/signup' className='link__create'>
                        {i18n("auth.createAnAccount")}
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
