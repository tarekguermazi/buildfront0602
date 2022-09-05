import React, { useState } from "react";
import Footer from "../Layout/Footer";
import AuthWrapper from "./styles/AuthWrapper";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import actions from "src/modules/auth/authActions";
import selectors from "src/modules/auth/authSelectors";
import { check__list, user, background1, background2 } from "src/assets/images";
import ButtonIcon from "../shared/ButtonIcon";
import InputFormItem from "../shared/form/items/InputFormItem";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
const schema = yup.object().shape({
  firstName: yupFormSchemas.string("user.fields.firstName", {
    max: 80,
    required: true,
  }),
  lastName: yupFormSchemas.string("user.fields.lastName", {
    max: 175,
    required: true,
  }),
  email: yupFormSchemas.string("user.fields.email", {
    required: true,
  }),
  password: yupFormSchemas.string("user.fields.password", {
    required: true,
  }),
  avatars: yupFormSchemas.images("user.fields.avatars", {
    max: 1,
  }),
  newPasswordConfirmation: yupFormSchemas
    .string("user.fields.newPasswordConfirmation", {
      required: true,
    })
    .oneOf([yup.ref("password"), null], "auth.passwordChange.mustMatch"),
});
function SignupPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);
  const externalErrorMessage = useSelector(selectors.selectErrorMessage);
  const [initialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    newPasswordConfirmation: "",
    avatars: [],
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });
  const onSubmit = ({ firstName, lastName, email, password }) => {
    dispatch(
      actions.doRegisterEmailAndPassword(firstName, lastName, email, password)
    );
  };
  return (
    <div className='app__signup'>
      <div className='app__member'>
        <div className='member__header'>Devenez membre</div>
        <div className='member__list'>
          <ul>
            <li>
              <img src={check__list} alt='list' className='lazyload' /> Lorem
              ipsum dolor sit amet, consectetur
            </li>
            <li>
              {" "}
              <img src={check__list} alt='list' className='lazyload' /> Nunc
              feugiat consectetur enim, eu sagittis magna accumsan
            </li>
            <li>
              {" "}
              <img src={check__list} alt='list' className='lazyload' /> Donec
              mattis, nunc et venenatis porta
            </li>
            <li>
              {" "}
              <img src={check__list} alt='list' className='lazyload' /> Donec
              mattis, nunc et venenatis porta
            </li>
          </ul>
        </div>
      </div>
      <AuthWrapper>
        <div className='app__login'>
          <div className='Login__container' style={{ paddingTop: 0 }}>
            <div className='archieve__header'>
              <h2>Inscription</h2>
              <div className='communiquer__bar'></div>
            </div>
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='container__form'>
                  <div className='form__avatar'>
                    <div className='avatar'>
                      <label htmlFor='Avatar'>Avatar</label>
                      <div className='avatar__photo'>
                        <img src={user} alt='avatar ' className='lazyload' />
                      </div>
                    </div>

                    <div className='button__avatar'>Modifier</div>
                  </div>
                  <div className='group__input'>
                    <InputFormItem
                      name='firstName'
                      label='Nom'
                      placeholder='Nom'
                      autoComplete='Nom'
                      autoFocus
                      externalErrorMessage={externalErrorMessage}
                    />
                    <InputFormItem
                      name='lastName'
                      label='Prenom'
                      placeholder='prenom'
                      autoComplete='prenom'
                      autoFocus
                      externalErrorMessage={externalErrorMessage}
                    />
                  </div>
                  <InputFormItem
                    name='email'
                    label='Email'
                    placeholder='email'
                    autoComplete='email'
                    autoFocus
                    externalErrorMessage={externalErrorMessage}
                  />
                  <InputFormItem
                    name='password'
                    label='Password'
                    placeholder='password'
                    autoComplete='email'
                    autoFocus
                    externalErrorMessage={externalErrorMessage}
                  />
                  <InputFormItem
                    name='newPasswordConfirmation'
                    label='Confirm password'
                    placeholder='password'
                    autoComplete='email'
                    autoFocus
                    externalErrorMessage={externalErrorMessage}
                  />
                  {/* <div className='form__group'>
                    <label htmlFor='Login'>Pays</label>
                    <input
                      type='text'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className='form__group'>
                    <label htmlFor='Login'>Région</label>
                    <input
                      type='text'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className='form__group'>
                    <label htmlFor='Login'>Occupation</label>
                    <input
                      type='text'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div> */}

                  <button className='form__button' disabled={loading}>
                    <ButtonIcon loading={loading} />
                    Créer un compte
                  </button>

                  <div className='form__link'>
                    <div className='link__account'>Déjà inscrit?</div>
                    <div className='__create'>
                      <Link to='/auth/signin' className='link__create'>
                        Connectez-vous
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </AuthWrapper>
    </div>
  );
}
export default SignupPage;
