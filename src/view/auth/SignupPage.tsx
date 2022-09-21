import React, { useState } from "react";
import AuthWrapper from "./styles/AuthWrapper";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import actions from "src/modules/auth/authActions";
import selectors from "src/modules/auth/authSelectors";
import ButtonIcon from "../shared/ButtonIcon";
import InputFormItem from "../shared/form/items/InputFormItem";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import SelectFormItem from "../shared/form/items/SelectFormItem";
import userEnumerators from "../user/userEnumerators";
const schema = yup.object().shape({
  firstName: yupFormSchemas.string("Prènom", {
    max: 80,
    required: true,
  }),
  lastName: yupFormSchemas.string("Nom", {
    max: 175,
    required: true,
  }),
  email: yupFormSchemas.string("Email", {
    required: true,
  }),
  password: yupFormSchemas.string("Mot de passe", {
    required: true,
  }),
  avatars: yupFormSchemas.images("user.fields.avatars", {
    max: 1,
  }),
  newPasswordConfirmation: yupFormSchemas
    .string("Confirmation du nouveau mot de passe", {
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
    phoneNumber: "",
    pays: "",
    occupation: "",
    region: "",
    avatars: [],
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });
  const onSubmit = ({
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    pays,
    occupation,
    region,
  }) => {
    dispatch(
      actions.doRegisterEmailAndPassword(
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        pays,
        occupation,
        region
      )
    );
  };
  return (
    <div className='app__signup'>
      <AuthWrapper>
        <div className='app__login'>
          <div className='Login__container' style={{ paddingTop: 0 }}>
            <div className='login__header'>
              <div className='communiquer__bar'></div>
              <h2>Inscription</h2>
              <div className='communiquer__bar'></div>
            </div>
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='container__form'>
                  <div className='form__avatar'>
                    {/* <div className='avatar'>
                      <label htmlFor='Avatar'>Avatar</label>
                      <div className='avatar__photo'>
                        <img src={user} alt='avatar ' className='lazyload' />
                      </div>
                    </div>
                    <div className='button__avatar'>Modifier</div> */}
                  </div>
                  <div className='group__input'>
                    <InputFormItem
                      name='firstName'
                      label='Nom'
                      placeholder='Nom'
                      autoComplete='Nom'
                      autoFocus
                    />
                    <InputFormItem
                      name='lastName'
                      label='Prenom'
                      placeholder='prenom'
                      autoComplete='prenom'
                      autoFocus
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
                  />
                  <InputFormItem
                    name='newPasswordConfirmation'
                    label='Confirm password'
                    placeholder='password'
                    autoComplete='email'
                    autoFocus
                  />

                  <SelectFormItem
                    name={"pays"}
                    label={"pays"}
                    options={userEnumerators.pays.map((value) => ({
                      value,
                      label: value,
                    }))}
                  />

                  {form.watch().pays && form.watch().pays === "Tunisia" && (
                    <SelectFormItem
                      name={"regionTunisie"}
                      label={"Région"}
                      options={userEnumerators.regionTunisie.map((value) => ({
                        value,
                        label: value,
                      }))}
                    />
                  )}
                  <SelectFormItem
                    name={"occupation"}
                    label={"Occupation"}
                    options={userEnumerators.occupation.map((value) => ({
                      value,
                      label: value,
                    }))}
                  />
                  <InputFormItem
                    name='phoneNumber'
                    label='Phone Number'
                    autoComplete='phoneNumber'
                    autoFocus
                  />
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
