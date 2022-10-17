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
import { i18n } from "src/i18n";

import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import SelectFormItem from "../shared/form/items/SelectFormItem";
import userEnumerators from "../user/userEnumerators";
const schema = yup.object().shape({
  firstName: yupFormSchemas.string(i18n("user.fields.firstName"), {
    max: 80,
    required: true,
  }),
  lastName: yupFormSchemas.string(i18n("user.fields.lastName"), {
    max: 175,
    required: true,
  }),
  email: yupFormSchemas.string(i18n("user.fields.email"), {
    required: true,
  }),
  password: yupFormSchemas.string(i18n("user.fields.password"), {
    required: true,
  }),
  newPasswordConfirmation: yupFormSchemas
    .string(i18n("user.fields.newPasswordConfirmation"), {
      required: true,
    })
    .oneOf([yup.ref("password"), null], i18n("auth.passwordChange.mustMatch")),
  avatars: yupFormSchemas.images("user.fields.avatars", {
    max: 1,
  }),
  pays: yupFormSchemas.string(i18n("user.fields.pays"), {
    max: 175,
    required: true,
  }),
  occupation: yupFormSchemas.string(i18n("user.fields.occupation"), {
    max: 175,
    required: true,
  }),
  regionTunisie: yupFormSchemas.string(i18n("user.fields.region"), {
    max: 175,
  }),
  region: yupFormSchemas.string(i18n("user.fields.region"), {
    max: 175,
  }),
  phoneNumber: yupFormSchemas.string(i18n("user.fields.phoneNumber"), {
    matches: /^[0-9]/,
    max: 8,
  }),
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
                  <div className='form__avatar'></div>
                  <div className='group__input'>
                    <InputFormItem
                      name='firstName'
                      label={i18n("user.fields.firstName")}
                      autoComplete='Nom'
                      autoFocus
                    />
                    <InputFormItem
                      name='lastName'
                      label={i18n("user.fields.lastName")}
                      placeholder='prenom'
                      autoComplete='prenom'
                    />
                  </div>
                  <InputFormItem
                    name='email'
                    label='Email'
                    placeholder='email'
                    autoComplete='email'
                    externalErrorMessage={externalErrorMessage}
                  />
                  <InputFormItem
                    name='password'
                    label='Password'
                    placeholder='password'
                    autoComplete='email'
                    type='password'
                  />
                  <InputFormItem
                    name='newPasswordConfirmation'
                    label='Confirm password'
                    placeholder='password'
                    autoComplete='email'
                    type='password'
                  />

                  <SelectFormItem
                    name={"pays"}
                    label={i18n("user.fields.pays")}
                    options={userEnumerators.pays.map((value) => ({
                      value,
                      label: i18n(`user.enumerators.pays.${value}`),
                    }))}
                  />

                  {form.watch().pays && form.watch().pays === "Tunisia" && (
                    <SelectFormItem
                      name={"region"}
                      label={i18n("user.fields.region")}
                      options={userEnumerators.regionTunisie.map((value) => ({
                        value,
                        label: i18n(`user.enumerators.region.${value}`),
                      }))}
                    />
                  )}
                  <SelectFormItem
                    name={"occupation"}
                    label={i18n("user.fields.occupation")}
                    options={userEnumerators.occupation.map((value) => ({
                      value,
                      label: i18n(`user.enumerators.occupation.${value}`),
                    }))}
                  />
                  <InputFormItem
                    name='phoneNumber'
                    label={i18n("user.fields.phoneNumber")}
                    autoComplete='phoneNumber'
                  />
                  <button className='form__button' disabled={loading}>
                    <ButtonIcon loading={loading} />
                    {i18n("auth.signup")}
                  </button>

                  <div className='form__link'>
                    <div className='link__account'>{i18n("auth.already")}</div>
                    <div className='__create'>
                      <Link to='/auth/signin' className='link__create'>
                        {i18n("auth.alreadyHaveAnAccount")}
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
